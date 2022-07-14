import './allPokemonsPage.scss'
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { usePokemons } from '../../features/getPokemons'
import { Toolsbar } from '../../components/ToolsBar';
import { IPokemon } from '../../features/getOnePokemon/pokemonOneSlice';
import { useTheme } from '../../features/theme/useTheme'




export const AllPokemons: any = () => {
    
    const {theme} = useTheme()
    const {pokemonsInfo, fetchNextPokemons} = usePokemons()
    const [page, setPage] = useState(0)
    
    const getNextPokemons = (page:number): void => {
        fetchNextPokemons(page)
    }

    useEffect(() => {
        let newPage = page
        getNextPokemons(newPage)
    }, [page])

    const showNextPokemons = () => {
        setPage(page + 20)
    }

    const showPrevPokemons = () => {
        if(page >= 20) {
            setPage(page - 20)
        }
    }
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
        </div>
        <div className="buttons__pagination">
                {page > 0 && <Button 
                    onClick={() => {
                        showPrevPokemons()
                    }}
                    className={`text text--${theme}`}
                    text={'Previous'}
                />}
                { page < 1154 && <Button 
                    onClick={() => {
                        showNextPokemons()
                    }}
                    className={`text text--${theme}`}
                    text={'Next'}
                />} 
            </div>
        </>
    );
}