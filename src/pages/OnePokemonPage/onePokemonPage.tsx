import './onePokemonPage.scss'
import { useEffect } from 'react';
import { useOnePokemon } from '../../features/getOnePokemon'
import { useParams } from "react-router-dom"
import { Picture } from '../../components/Picture';
import { Likebar } from '../../components/Likebar';
import { Navigator } from '../../components/Navigator';


export const OnePokemon = () => {

    const {getPokemon, pokemon, species, getSpecies} = useOnePokemon()
    const { id } = useParams();
    const idPokemon = Number(id)
    
    useEffect(() => {
        getPokemon(idPokemon)
    }, [idPokemon, getPokemon])

    useEffect(() => {
        if(pokemon) {
        getSpecies(pokemon.species.url)
        }
    }, [pokemon, getSpecies])

    return (
        <div className="pokemon__page-container">
        <div className='pokemon__page' key={pokemon?.id}>
            <div className="pokemon__page-left">
                <Picture src={`${pokemon?.sprites.other.dream_world.front_default}`} alt={pokemon?.name} />
                <h2 className='pokemon__title'>{pokemon?.name}</h2> 
                <Likebar pokemonId={pokemon?.id}/>
            </div>
            <div className="pokemon__page-right">
                <div className="card__pokemon card__options">
                    <h4>Weight: <span>{pokemon?.weight}</span> kg</h4>
                    <h4>Height: <span>{pokemon?.height}</span> dm</h4>
                    <h4>Experience: {pokemon?.base_experience}</h4>
                </div>
                <div className='card__pokemon card__stats'>
                    <h3>Stats:</h3>
                    <h4>Happines: {species?.base_happiness}</h4>
                    {pokemon?.stats.map((el: any, ind: number) => {
                        return(
                            <h4 key={ind} >{el.stat.name} : {el.base_stat} </h4>
                        )
                    })}
                </div>
                <div className='card__pokemon card__types'>
                    <h3>Type:</h3>
                    {pokemon?.types.map((el: any, ind: number) => {
                        return(
                            <h4 className={el.type.name} key={ind} >{el.type.name}</h4>
                        )
                    })}
                </div>
            </div>
            </div>
            <Navigator id={pokemon?.id} />
        </div>
    )
}
