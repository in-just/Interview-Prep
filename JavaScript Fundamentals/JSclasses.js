function Fruit (type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    }
}

function Fruit2(type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = () => {return 'This' + this.type + ' is ' + this.color + '.'};
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());

let lime2 = new Fruit2('Mexican lime2');
console.log(lime2.getInformation());

lime2.color = 'green2';
console.log(lime2.getInformation());