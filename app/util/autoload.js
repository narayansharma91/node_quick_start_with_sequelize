const { validationResult } = require('express-validator/check');

const registerAutoLoad = () => {
  const apiResponse = fn => async (req, res, next) => {
    try {
      const { status, data } = await fn(req, res);
      res.status(status).send({
        success: true,
        status,
        data,
      });
    } catch (err) {
      next(err);
    }
  };
  const validationResponse = async (req, res, next) => {
    try {
      const errors = await validationResult(req);
      if (!errors.isEmpty()) {
        const status = 422;
        res.status(status).json({
          success: false,
          status,
          errors: errors.array(),
        });
      }
      next();
    } catch (err) {
      next(err);
    }
  };

  return { apiResponse, validationResponse };
};

module.exports = {
  registerAutoLoad,
};
