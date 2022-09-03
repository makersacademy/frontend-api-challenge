/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const PeepsView = require('./peepsView');
const PeepsModel = require('./peepsModel');

describe('PeepsView class', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  })

  it('', () => {
    // stuff
  })


})