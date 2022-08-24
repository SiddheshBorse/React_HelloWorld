import React from "react";

// function Greet(props) {
//     return <h1>Hello {props.name}</h1>
// }

const Greet = () => {
    let arra = [1, 2, 3, 4, 5]
    let arrb = [3, 4, 5, 6, 7]
    arra = [...arra, ...arrb]
    console.log(arra);
    const object = {
        name: 'ABC ',
        age: 19,
        college: 'Vit'
    }
    const { name, age, college } = object;
    return <h1> Hello {name}</h1>
}

export default Greet