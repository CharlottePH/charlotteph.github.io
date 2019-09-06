const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6WzQ4LDQ2LDQ4LDQ2LDQ4LDQ2LDQ4XSwiaXNzdWVyX2lkIjoxMjIwLCJvcmlnaW4iOiJjaGFybG90dGVwaC5naXRodWIuaW8iLCJhdWQiOiJKb2tlbiIsImV4cCI6MTU2Nzc4NjkzNSwiaWF0IjoxNTY3Nzc5NzM1LCJpc3MiOiJKb2tlbiIsImp0aSI6IjJuMHR1bjZmcnFsdWhqdmh1b2M3YTg4MSIsIm5iZiI6MTU2Nzc3OTczNX0.bU7dk6HsRnADMwHJiq98s25bPAG5Sbg-v1emYGyNsmU";

fetch(
    'https://trefle.io/api/kingdoms?name=blackwood&token=' + token, {
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
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