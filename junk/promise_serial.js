Promise.resolve()
  .then(function () {
    return new Promise(function(resolve, reject) {
      console.log('1');
      setTimeout(function() {
        console.log('1 done');
        resolve(1);
      }, 100);
    });
  })
  .then(function(value) { // value === 1
    return new Promise(function(resolve, reject) {
      console.log('2');
      setTimeout(function() {
        console.log('2 done');
        resolve(2);
      }, 50);
    });
  })
  .then(function(value) { // value === 2
    return new Promise(function(resolve, reject) {
      console.log('3');
      setTimeout(function() {
        console.log('3 done');
        resolve(3);
      }, 10);
    });
  })
  .then(function(value) { // value === 3
    console.log('all done');
    console.log(value);
  })
  .catch(function(err) {
    console.log(err);
  });
