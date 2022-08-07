# 1. Plan docs

- chitterModel.js
--chitterModel.test.js
-chitterView.js
--chitterView.test.js
-chitterApi.js
--chitterApi.test.js
-index.js
-index.html
-styles.css

-(use npm bundle to create bundle.js)

# 2. Plan classes and methods

-chitterModel.js

class ChitterModel{
    constructor() {
        this.peeps =[]
    }

    getPeeps

    addPeeps

    reset
}
module.exports = ChitterModel;
-chitterModel.test.js

const ChitterModel = require('./chitterModel');

describe('chitterModel', () => {
    const model = new ChitterModel();

    describe('#getChitters', () => {
        it('returns an empty array with no chitter', () => {
            expect(model.getPeeps()).toEqual([]);
        })
        it('returns the peeps present in the array', () => {
            model.addPeep('Adding test peep1');
            model.addPeep('Adding test peep2');
            expect(model.getPeeps()).toEqual(['Adding test peep1', 'adding test peep2'])
        })
        it('return an empty array when the peeps are reset', () => {
            model.reset();
            expect(model.getPeeps()).toEqual([]);
        })
    })
})