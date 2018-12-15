var myWorker = new SharedWorker('worker.6.js');
console.log(myWorker);

var input = $('#input1');
var output = $('#output');

output.html('nothing happened');

input.change(evt => {
  console.log('change CB fired');
  myWorker.port.postMessage(JSON.stringify(evt));
});

myWorker.port.onmessage = function(e) {
  output.html('something happened');
  console.log(e);
};
