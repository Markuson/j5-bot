'use strict';
const five = require('johnny-five');

// const motors = new five.Motors([
//     { pins: { pwm: 5, dir: 4, cdir: 0 } },
//     { pins: { pwm: 14, dir: 12, cdir: 13 } }
// ])

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
        return console.log('Moving forward!')
    },

    reverse(motors, vel) {
        motors.reverse(vel)
        return console.log('Moving backwards!')
    },

    right(motors, vel) {
        motors[1].forward(vel)
        motors[0].reverse(vel)
        return console.log('Moving right!')
    },

    left(motors, vel) {
        motors[1].reverse(vel)
        motors[0].forward(vel)
        return console.log('Moving left!')
    }

}

module.exports = move