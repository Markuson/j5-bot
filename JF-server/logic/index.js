const validate = require('jfs-validate')
const { LogicError } = require('jfs-errors')
const move = require('../elements/motors')
const bcrypt = require('bcrypt')

const logic = {

    /**
     * move the motors in the given direction at the given speed and during the given time, 
     * if time is not given or is 0 the motors will move until you send a stop order
     *
     * @param {string} direction    the direction you want to move forward(f), backward (b), 
     *                              left (l), right (r), diagonal front left (dfl), diagonal front right (dfr),
     *                              diagonal back left (dbl), diagonal back right (dbr), stop (s)
     *
     * @param {number} velocity     the velocity you want to move, 0 is minimum velocity and 255 max velocity
     *
     * @param {number} time         the time in miliseconds you want to move. if its 0 it will move until you send a stop comand.
     */
    motors(motors, direction, velocity = 255, time = 0){

        validate.arguments([
            { name: 'direction', value: direction, type: 'string', notEmpty: true },
            { name: 'velocity', value: velocity, type: 'number', optional: true },
            { name: 'time', value: time, type: 'number', optional: true }
        ])

        const response = {
            direction: '',
            time: 0,
            velocity: velocity
        }

        if(direction != 'f' && direction != 'b' && direction != 'r' && direction != 'l' 
        && direction != 'dfr' && direction != 'dfl' && direction != 'dbr' && direction != 'dbl' && direction != 's'){
            throw new LogicError(`${direction} is not a valid command direction you should use 'f', 'b', 'r', 'l', 'dr', 'dl' or 's'`)
        }

        if (velocity > 255) velocity = 255

        switch (direction) {
            case 'f':
                move.forward(motors, velocity)
                response.direction = 'forward'
                break
            case 'b':
                move.reverse(motors, velocity)
                response.direction = 'reverse'
                break
            case 'l':
                move.left(motors, velocity)
                response.direction = 'left'
                break
            case 'r':
                move.right(motors, velocity)
                response.direction = 'right'
                break
            case 'dfl':
                move.diagonalFrontLeft(motors, velocity)
                response.direction = 'diagonal forward left'
                break
            case 'dfr':
                move.diagonalFrontRight(motors, velocity)
                response.direction = 'diagonal forward right'
                break
            case 'dbl':
                move.diagonalBackLeft(motors, velocity)
                response.direction = 'diagonal reverse left'
                break
            case 'dbl':
                move.diagonalBackRight(motors, velocity)
                response.direction = 'diagonal reverse right'
                break
            case 's':
                motors.stop()
                response.direction = 'stopped'
                break
            default:
                motors.stop()
                response.direction = 'wrong direction command'
                break
        }

        if (time > 0 ){
            board.wait(time, () => {
                motors.stop();
              });
            response.time = time
        }

        return response
    }

}

module.exports = logic