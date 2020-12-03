const request = require('request');

let breed = process.argv[2];

let searchURL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(searchURL, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log(typeof body)
  console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  console.log(data[0].description);
});
