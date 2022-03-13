/**
 * @jest-environment jsdom
 */

const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');
const fs = require('fs');

describe(ChitterView, () => {
  describe('viewPeeps', () => {
    it('Shows all peeps', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const chittermodel = new ChitterModel;
      chittermodel.addPeep('Hello, world');
      chittermodel.addPeep("It's great here");

      const chitterview = new ChitterView(chittermodel);
      chitterview.viewPeeps();

      expect(document.querySelectorAll('div.peep').length).toEqual(2);
    });
  });
  describe('add a new peep', () => {
    it('adds a new peep on the web page', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const chittermodel = new ChitterModel;
      const chitterView = new ChitterView(chittermodel);

      const input = document.querySelector('#user-input');
      input.value = "This is a peep!";
      const button = document.querySelector('#submit-peep-button');
      button.click();

      expect(document.querySelectorAll('div.peep').length).toEqual(1);
      expect(document.querySelectorAll('div.peep')[0].innerText).toEqual('This is a peep!');
    })
  })
  describe('Register user', () => {
    it('Allows the user to register their details', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      const chitterView = new ChitterView(chittermodel);

      const username = document.querySelector('#username');
      username.value = "Makers";
      const password = document.querySelector('#password');
      password.value = "Academy";

      const button = document.querySelector('#button');
      button.click();

      expect

  
    })
  })
});