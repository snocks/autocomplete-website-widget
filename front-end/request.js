
module.exports = function requestFunction(){
	var input = document.getElementById("word").value;
	var http = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log("request Sucsess");
    }else{
    	console.log("error");
    }
  };
  http.open("POST", "/findword", true);
  http.send(input);
}