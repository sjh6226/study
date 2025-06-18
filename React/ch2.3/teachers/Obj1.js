class Obj1 {
    constructor() {
        this.num = 1;
    };

    updateNum(newNum) {
        this.num = newNum;
    }
}

const obj1 = new Obj1();

// 같은 기능 

/* function Obj1() {
    this.num = 1;
}

Obj1.prototype.updateNum = function(newNum) {
    this.num = newNum;
}

const obj1 = new Obj1(); */