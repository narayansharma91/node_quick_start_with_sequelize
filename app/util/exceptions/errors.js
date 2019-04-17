const errorCodes = {
  notFound: 'notFound',
};

class ErrorResponse extends Error {
  constructor({ message, status, code }) {
    super();
    this.message = message;
    this.status = status;
    this.code = code;
    Error.captureStackTrace(this, ErrorResponse);
  }
}
class UserNotFound extends Error {
  constructor(message) {
    super();
    this.message = message;
    Error.captureStackTrace(this, UserNotFound);
  }
}

module.exports = { ErrorResponse, errorCodes, UserNotFound };
