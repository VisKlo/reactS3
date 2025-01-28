interface IGreeting {
    name: string;
    age?: number;
}

export const Greeting: React.FC<IGreeting> = ({ name, age }) => {

    return (
        <div>
            <h1>Bonjour { name }</h1>
            {/* { age && <p>Âge: { age }</p> } */}
            { age && (
                age < 0 || age > 120
                    ? <p>Age non valide</p>
                    : <p>Âge: { age }</p>
            )}
        </div>
    )
}