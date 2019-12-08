const { expect } =  require ('chai')
const logic = require('.')
const {Board} = require('johnny-five')
const {EtherPortClient} = require('etherport-client');
const move = require('../elements/motors')
const { LogicError, RequirementError, ValueError, FormatError } = require('jfs-errors')


// const board = new Board({
//     port: new EtherPortClient({
//         host: '192.168.1.144',
//         port: 4040
//     }),
//     repl: true
// });


// board.on("ready", () => {

//     const motors = move.define()
//     let direction = ''
// })

describe('logic', () => {

    // describe('motors move', () => {

    //     it('algo pass', () =>{
    //         expect(true).to.exist
    //     })

        // it('should succeed on moving forward', () => {

        //     direction = 'f'
        //     const response = logic.motors(motors, direction)
        //     expect(response).to.exist
        //     expect(response.direction).to.exist
        //     expect(response.direction).to.equal('forward')
        //     expect(response.velocity).to.exist
        //     expect(response.velocity).to.equal(255)
        //     expect(response.time).to.exist
        //     expect(response.time).to.equal(0)

        // })

        // it('should succeed on moving backwards', () => {

        //     direction = 'b'
        //     const response = logic.motors(motors)
        //     expect(response).to.exist
        //     expect(response.direction).to.exist
        //     expect(response.direction).to.equal('reverse')
        //     expect(response.velocity).to.exist
        //     expect(response.velocity).to.equal(255)
        //     expect(response.time).to.exist
        //     expect(response.time).to.equal(0)

        // })

        // it('should succeed on moving left', () => {

        //     direction = 'l'
        //     const response = logic.motors(motors)
        //     expect(response).to.exist
        //     expect(response.direction).to.exist
        //     expect(response.direction).to.equal('left')
        //     expect(response.velocity).to.exist
        //     expect(response.velocity).to.equal(255)
        //     expect(response.time).to.exist
        //     expect(response.time).to.equal(0)

        // })

        // it('should succeed on moving right', () => {

        //     direction = 'r'
        //     const response = logic.motors(motors)
        //     expect(response).to.exist
        //     expect(response.direction).to.exist
        //     expect(response.direction).to.equal('right')
        //     expect(response.velocity).to.exist
        //     expect(response.velocity).to.equal(255)
        //     expect(response.time).to.exist
        //     expect(response.time).to.equal(0)

        // })

        // it('should succeed on moving diagonal forward left', () => {

        //     direction = 'dfl'
        //     const response = logic.motors(motors)
        //     expect(response).to.exist
        //     expect(response.direction).to.exist
        //     expect(response.direction).to.equal('diagona forward left')
        //     expect(response.velocity).to.exist
        //     expect(response.velocity).to.equal(255)
        //     expect(response.time).to.exist
        //     expect(response.time).to.equal(0)

        // })

        // it('should succeed on moving diagonal forward right', () => {

        //     direction = 'dfr'
        //     const response = logic.motors(motors)
        //     expect(response).to.exist
        //     expect(response.direction).to.exist
        //     expect(response.direction).to.equal('diagona forward right')
        //     expect(response.velocity).to.exist
        //     expect(response.velocity).to.equal(255)
        //     expect(response.time).to.exist
        //     expect(response.time).to.equal(0)

        // })

        // it('should succeed on moving diagonal reverse left', () => {

        //     direction = 'dbl'
        //     const response = logic.motors(motors)
        //     expect(response).to.exist
        //     expect(response.direction).to.exist
        //     expect(response.direction).to.equal('diagona reverse left')
        //     expect(response.velocity).to.exist
        //     expect(response.velocity).to.equal(255)
        //     expect(response.time).to.exist
        //     expect(response.time).to.equal(0)

        // })

        // it('should succeed on moving diagonal reverse right', () => {

        //     direction = 'dbr'
        //     const response = logic.motors(motors)
        //     expect(response).to.exist
        //     expect(response.direction).to.exist
        //     expect(response.direction).to.equal('diagona reverse right')
        //     expect(response.velocity).to.exist
        //     expect(response.velocity).to.equal(255)
        //     expect(response.time).to.exist
        //     expect(response.time).to.equal(0)

        // })

        // it('should fail on undefined direction', () => {
        //     const name = undefined

        //     expect(() => logic.motors(direction)).to.throw(RequirementError, `name is not optional`)
        // })

        // it('should fail on null name', () => {
        //     const name = null

        //     expect(() => logic.motors(direction)).to.throw(RequirementError, `name is not optional`)
        // })

        // it('should fail on empty name', () => {
        //     const name = ''

        //     expect(() => logic.motors(direction)).to.throw(ValueError, 'name is empty')
        // })

        // it('should fail on blank name', () => {
        //     const name = ' \t    \n'

        //     expect(() => logic.motors(direction)).to.throw(ValueError, 'name is empty')
        // })
    // })

})
