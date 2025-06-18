class MyButton {
    constructor() {
        this.buttonElement = document.createElement('button');
        this.buttonElement.textContent = 'Click here';

        const obj1 = new Obj1();

        obj1.updateNum(5);

        this.buttonElement.addEventListener('click', () => {
            this.buttonElement.textContent = obj1.num;
        });

        document.getElementById('root').appendChild(this.buttonElement);
    }
}

const myButton = new MyButton();