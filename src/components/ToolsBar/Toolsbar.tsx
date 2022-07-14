import axios from 'axios'
import { Input } from '../Input'
import './Toolsbar.scss'
import { useState } from 'react';
import { Card } from '../Card';
import { useTheme } from '../../features/theme/useTheme'
import { Title } from '../Title';

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

    const {theme} = useTheme()
    const [pokemon, setPokemon] = useState('pikachu')
    const [pokemonData, setPokemonData] = useState<[Data]>()

    const getSearchPokemon = async () => {

        const toArray: any  = []
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const res: PokemonSearch = await axios.get(url)
            toArray.push(res.data)
            setPokemonData(toArray)
            } catch (e) {
        }
    }

    const handleChange = (e: any) => {
        setPokemonData(undefined)
        setPokemon(e.target.value.toLowerCase())
    }

    const  handleSubmit = ( e: any) => {
        e.preventDefault();
        getSearchPokemon()
    }

    return (
        <div className='toolsbar__main'>
        <div className= {`toolsbar toolsbar--${props.className}`}>
            <div className="search">
                <form onSubmit={handleSubmit}>
                    <label>
                        <Input
                            onChange={handleChange}
                            className={`toolsbar input--toolsbar--${theme}`}
                            type='text'
                            placeholder=' 🔍 Search...'
                        />
                    </label>
                </form>
            </div>
            <div className="sort">
            <select className={`toolsbar__select toolsbar__select--${theme}`}> Sort
                <option value="id">Id</option>
                <option value="id">Name</option>
                <option value="weight">Weight</option>
                <option value="height">Height</option>
                <option value="base_experience">Experience</option>
            </select>
            </div>
        </div>
            {
            pokemonData?.map((data) => {
                return(
                    <div className='search__result' key={data.id}>
                        <Title className='title' text='Search result:'/>
                        <Card
                            titleId={true}
                            likebar={true}
                            nameId={true}
                            id={data.id}
                            name={data.name}
                            sprites={data.sprites.other.dream_world.front_default}
                        />
                    </div>
                )
            })
            }
        </div>
    )
}