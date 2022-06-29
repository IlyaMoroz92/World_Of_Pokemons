import './Title.scss'


type TitleProps = {
    className?: string
    text?: string
}

export const Title = (props: TitleProps) => {
    return (
        <h2 className={props.className}>{props.text}</h2>
    )
}