function submitForm() {
  var name = document.getElementById("name-input").value;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:5000/greet?name=" + name, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      document.getElementById("greeting").innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}
