let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;

console.log(rabbit.eats);
// Здесь мы можем сказать, что "animal является прототипом rabbit" или "rabbit прототипно наследует от animal".

// методы animal
let animal = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },
  name: "vasya",
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal,
};

// модифицирует rabbit.isSleeping
rabbit.sleep();
rabbit.name = "alena";
console.log(animal.name);
animal.sleep();

console.log(rabbit.isSleeping); // true// true
console.log(animal.isSleeping); // undefined (нет такого свойства в прототипе)



let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)

delete animal.jumps;

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

С помощью свойства __proto__ задайте
прототипы так, чтобы поиск любого свойства
выполнялся по следующему пути: pockets → bed → table → head.
Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
Ответьте на вопрос: как быстрее получить
значение glasses – через pockets.glasses
или через head.glasses?
При необходимости составьте цепочки поиска и сравните их.

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [],
  __proto__: hamster,
};

let lazy = {
  stomach: [],
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple

let hamster = {
  stomach: [],

  eat(food) {
    // присвоение значения this.stomach вместо вызова this.stomach.push
    this.stomach = [food];
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// Шустрый хомяк нашёл еду
speedy.eat("apple");
alert(speedy.stomach); // apple

// Живот ленивого хомяка пуст
alert(lazy.stomach); // <ничего>

function Rabbit() {}
Rabbit.prototype = {
  jumps: true,
};

let rabbit = new Rabbit();
console.log(rabbit.jumps);
console.log(rabbit.constructor === Rabbit); // false
