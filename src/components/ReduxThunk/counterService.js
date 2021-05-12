let count = 0;
export const incrementCounterService = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(count++);
    }, 1000)
  );
};

export const decrementCounterService = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(count--);
    }, 1000)
  );
};

export const resetCounterService = () => {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(0);
    }, 1000);
  });
};
