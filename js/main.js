const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcCI6WzQ4LDQ2LDQ4LDQ2LDQ4LDQ2LDQ4XSwiaXNzdWVyX2lkIjoxMjIwLCJvcmlnaW4iOiJjaGFybG90dGVwaC5naXRodWIuaW8iLCJhdWQiOiJKb2tlbiIsImV4cCI6MTU3MDE5Mjc5MCwiaWF0IjoxNTcwMTg1NTkwLCJpc3MiOiJKb2tlbiIsImp0aSI6IjJuNTZtdWNsZ2ZyZnFzZm1zY2g5Zm1zMSIsIm5iZiI6MTU3MDE4NTU5MH0.h57ObF-9xAFM4C7uLVBZSJt6HNdNodG-rAkxIaf0V2s";

fetch(
    'https://trefle.io/api/kingdoms?name=blackwood&token=' + token, {
        //mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
  .then(function(response) {
      console.log(response);
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });