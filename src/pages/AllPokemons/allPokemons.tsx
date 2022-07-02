import './allPokemons.scss'
import axios, { Axios } from "axios";
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';


export const AllPokemons = () => {

    const [pokeData, setPokeData] = useState<{data: any, id: number }[]>([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [nextUrl, setNextUrl] = useState()
    const [prevUrl, setPrevUrl] = useState()


    const pokeFun = async() => {
        setLoading(true);
        const res = await axios.get(url);
        setNextUrl(res.data.next)
        setPrevUrl(res.data.previous)
        console.log(nextUrl);
        console.log(prevUrl);
        
        getPokemon(res.data.results)
        setLoading(false)
    } 

    const getPokemon = async(res: any) =>{
        
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
    }, [url])
    
    return (
        <>
        <div className='all'>
            {
                loading ? <h3>Loading ...</h3> :
                pokeData?.map((item: any, ind: number) => {
                    return(
                        <Card
                            pokemon={item}
                            key={ind}
                        />
                    )
                })
            }
        </div>
        <div className="buttons__pagination">
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
            </div>
        </>
    );
}