'use strict';
const {Board, Led, Proximity} = require('johnny-five');

const board = new Board({
  port:"COM6"
});


board.on("ready", function() {
  console.log("Ready!");

  let led = new Led(13);
  led.blink(500);

  // const proximity = new Proximity({
  //   controller: "GP2Y0A710K0F",
  //   pin: "A0"
  // });

  // setInterval(() => {
  //     console.log("Proximity: ");
  //     console.log("  cm  : ", proximity.cm);
  //     console.log("  in  : ", proximity.in);
  //     console.log("-----------------");
  // },5000)
}); 