'use strict';
const {EtherPortClient} = require('etherport-client');
const five = require('johnny-five');


const board = new five.Board({
  port: new EtherPortClient({
    host: '192.168.1.145',
    port: 4040
  }),
  repl: true
});

// const LED_PIN = 16;

// board.on('ready', () => {
//   board.pinMode(LED_PIN, five.Pin.OUTPUT);
//   // the Led class was acting hinky, so just using Pin here
//   const pin = five.Pin(LED_PIN);
//   let value = 0;
//   setInterval(() => {
//     if (value) {
//       pin.high();
//       value = 0;
//     } else {
//       pin.low();
//       value = 1;
//     }
//   }, 5000);
// });

board.on("ready", function() {
    var motor;

    motor = new five.Motor({
      pins: {
        pwm: 5,
        dir: 4
      }
    });

    this.repl.inject({
      motor: motor
    });

    motor.on("start", function() {
      console.log("start", Date.now());
    });

    motor.on("stop", function() {
      console.log("automated stop on timer", Date.now());
    });

    motor.on("forward", function() {
      console.log("forward", Date.now());

      // demonstrate switching to reverse after 5 seconds
      board.wait(5000, function() {
        motor.reverse(50);
      });
    });

    motor.on("reverse", function() {
      console.log("reverse", Date.now());

      // demonstrate stopping after 5 seconds
      board.wait(5000, function() {
        motor.stop();
      });
    });

    // set the motor going forward full speed
    motor.forward(255);
  });