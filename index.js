// const request = require('request');
const { fetchBreedDescription } = require('./breedFetcher');

let breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details: ', error);
    return error;
  } else {
    console.log(desc);
    return desc;
  }
});