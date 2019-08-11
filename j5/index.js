'use strict';
const {EtherPortClient} = require('etherport-client');
const five = require('johnny-five');
const move = require('./elements/motors')

const board = new five.Board({
  port: new EtherPortClient({
    host: '192.168.1.144',
    port: 4040
  }),
  repl: true
});


board.on("ready", () => {

  let motors = move.define()

  board.repl.inject({
    forward: (vel, time = 1000) => {
      move.forward(motors, vel)
      board.wait(time , () => {
        motors.stop();
      });
    },
    reverse: (vel, time = 1000) => {
      move.reverse(motors, vel)
      board.wait(time, () => {
        motors.stop();
      });
    },
    right: (vel, time = 1000) => {
      move.right(motors, vel)
      board.wait(time, () => {
        motors.stop();
      });
    },
    left: (vel, time = 1000) => {
      move.left(motors, vel)
      board.wait(time, () => {
        motors.stop();
      });
    }
  });

});