Promise.all([
  new Promise(function(resolve, reject) {
    console.log('1');
    setTimeout(function() {
      console.log('1 done');
      resolve(1);
    }, 100);
  }),

  new Promise(function(resolve, reject) {
    console.log('2');
    setTimeout(function() {
      console.log('2 done');
      resolve(2);
    }, 50);
  }),

  new Promise(function(resolve, reject) {
    console.log('3');
    setTimeout(function() {
      console.log('3 done');
      resolve(3);
    }, 10);
  })
]).then(
  function(results) {
    console.log('all done');
    console.log(results);
  },

  function(err) {
    console.log(err);
  }
);
