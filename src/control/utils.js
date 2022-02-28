import _ from "lodash";

export { errorHandler };

function errorHandler(name, errorObj) {
  let isError = false,
    errorMessage = "";
  if (errorObj && Boolean(_.get(errorObj, name))) {
    isError = true;
    errorMessage = _.get(errorObj, name).message;
  }

  return { isError, errorMessage };
}
