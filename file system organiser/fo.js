#!/usr/bin/env node
// above  always be on top..
// terminal se input lene ke liye array mei input lete hai process.argv mein
const fs = require('fs')
const path = require('path')
const helpModule = require('../command/help')
const treehelper = require('../command/tree')
const organisehelper = require('../command/organise')

let input = process.argv.slice(2) // 1 index par value dega 
let command = input[0]
// console.log(input)
// let ans = input[0] - '0' ; ->gives ascii value;
// console.log(command);





switch (command) {
    case 'tree':
        // console.log('tree implemented')
        // treeFn(input[1]);
        treehelper.treemodule(input[1]);
        break;
    case 'organise':
        // console.log('organise implemeted')
        // organisefn(input[1])
        organisehelper.organisemodule(input[1]);
        break;
    case 'help':
        // console.log('hey!!');
        // helpfn();
        helpModule.helpmodulecalled();
        break;
    default:
        console.log('please enter a valid command');
        break;
}

// we cann't get inside folder directory first we check for the inside path is  exist or not ;



// tree function implementation


