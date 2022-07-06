// class Worker {
// 	constructor(name, lastName, rate, days) {
// 		this.name = name
// 		this.lastName = lastName
// 		this.rate = rate
// 		this.days = days
// 	}
// 	getSalary() {
// 		return this.rate * this.days
// 	}
// }

// var worker = new Worker('Иван', 'Иванов', 10, 31)

// console.log(worker.name) //выведет 'Иван'
// console.log(worker.lastName) //выведет 'Иванов'
// console.log(worker.rate) //выведет 10
// console.log(worker.days) //выведет 31
// console.log(worker.getSalary()) //выведет 310 - то есть 10*31

// class Worker2 extends Worker {
// 	constructor(name, lastName, rate, days) {
// 		super(name, lastName, rate, days)
// 	}
// }

// var worker2 = new Worker2('John', 'Doe', 30, 31)
// console.log(`salary of John ${this.name}`)
// console.log(worker2.getSalary())

// class Worker3 extends Worker {
// 	constructor(name, lastName, rate, days) {
// 		super(name, lastName, rate, days)
// 	}
// }

// var worker3 = new Worker3('Dr', 'Dre', 50, 31)
// console.log(`salary of Dr Dre ${this.name}`)
// console.log(worker3.getSalary())

// ---------------------------------------------------------------------
// class Worker {
// 	constructor(name, lastName, rate, days) {
// 		this.name = name
// 		this.lastName = lastName
// 		this.rate = rate
// 		this.days = days
// 	}
// 	getName() {
// 		return this.name
// 	}
// 	getLastName() {
// 		return this.lastName
// 	}
// 	getRate() {
// 		return this.rate
// 	}
// 	getDays() {
// 		return this.days
// 	}

// 	getSalary() {
// 		return this.days * this.rate
// 	}
// }
// var worker = new Worker('Иван', 'Иванов', 10, 31)

// console.log(worker.getName()) //выведет 'Иван'
// console.log(worker.getLastName()) //выведет 'Иванов'
// console.log(worker.getRate()) //выведет 10
// console.log(worker.getDays()) //выведет 31
// console.log(worker.getSalary()) //выведет 310 - то есть 10*31
// ---------------------------------------------------------------------------------------------------------------------

// class Worker {
// 	constructor(name, lastName, rate, days) {
// 		this.#rate = rate
// 		this.#days = days
// 	}
// 	#rate
// 	#days
// 	getRate() {
// 		return this.#rate
// 	}
// 	setRate(value) {
// 		this.#rate = value
// 	}
// 	getDays() {
// 		return this.#days
// 	}
// 	setDays(value) {
// 		this.#days = value
// 	}
// 	getSalary() {
// 		return this.#rate * this.#days
// 	}
// }

// var worker = new Worker('Иван', 'Иванов', 10, 31)

// console.log(worker.getRate()) //выведет 10
// console.log(worker.getDays()) //выведет 31
// console.log(worker.getSalary()) //выведет 310 - то есть 10*31

// //Теперь используем сеттер:
// worker.setRate(20) //увеличим ставку
// worker.setDays(10) //уменьшим дни
// console.log(worker.getSalary()) //выведет 200 - то есть 20*10
// -----------------------------------------------------------------------------

// class MyString {
// 	constructor() {}
// 	reverse(str) {
// 		let reversStr = ' '
// 		for (let i = str.length - 1; i >= 0; i--) {
// 			reversStr += str[i]
// 		}
// 		return reversStr
// 	}
// 	ucFirst(str) {
// 		let newStr = str[0].toUpperCase() + str.slice(1)
// 		return newStr
// 	}
// 	ucWords(str) {
// 		let arr = str.split('  ')
// 		let strArr = []
// 		for (let i = 0; i < arr.length; i++) {
// 			let a = arr[i]
// 			let newStr = a[0].toUpperCase() + a.slice(1)
// 			strArr.push(newStr)
// 		}
// 		return strArr.join(' ')
// 	}
// }

// var str = new MyString()

// console.log(str.reverse('abcde')) //выведет 'edcba'
// console.log(str.ucFirst('abcde')) //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')) //выведет 'Abcde Abcde Abcde'
// -----------------------------------------------------------------------------

// class Animal {
// 	constructor(type, age, name) {
// 		this.type = type
// 		this.age = age
// 		this.name = name
// 	}
// }

// class Dog extends Animal {
// 	constructor(type, age, name, gav) {
// 		super(type, age, name)
// 		this.gav = gav
// 	}
// 	sayGav() {
// 		console.log(`Gav ${this.gav} `)
// 	}
// }

// class Cat extends Animal {
// 	constructor(type, age, name, jump) {
// 		super(type, age, name)
// 		this.jump = jump
// 	}
// 	sayCat() {
// 		console.log(`Прыгаю `)
// 	}
// }
// class Wolf extends Dog {
// 	constructor(type, age, name, weight) {
// 		super(type, age, name)
// 		this.weight = 20
// 	}
// 	sayWeight() {
// 		console.log(20)
// 	}
// }
// class Tiger extends Cat {
// 	constructor(type, age, name, weight) {
// 		super(type, age, name)
// 		this.weight = 50
// 	}
// 	sayWeight() {
// 		console.log(50)
// 	}
// }

// const animal = new Animal('predator', 20, 'Rembo')
// const dog = new Dog('mammal', 4, 'Sunny', 1)
// const cat = new Cat('cat', 5, 'Lucky')
// const wolf = new Wolf('predator ', 7, 'Beowolf')
// const tiger = new Tiger('cat ', 15, 'Sherhan')

// console.log(animal)
// dog.sayGav()
// cat.sayCat()
// wolf.sayWeight()
// tiger.sayWeight()
// -----------------------------------------------------------------
// class Validator {
// 	constructor() {}
// 	isEmail(str) {
// 		return str.indexOf('@') !== -1 && str.indexOf('.') !== -1
// 	}
// 	isDomain(str) {
// 		return str.indexOf('.com') !== -1 || str.indexOf('.net') !== -1
// 	}
// 	isDate(str) {
// 		let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/)
// 		return date === null ? false : true
// 	}
// 	isPhone(str) {
// 		let phone = str.match(/\+996\ \([0-9]{3}\)\ [0-9]{2}-[0-9]{2}-[0-9]{2}/)
// 		return phone === null ? false : true
// 	}
// }
// let validator = new Validator()
// console.log(validator.isEmail('kam@gmail.com'))
// console.log(validator.isDomain('net.net'))
// console.log(validator.isDate('22.10.1989'))
// console.log(validator.isPhone('+996 (555) 00-83-77'))
