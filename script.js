var myWorker = new SharedWorker('worker.7.js');
console.log(myWorker);

var input = $('#input1');
var output = $('#output');

output.html('nothing happened');

input.change(evt => {
  myWorker.port.postMessage(evt.target.value);
});

myWorker.port.onmessage = function (e) {
  output.html('something happened');
  input.val(e.data);
};
