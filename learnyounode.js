#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')
    , creditos     = require('./credits')
    , menu        = require('./exercises/menu')

    , name        = 'learnyounode'
    , title       = 'APRENDE NODE.JS TU MISMO Y CONVIERTETE EN UN GANADO!'
    , subtitle    = '\x1b[23mSelecciona un ejercicio y pulsa \x1b[3mEnter\x1b[23m para comenzar'


function fpath (f) {
  return path.join(__dirname, f)
}


workshopper({
    name        : name
  , title       : title
  , subtitle    : subtitle
  , exerciseDir : fpath('./exercises/')
  , appDir      : __dirname
  , helpFile    : fpath('help.txt')
  , menuItems   : [ {
        name    : 'creditos'
      , handler : creditos
    } ]
})
