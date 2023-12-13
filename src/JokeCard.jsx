import { useEffect } from "react";
import { useState } from "react";

const JokeCard = () => {
    const [joke, setJoke] = useState();
    const [secondPartJoke, setSecondPartJoke] = useState("");

    const fetchJokes = async () => {
        try {
            const response = await fetch(
                "https://v2.jokeapi.dev/joke/Programming?type=twopart"
            );
            const obj = await response.json();
            if (obj.error) {
                throw new Error("Error, there is an error in the fetch");
            }
            console.log(obj);
            setJoke(obj);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchJokes();
    }, []);

    const handleClick = () => setSecondPartJoke(joke.delivery);

    return (
        <>
            {!joke ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h1>Programming jokes</h1>
                    <p>{joke.setup}</p>
                    <button onClick={handleClick}>Answer</button>
                    <p>{secondPartJoke}</p>
                </div>
            )}
        </>
    );
};
export default JokeCard;
