import axios from 'axios'
import { Input } from '../Input'
import './Toolsbar.scss'
import { useState, useEffect} from 'react';
import { Card } from '../Card';
import { useTheme } from '../../features/theme/useTheme'
import { usePokemons } from '../../features/getPokemons/usePokemons'
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

    const {pokemonsInfo, getSortIdPokemonsMore, getSortIdPokemonsLess, getSortNamePokemonsMore, getSortNamePokemonsLess} = usePokemons()


/*     useEffect(() => {
        sortIdPokemonsMore()
    }, [pokemonsInfo]) */

    const sortIdPokemonsMore = (): void => {
        getSortIdPokemonsMore()
    }
    
    const sortIdPokemonsLess = (): void => {
        getSortIdPokemonsLess()
    }

    const sortNamePokemonsMore = (): void => {
        getSortNamePokemonsMore()
    }

    const sortNamePokemonsLess = (): void => {
        getSortNamePokemonsLess()
    }


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

    const getSortList = (event:any) => {
        if(event.target.value === 'id+') {
            sortIdPokemonsMore()
        } else if (event.target.value === 'id-') {
            sortIdPokemonsLess()
        } else if (event.target.value === 'name+') {
            sortNamePokemonsMore()
        } else if (event.target.value === 'name-') {
            sortNamePokemonsLess()
        }
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
            <div className="toolsbar__sort">
            <select onChange={getSortList} className={`toolsbar__select toolsbar__select--${theme}`}> Sort
                <option value="id+">Id ↑</option>
                <option value="id-">Id ↓</option>
                <option value="name+">Name ↑</option>
                <option value="name-">Name ↓</option>
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