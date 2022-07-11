import axios from 'axios'
import { Input } from '../Input'
import './Toolsbar.scss'
import { useEffect, useState } from 'react';
import { Card } from '../Card';


type ToolsbarProps = {
    className?: string
}

type Data = {
    id: number
    name: string
    sprites?: any
    types: any
}

type PokemonSearch = {
    data: Data
}

export const Toolsbar = (props: ToolsbarProps) => {



    const [pokemon, setPokemon] = useState('pikachu')
    const [pokemonData, setPokemonData] = useState<[Data]>()
    const [pokemonType, setPokemonType] = useState('')

    const getSearchPokemon = async () => {
        

        

        const toArray: any  = []
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const res: PokemonSearch = await axios.get(url)
            toArray.push(res.data)
            setPokemonType(res.data.types[0].type.name)
            setPokemonData(toArray)

        } catch (e) {
            console.log(e);
        }
    }

    const handleChange = (e: any) => {
        setPokemon(e.target.value.toLowerCase())
    }

    const  handleSubmit = ( e: any) => {
        e.preventDefault();
        getSearchPokemon()
    }

    console.log(pokemonData);
    
    return (
        <div className='toolsbar__main'>
        <div className= {`toolsbar toolsbar--${props.className}`}>
            <div className="search">
                <form onSubmit={handleSubmit}>
                    <label>
                        <Input
                            onChange={handleChange}
                            className='toolsbar'
                            type='text'
                            placeholder=' 🔍 Search...'
                        />
                    </label>
                </form>
                
            </div>
            <div className="sort">
            <select className='toolsbar__select'> Sort
                <option value="id">Id</option>
                <option value="id">Name</option>
                <option value="weight">Weight</option>
                <option value="height">Height</option>
                <option value="base_experience">Experience</option>
            </select>
            </div>
        </div>
                    <div className='search__result'>
                    {
                    pokemonData?.map((data) => {
                        return(
                            <Card
                                titleId={true}
                                likebar={true}
                                nameId={true}
                                id={data.id}
                                name={data.name}
                                sprites={data.sprites.other.dream_world.front_default}
                                key={data.id}
                            />
                            )
                    })
                    }
                </div> 
        </div>
    )
}