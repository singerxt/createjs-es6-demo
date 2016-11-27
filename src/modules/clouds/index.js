'use strict'

import { Bitmap } from 'createjs-browserify'
const clouds = new Bitmap('./assets/clouds.jpg')

clouds.addEventListener('tick', () => {
  clouds.x -= 0.4

  if (clouds.x === -700) {
    clouds.x = 0
  }
})

export default clouds;