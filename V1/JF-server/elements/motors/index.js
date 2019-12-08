'use strict';
const five = require('johnny-five');

const move ={

    define() {
        let motors = new five.Motors([
            { pins: { pwm: 5, dir: 4, cdir: 0 } },
            { pins: { pwm: 14, dir: 12, cdir: 13 } }
        ])

        return motors
    },

    forward(motors, vel) {
        motors.forward(vel)
        return 'Moving forward!'
    },

    reverse(motors, vel) {
        motors.reverse(vel)
        return 'Moving backwards!'
    },

    right(motors, vel) {
        motors[1].forward(vel)
        motors[0].reverse(vel)
        return 'Moving right!'
    },

    left(motors, vel) {
        motors[1].reverse(vel)
        motors[0].forward(vel)
        return 'Moving left!'
    },

    diagonalFrontRight(motors, vel) {
        motors[1].forward(vel)
        motors[0].forward(Math.floor(vel/2))
        return 'Moving diagonal right!'
    },

    diagonalFrontLeft(motors, vel) {
        motors[1].forward(Math.floor(vel/2))
        motors[0].forward(vel)
        return 'Moving diagonal left!'
    },

    diagonalBackRight(motors, vel) {
        motors[1].reverse(vel)
        motors[0].reverse(Math.floor(vel/2))
        return 'Moving diagonal right!'
    },

    diagonalBackLeft(motors, vel) {
        motors[1].reverse(Math.floor(vel/2))
        motors[0].reverse(vel)
        return 'Moving diagonal left!'
    }

}

module.exports = move