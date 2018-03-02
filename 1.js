// 理解构造函数和new关键字

function Person() {
  this.name = 'luokai';
  this.age = 25;
  this.sayHello = function() {
    console.log('hello world!');
  };

  // 可以不用写，加了new的运算符后会自动返回this指向的对象
  // return this;
}

// 加了new，函数会自动返回this指向的对象
// 不加new，由于函数体里面没有写return，所以什么也不返回，那么p1就是undefined！
// 如果不加new，就算函数体里面写了this，那么这个this还是指向的全局对象window

const p1 = new Person();
p1.sayHello();
// console.log(p1);
Person.prototype.sayHi = function() {
  console.log('Hi,nice to meet you!');
};

p1.sayHi();
