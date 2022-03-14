class ChitterModel{
    constructor(){
        this.peepArray = [];
    }

    getPeeps(){
        return this.peepArray;
    }

    addPeep(peep){
        this.peepArray.push(peep);
    }

    setPeeps(data){
        data.forEach((peep) =>{
            this.peepArray.push(peep.body);
        })
    }

};

module.exports = ChitterModel;
