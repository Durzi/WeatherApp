//URL Example - https://api.meteostat.net/v1/stations/search?q=toronto&key=XXXXXXXX
let url = "https://api.meteostat.net/v1/stations/search?q=";
let key = "oP7IzOBZ";

let form = document.querySelector("#submit");
let inputSearch = document.querySelector("#search");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let http = new XMLHttpRequest();

  http.onreadystatechange = function() {
    if (!http) {
      console.log("Failed Request");
    } else {
      try {
        if (this.readyState === 4 && this.status === 200) {
          let results = JSON.parse(this.response);
          console.log(results);
        }
      } catch(e) {
        console.log(results.Error);
      }
    }
  }
  console.log(url + inputSearch.value + "&key=" + key);
  http.open("GET", url + inputSearch.value + "&key=" + key, true);
  http.send();
});



// TODO ****
// 1.) What station(Location) to Search
// 2.) Define search paramaters ie compare weather info from the same day 1 year prior
// 3.) Implement JSON into html and style it
