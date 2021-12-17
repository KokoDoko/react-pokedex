import "./styles.css";
import { useState, useEffect } from "react";
import { Card } from "./Card";

export function App() {
    const [pokemon, setPokemon] = useState([])
    const [page, setPage] = useState(0)
    const [amount, setAmount] = useState(0)

    const listItems = pokemon.map((pok, index) => (
        <Card key={pok.name} pokemon={pok} delay={index} />
    ));

    // NOTE: THIS API CALL ALSO INCLUDES THE COUNT (TOTAL NUMBER) = 1118

    const loadJson = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${8}&offset=${8 * page}`)
            .then((response) => response.json())
            .then((data) => dataWasLoaded(data))
            .catch((error) => console.error("Noooo"))
    };

    const dataWasLoaded = (data) => {
        // data bevat ook een next en previous url! je hoeft dit niet zelf bij te houden
        setAmount(data.count)
        setPokemon(data.results);
    };

    const nextPage = (dir) => {
        if (page + dir >= 0 && page + dir < 228) {
            setPage((page) => page + dir);
        }
    };

    // elke keer als page verandert wordt json opnieuw geladen
    useEffect(loadJson, [page]);

    return (
        <div className="App">
            <h1>React Pokémon API</h1>
            <p>
                Amount of pokémon: {amount}
            </p>
            <div className="container">{listItems}</div>
            <div className="navigation">
                <button onClick={() => nextPage(-1)}>Previous page</button>
                <b>Page {page + 1}</b>
                <button onClick={() => nextPage(1)}>Next page</button>
            </div>
        </div>
    );
}
