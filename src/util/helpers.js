export const BASE_URL = 'https://fakestoreapi.com';
export const AUTHENTICATION_WEB_API = 'AIzaSyAK3fR13LMn9fPr5Rw_I5y2Xiplm2IMhTc';
export const TIMEOUT_SEC = 5000;
export const SLEEP_SEC = 4000;

export const timeout = function () {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(
        new Error(
          `Request took too long! Timeout after ${TIMEOUT_SEC / 1000} second`
        )
      );
    }, TIMEOUT_SEC);
  });
};

export const sleep = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, SLEEP_SEC);
  });
};
