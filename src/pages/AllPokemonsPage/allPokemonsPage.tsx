import './allPokemonsPage.scss'
import axios, { Axios } from "axios";
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { usePokemons } from '../../features/getPokemons'
import { Toolsbar } from '../../components/ToolsBar';
import { fetchPokemons } from '../../sagas/getPokemonsSaga';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IPokemon } from '../../features/getOnePokemon/pokemonOneSlice';

export const AllPokemons: any = () => {

    const {pokemonsInfo, fetchNextPokemons} = usePokemons()
    const [page, setPage] = useState(20)

    /* console.log(pokemonsInfo); */
    
    const getNextPokemons = (page:number): void => {
        fetchNextPokemons(page)
    }




    const dispatch = useAppDispatch()

    useEffect(() => {
        getNextPokemons(page)
    }, [page])


    
/*     const [pokeData, setPokeData] = useState<{data: any, id: number }[]>([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [nextUrl, setNextUrl] = useState()
    const [prevUrl, setPrevUrl] = useState()


    const pokeFun = async() => {
        setLoading(true);
        const res = await axios.get(url);
        setNextUrl(res.data.next)
        setPrevUrl(res.data.previous)
        getPokemon(res.data.results)
        setLoading(false)
    } */

   /*  const getPokemon = async(res: any) =>{
        res.map(async(item: any) => {
            const result = await axios.get(item.url)
            setPokeData(state => {
                state=[...state, result.data]
                state.sort((a,b) => a.id - b.id)
                return state;
            })
        })
    }

    useEffect(() => {
        pokeFun();
    }, [url]) */

    return (
        <>
        <Toolsbar/>
        <div className='all'>
            {
                pokemonsInfo?.map((item: IPokemon) => {
                    return(
                        <Card
                            titleId={true}
                            likebar={true}
                            nameId={true}
                            id={item.id}
                            name={item.name}
                            sprites={item.sprites.other.dream_world.front_default}
                            key={item.id}
                        />
                    )
                })
            } 
{/*             {
                loading ? <h3>Loading ...</h3> :
                pokemons?.map((item: any, ind: number) => {
                    return(
                        <div key={ind}>
                            {item.name}
                            
                            
                            <Card
                            id = {item.id}
                            name = {item.name}
                            sprites= {item.sprites}
                            key={ind}
                        /> 
                        </div>
                    )
                })
            } */}
        </div>
        <div className="buttons__pagination">
                {/* prevUrl && */ <Button 
                    onClick={() => {
                        
                    }}
                    className='text'
                    text={'Previous'}
                />}
                { /* nextUrl && */<Button 
                    onClick={() => {
                        setPage(page + 20)
                        /* console.log(page); */
                    }}
                    className='text'
                    text={'Next'}
                />} 
            </div>


            
{/*         <div className="buttons__pagination">
                {prevUrl && <Button 
                    onClick={() => {
                        setPokeData([])
                        setUrl(prevUrl)
                    }}
                    className='text'
                    text={'Previous'}
                />}
                { nextUrl &&<Button 
                    onClick={() => {
                        setPokeData([])
                        setUrl(nextUrl)
                    }}
                    className='text'
                    text={'Next'}
                />} 
            </div> */}
        </>
    );
}