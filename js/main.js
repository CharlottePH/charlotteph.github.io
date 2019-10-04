const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6WzQ4LDQ2LDQ4LDQ2LDQ4LDQ2LDQ4XSwiaXNzdWVyX2lkIjoxMjIwLCJvcmlnaW4iOiJodHRwczovL2NoYXJsb3R0ZXBoLmdpdGh1Yi5pbyIsImF1ZCI6Ikpva2VuIiwiZXhwIjoxNTcwMTk0NzU2LCJpYXQiOjE1NzAxODc1NTYsImlzcyI6Ikpva2VuIiwianRpIjoiMm41NnFncXVob2xnaWRwaG5zaDlmcGYxIiwibmJmIjoxNTcwMTg3NTU2fQ.Y_fFz0dAkjM6RCw5DF-66rAIZRqjsTsCBMBgfeE4wHA";

const myHeaders = new Headers({
  'Authorization': 'Bearer ' + token
});

const myInit = {
  method: 'GET',
  headers: myHeaders
};

const myRequest = new Request('https://trefle.io/api/kingdoms', myInit);

fetch(myRequest)
  .then(function(response) {
      console.log(response);
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
