// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  // write some code
  myPromise1 = new Promise((resolve, reject) => {
    if (array.every((word) => typeof word === "string")) {

      resolve(array.map((word) => word.toUpperCase()));

    } else {
      reject("array contains non-sting element(s)")
    }
  })
  return myPromise1;
};

const sortWords = (array) => {
  // write some code
  myPromise2 = new Promise((resolve, reject) => {
    array.sort();
    resolve(array);
    reject("something went wrong in the sorting function");
  });
  return myPromise2
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
