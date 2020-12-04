const request = require('request');

let breed = process.argv[2];

let searchURL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(searchURL, (error, response, body) => {

  if (error) {
    console.log("Something went wrong");
  } else { 
    //   //need to get the error code to show 404 when breed not found?
    // }
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log(typeof body)
    //console.log('body:', body); // Print the HTML for the Google homepage.
    
    if (body === "[]"){
      console.log("Queried breed not found.")
    } else {
      const data = JSON.parse(body);
      console.log(data[0].description);

    }

    // console.log(data); // Prints the object of the body in a reader friendly way
    // console.log(typeof data);
    // console.log(data[0].description);
  }
});

//throw error 500 is server had a problem