const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6WzQ4LDQ2LDQ4LDQ2LDQ4LDQ2LDQ4XSwiaXNzdWVyX2lkIjoxMjIwLCJvcmlnaW4iOiJodHRwczovL2NoYXJsb3R0ZXBoLmdpdGh1Yi5pbyIsImF1ZCI6Ikpva2VuIiwiZXhwIjoxNTcwMjA1ODkyLCJpYXQiOjE1NzAxOTg2OTIsImlzcyI6Ikpva2VuIiwianRpIjoiMm41N2VwMWM5czU0b3Vxb3RnaDloZG8xIiwibmJmIjoxNTcwMTk4NjkyfQ.DeMrFmGjfKABNGKEfMd7pH5kH6kbKlkFOtYl1BYZzPs";

// const myHeaders = new Headers({
//   'Authorization': 'Bearer ' + token
// });

function objectToQuerystring (obj) {
  const keys = Object.keys(obj);
  const encodedParams = keys.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  const queryString = encodedParams.join('&');

  return queryString;
}

function callApi(endpoint, args={}, callback = null) {
  const myInit = {
    method: 'GET'
  };

  const myRequest = new Request(
    'https://trefle.io/api/' + endpoint + '?token=' + token + '&' + objectToQuerystring(args),
    myInit
  );
//https://trefle.io/api/plants?token=...&q=(plantname)
  // fetch(myRequest)
  //   .then(function(response) {
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then(function(myJson) {
  //     console.log(JSON.stringify(myJson));
  //   });

  fetch(myRequest).then(function(response) {
    if (callback) {
      callback(response);
    } else {
      console.log(response);
    }
  });
}

  document.querySelector("#btn_submit").onclick = function(event) {
    //Request + "plantname"
    //$form_query = 'https://trefle.io/api/common_name=$plantname'
    const query = document.querySelector("#plantname").value;
    const size = document.querySelector("#page_size").value;
    callApi("plants", {q: query, page_size: size}, function(response) {
      console.log(response);
      displayResults(response);
    });

    return false;
  }

  function displayResults(results) {
    const list = document.querySelector("div.results div.list ul#results");
    let child;
    list.innerHTML = '';

    results.forEach(function(item, index) {
      child = document.createElement('li');
      child.innerHTML = '<a href="#" class="result-item" data-id="' + item.id + '">' + item.scientific_name + '</a>';
      list.appendChild(child);
    });
  }