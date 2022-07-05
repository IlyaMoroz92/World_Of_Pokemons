import './onePokemonPage.scss'
import axios, { Axios } from "axios";
import { useEffect, useState } from 'react';
import { useOnePokemon } from '../../features/getOnePokemon'
import { useParams } from "react-router-dom"
import { usePokemons } from '../../features/getPokemons'
import { Card } from '../../components/Card';
import { Picture } from '../../components/Picture';
import { Likebar } from '../../components/Likebar';
import { Title } from '../../components/Title';
import { IPokemon } from '../../features/getOnePokemon/pokemonOneSlice'

export const OnePokemon = () => {

    const {pokemonsInfo} = usePokemons()

    const {getPokemon, pokemon} = useOnePokemon()
    const { id } = useParams();
    const idPokemon = Number(id)

    useEffect(() => {
        getPokemon(idPokemon)
    }, [id])

    console.log(pokemon)
    return (
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
                            <h4 key={ind} >{el.type.name}</h4>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}


        {/* <div className='pokemon__page' key={pokemon?.id}>
            <img src={`${pokemon?.sprites.other.dream_world.front_default}`} alt={pokemon?.name} />
            <h2>{pokemon?.name}</h2> 
            <h3>Weight: <span>{pokemon?.weight}</span> </h3>
            <h3>Height: <span>{pokemon?.height}</span></h3>
            <h3>Experience: {pokemon?.base_experience}</h3>
            <div className='card__types'>
                <h3>Stats:</h3>
               {pokemon?.stats.map((el: any, ind: number) => {
                    return(
                        <h3 key={ind} >{el.stat.name} : {el.base_stat} </h3>
                    )
                })} 
            </div>
            <div className='card__types'>
                <h3>Type:</h3>
                {pokemon?.types.map((el: any, ind: number) => {
                    return(
                        <h3 key={ind} >{el.type.name}</h3>
                    )
                })}
            </div>
            
        </div> */}