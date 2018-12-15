var connections = [];

onconnect = function(e) {
  var port = e.ports[0];
  connections.push(port);

  port.onmessage = function(e) {
    for (var i = 0, len = connections.length; i < len; i++) {
      connections[i].postMessage('broadcasting evrywhere');
    }
  };
};
