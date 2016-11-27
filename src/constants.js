'use strict'

import { Stage } from 'createjs-browserify'
const stage = new Stage('canvas')

/**
 * Stage options
 */
stage.canvas.imageSmoothingEnabled = false

/**
 * exports
 */
const constants = {
  stage
}

export default constants
