function requestFunction() {
    var array, option;
    var dataList = document.getElementById("json-datalist");

    var input = document.getElementById("word").value;
    var http = new XMLHttpRequest();
    http.onreadystatechange = function(response) {
        while (dataList.hasChildNodes()) {
            dataList.removeChild(dataList.lastChild);
        }
        if (http.readyState == 4 && http.status == 200) {
            array = JSON.parse(http.responseText);
            
            console.log("aaaaa", array);
            array.forEach(function(item) {
                option = document.createElement('option');
                option.value = item;
                dataList.appendChild(option);
            });
            console.log("request Sucsess");
        } else {
            console.log("http.readyState", http.readyState);
            console.log("http.status", http.status);
            console.log("error");
        }
    };
    http.open("POST", "/findword", true);
    http.send(input);
}
