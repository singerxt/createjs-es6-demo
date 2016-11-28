'use strict'

import { Stage } from 'createjs-browserify'
const stage = new Stage('canvas')

/**
 * Stage options
 */
stage.canvas.imageSmoothingEnabled = false
stage.canvas.webkitImageSmoothingEnabled = false
stage.canvas.mozImageSmoothingEnabled = false
stage.canvas.imageSmoothingEnabled = false

/**
 * exports
 */
const constants = {
  stage
}

export default constants
