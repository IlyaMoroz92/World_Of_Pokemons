import { Button } from '../Button'
import './Likebar.scss'
import { ReactComponent as Pokeball } from '../../assets/img/pokeball.svg'
import { ReactComponent as Up} from '../../assets/img/Up.svg'


type LikebarProps = {
    postId?: number | undefined
}

export const Likebar = ({postId}: LikebarProps) => {

    return (
        <div className= 'likebar'>
            <div className="likebar__left">
                <Button
                    icon={<Up />}
                    className={'with-icon'}
                    onClick={() =>console.log('like')}
                />
            </div>
            <div className="likebar__right">
                <Button
                    icon={<Pokeball /> } 
                    className={'with-icon'}
                    onClick={() =>console.log('pokeball')}
                />
            </div>
        </div>
    )
}