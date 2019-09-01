'use strict';
require('dotenv').config()

const express = require('express')
const pack = require('./package.json')
const routes = require('./routes')
const cors = require('cors')

const {EtherPortClient} = require('etherport-client');
const {Board} = require('johnny-five')
const move = require('./elements/motors')


const { env: { PORT, BoardPort }, argv: [, , port = PORT || 4949], } = process;


const board = new Board({
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
    },
    dfRight: (vel, time = 1000) => {
      move.diagonalFrontRight(motors, vel)
      board.wait(time, () => {
        motors.stop();
      });
    },
    dfLeft: (vel, time = 1000) => {
      move.diagonalFrontLeft(motors, vel)
      board.wait(time, () => {
        motors.stop();
      });
    },
    dbRight: (vel, time = 1000) => {
      move.diagonalBackRight(motors, vel)
      board.wait(time, () => {
        motors.stop();
      });
    },
    dbLeft: (vel, time = 1000) => {
      move.diagonalBackLeft(motors, vel)
      board.wait(time, () => {
        motors.stop();
      });
    }
  });

  // express

    const app = express()

    app.set('motors', motors)
    app.use(cors())

    app.use('/jfbot', routes)

    app.use(function (req, res, next) {
      res.status(404).json({ error: 'Not found.' })
    })

    app.listen(port, () => console.log(`${pack.name} ${pack.version} up on port ${port}`))

});