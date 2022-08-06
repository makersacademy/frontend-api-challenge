/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const ChitterModel = require('./chitterModel');
const ChitterView = require('./chitterView');

describe('Chitter view', () =>{
    it('displays 2 peeps', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const model = new ChitterModel();
        const view = new ChitterView(model);
        model.addPeep('First Peep');
        model.addPeep('Another one');

        view.displayPeeps();

        expect(document.querySelectorAll('div.peep').length).toEqual(2);
    })
})