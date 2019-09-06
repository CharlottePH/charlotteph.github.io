fetch(
    'http://tnrs.iplantc.org/tnrsm-svc/matchNames?retrieve=best&names=zea%20mays,acacia,solanum,saltea', {
        // mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        }
    })
  .then(function(response) {
      console.log(response);
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });