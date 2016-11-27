'use strict'

import constants from './constants'
import background from './modules/background'
import clouds from './modules/clouds'

const { stage } = constants

stage.addChild(clouds)
stage.addChild(background)

const up = () => {
  requestAnimationFrame(() => {
    stage.update()
    console.log('update')
    up()
  })
}

up()
