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
  return { apiResponse };
};

module.exports = {
  registerAutoLoad,
};
