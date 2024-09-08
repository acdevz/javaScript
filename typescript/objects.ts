/* Bad Behaviour of objs */
function createUser({ name: string, age: number }) {}
const newUser = { name: 'Jane', age: 22, email: 'jane@dev' }
createUser(newUser) // This will not throw an error
// createUser({ name: 'Jane', age: 22, email: 'jane@dev' }) // This will throw an error


/* Type Aliases */
type ID = string | number

type Customer = { 
    readonly _id : string,
    name: string,
    age: number,
    creditCard?: number,
    printDetails(): void
}

let customer: Customer = {
    _id: '1',
    name: 'John Doe',
    age: 25,
    printDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}
// customer._id = '2' // This will throw an error

/* Intersection Types */
type cardNumber = {
    cardNumber: number
}
type cardHolder = {
    cardHolder: string
}
type CreditCard = cardNumber & cardHolder

const creditCard: CreditCard = {
    cardNumber: 123456789,
    cardHolder: 'John Doe'
}
