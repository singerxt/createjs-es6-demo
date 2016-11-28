'use strict'

import { Bitmap } from 'createjs-browserify'
const clouds = new Bitmap('./assets/clouds.png')

clouds.scaleX = 1;
clouds.scaleY = 0.8;

clouds.addEventListener('tick', () => {
  clouds.x -= 0.1

  if (clouds.x === -700) {
    clouds.x = 0
  }
})

export default clouds;