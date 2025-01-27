import React from "react";

interface IGreeting {
    name: string;
    age?: number;
}

const Greeting: React.FC<IGreeting> = ({ name, age }) => {
    const minAge = 18;
    const maxAge = 80;

    let ageMessage = '';

    if(age){
        if (age < minAge) {
            ageMessage = "L'âge est trop bas. L'âge minimum est 18.";
        } else if (age > maxAge) {
            ageMessage = "L'âge est trop élevé. L'âge maximum est 80.";
        } else {
            ageMessage = `Vous avez ${age} ans.`;
        }
    }
    return (
        <div>
            <h1>Salut, { name }</h1>
            {ageMessage && <p>{ ageMessage }</p>}
        </div>
    )
}

export default Greeting;