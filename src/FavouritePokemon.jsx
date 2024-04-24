import { useState } from "react"

function FavouritePokemon(){
    const [pokemon, setPokemon] = useState({dexNo: 0o1, pokemonName:"Bulbasaur", pokemonType: "Grass"});

    function handleDexNoChange(event){
        setPokemon(p => ({...p, dexNo: event.target.value}));
    }

    function handlePokemonNameChange(event){
        setPokemon(p => ({...p, pokemonName: event.target.value}));
    }

    function handlePokemonTypeChange(event){
        setPokemon(p => ({...p, pokemonType: event.target.value}));
    }
    return(
        <>
            <div className="pokemon-container">
                <div className="pokemon-display">
                    <p>My favourite pokemon is: </p>
                    <p>Dex Number: {pokemon.dexNo}</p>
                    <p>Name: {pokemon.pokemonName}</p>
                    <p>Type: {pokemon.pokemonType}</p>
                </div>

                <div className="pokemon-setter">
                    <input type="number" value={pokemon.dexNo} onChange={handleDexNoChange} />
                    <input type="text" value={pokemon.pokemonName} onChange={handlePokemonNameChange} />
                    <input type="text" value={pokemon.pokemonType} onChange={handlePokemonTypeChange}/>
                </div>
            </div>
        </>
    )
}
export default FavouritePokemon