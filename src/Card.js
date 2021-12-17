import "./styles.css";
import { Spinner } from "./Spinner"
import { Details } from "./Details"
import { useState, useEffect } from "react";

export function Card({delay, pokemon}) {

    const [loading, setLoading] = useState(true)
    const [details, setDetails] = useState({})

    const loadJson = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then((response) => response.json())
            .then((data) => setDetails(data))
            .catch((error) => console.error("Noooo"))
            .finally(() => setLoading(false))
    }

    useEffect(loadJson, [])

    return (
        <div className="Card" style={{ animationDelay: `${delay / 10}s` }}>
            { loading ? <Spinner /> : <Details details={details} /> }
        </div>
    );
}
