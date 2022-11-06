export const BASE_URL = 'https://fakestoreapi.com';
export const TIMEOUT_SEC = 5000;

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
