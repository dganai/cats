// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function (breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    // if (!error) return data;
    // CHANGE: Pass data into callback instead of returning directly
    console.log("In readFile's Callback: it has the data.");
    if(!error) functionToRunWhenThingsAreDone(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value
// CHANGE: moved console..log into new function
// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!
const printOutCatBreed = breed => {
  console.log('return value: ', breed) // -> prints out details correctly
};

// CHANGE: now passing two args into breedDetailsFromFile: breed string and callback
breedDetailsFromFile('Bombay', printOutCatBreed);