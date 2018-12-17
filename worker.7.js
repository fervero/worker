var connections = [];

onconnect = function (e) {
  var port = e.ports[0];
  connections.push(port);

  port.onmessage = function (e) {
    connections.forEach(function (connection) {
      if (connection !== port) {
        connection.postMessage('' + e.data);
      }
    });
  };
};
