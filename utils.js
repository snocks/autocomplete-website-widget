var fs = require('fs');

// var fileContents = fs.readFileSync('./utils.js', { encoding: 'utf8' });
// var dataList = document.getElementById('json-datalist');
// var input = document.getElementById('ajax');
var  text =  fs.readFileSync('./dictionary.txt');
module.exports = function(req, res) {
  res.end(text);


    }
    // // Create a new XMLHttpRequest.
    // var request = new XMLHttpRequest();

// // Handle state changes for the request.
// request.onreadystatechange = function(response) {
//   if (request.readyState === 4) {
//     if (request.status === 200) {
//       var text = request.responseText;
//       console.log("TRRRRRR",text);
//       var final = text.split('\n')
//       // Loop over the JSON array.
//       final.forEach(function(item) {
//         // Create a new <option> element.
//         var option = document.createElement('option');
//         // Set the value using the item in the JSON array.
//         option.value = item;
//         // Add the <option> element to the <datalist>.
//         dataList.appendChild(option);
//       });

//       // Update the placeholder text.
//       input.placeholder = "e.g. datalist";
//     } else {
//       // An error occured :(
//       input.placeholder = "Couldn't load datalist options :(";
//     }
//   }
// };

// // Update the placeholder text.
// input.placeholder = "Loading options...";
// var text = JSON

// // Set up and make the request.
// request.open('GET', 'https://raw.githubusercontent.com/gazaskygeeks/bootcamp/master/words.txt', true)
// request.send();
