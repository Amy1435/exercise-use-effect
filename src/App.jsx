import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
    const [joke, setJoke] = useState();

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
    return <></>;
}

export default App;
