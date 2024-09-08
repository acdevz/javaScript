/* Types by Inference */
let helloWorld = "helloWorld"

/* Fun Fact : Visual Studio Code uses TypeScript under the hood to make it easier to work with JavaScript.! */

/* Inferred typed object */
// const user = {
//     name: "Hayes",
//     id: 0,
//   };

interface User {
    name: string;
    id: number;
}

const user : User = {
    name: "Hayes",
    id: 0
}

/* With functions */
function getLength(obj: User) : string {
    return `The length of the object is ${obj.name.length}`
}
getLength(user)

/* Composing Types: Union */
type WindowStates = "open" | "closed" | "minimized";
type pi = 3.14 | 3.1415 | 3.14159

/* Composing Types: Generics provide variables to types. */
const arr : Array<string> = ["a", "b"];
const arr2 : string[] = ["a", "b"];

interface Pair<T, U> {
    key: T,
    value: U,
    getKey: () => T,
    getValue: () => U
    setKey: (key: T) => void,
    setValue: (value: U) => void,
}
// declare is used to tell the compiler that the variable has been created elsewhere
declare const pair : Pair<number, string> 

let person : [string, number] = ["John Doe", 25];
let rgb : [number, number, number] = [255, 0, 0];

// but..
// rgb.push(0.5) // This will not throw an error
const rgb2 : readonly [number, number, number] = [255, 0, 0];
// rgb2.push(0.5) // This will throw an error


/* ⭐ Reopening of interfaces */
interface User {
    email?: string
}

interface Admin extends User {
    role: string
}