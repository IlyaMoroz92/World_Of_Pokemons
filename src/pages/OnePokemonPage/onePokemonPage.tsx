import './onePokemonPage.scss'
import axios, { Axios } from "axios";
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { useOnePokemon } from '../../features/getOnePokemon'
import { useParams } from "react-router-dom"


export const OnePokemon: any = () => {

    const {getPokemon, pokemon} = useOnePokemon()
    const { id } = useParams();
    const idPokemon = Number(id)

    useEffect(() => {
        getPokemon(idPokemon)
    }, [id])

    return (
        <div className='pokemon__page' key={pokemon?.id}>
            <img src={`${pokemon?.sprites.other.dream_world.front_default}`} alt={pokemon?.name} />
            <h2>{pokemon?.name}</h2>
            <h2>{pokemon?.id}</h2>
            <h3>Weight {pokemon?.weight}</h3>
            <h3>Height {pokemon?.height}</h3>
            <div className='card__types'>
                <h3>Type:</h3>
                {pokemon?.types.map((el: any, ind: number) => {
                    return(
                        <h3 key={ind} >'{el.type.name}'</h3>
                    )
                })}
            </div>
            
        </div>
    );
}