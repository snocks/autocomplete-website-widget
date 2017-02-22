// Get the <datalist> and <input> elements.
var dataList = document.getElementById('json-datalist');
var input = document.getElementById('ajax');

// Create a new XMLHttpRequest.
var request = new XMLHttpRequest();

// Handle state changes for the request.
request.onreadystatechange = function(response) {
  if (request.readyState === 4) {
    if (request.status === 200) {
      var text = request.responseText;
      var final = text.split('\n')
      final.forEach(function(item) {
        var option = document.createElement('option');
        option.value = item;
        dataList.appendChild(option);
      });

      input.placeholder = "e.g. datalist";
    } else {
      input.placeholder = "Couldn't load datalist options :(";
    }
  }
};

input.placeholder = "Loading options...";
var text = JSON

request.open('GET', 'https://raw.githubusercontent.com/gazaskygeeks/bootcamp/master/words.txt', true)
request.send();
