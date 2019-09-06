fetch(
    'https://trefle.io/api/kingdoms?name=blackwood', {
        //mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer QnNpWEtRSFNkN2Zqa1BZUlpZQVN5dz09',
            'Origin': 'https://charlotteph.github.io/'
        }
    })
  .then(function(response) {
      console.log(response);
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });