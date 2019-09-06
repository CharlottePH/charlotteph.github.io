fetch(
    'https://trefle.io/api/kingdoms?name=blackwood', {
        //mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6WzQ4LDQ2LDQ4LDQ2LDQ4LDQ2LDQ4XSwiaXNzdWVyX2lkIjoxMjIwLCJvcmlnaW4iOiJodHRwczovL2NoYXJsb3R0ZXBoLmdpdGh1Yi5pbyIsImF1ZCI6Ikpva2VuIiwiZXhwIjoxNTY3Nzg1NzQ0LCJpYXQiOjE1Njc3Nzg1NDQsImlzcyI6Ikpva2VuIiwianRpIjoiMm4wdHNoczNycW1pZ21qczVnYzdhNjMxIiwibmJmIjoxNTY3Nzc4NTQ0fQ.2tB5ORA_xrQleiS85gEgCfYz-ZDKWXfnvd2ZVvGP0IQ',
            'Origin': 'https://charlotteph.github.io'
        }
    })
  .then(function(response) {
      console.log(response);
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });