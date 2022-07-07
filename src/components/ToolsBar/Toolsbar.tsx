import { Button } from '../Button'
import { Input } from '../Input'
import './Toolsbar.scss'


type ToolsbarProps = {
    className?: string
}

export const Toolsbar = (props: ToolsbarProps) => {
    
    return (
        <div className= {`toolsbar toolsbar--${props.className}`}>
            <div className="search">
                <Input
                    className='toolsbar'
                    type='search'
                    placeholder='🔍 Search...'
                />
            </div>
            <div className="sort">
            <select className='toolsbar__select'> Sort
                <option value="id">Id</option>
                <option value="weight">Weight</option>
                <option value="height">Height</option>
                <option value="base_experience">Experience</option>
                <option value="Hp ">Attack</option>
                <option value="Hp ">Defense </option>
                <option value="Hp ">Speed </option>
            </select>
            </div>
        </div>
    )
}