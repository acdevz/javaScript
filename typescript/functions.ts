const sayHello = (name: string): string => {
    return `Hello ${name}`
}

const consoleLog = (message: string): void => {
    console.log(message)
}

// never: function throws an exception or terminates execution of the program.
const handleError = (error: string): never => {
    throw new Error(error)
}