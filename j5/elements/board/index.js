'use strict';
const {EtherPortClient} = require('etherport-client');
const five = require('johnny-five');

const board = new five.Board({
    port: new EtherPortClient({
      host: '192.168.1.144',
      port: 4040
    }),
    repl: true
  });

  module.exports = board