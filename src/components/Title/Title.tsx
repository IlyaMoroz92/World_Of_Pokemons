
type TitleProps = {
    className?: string
    text?: string
}

export const Title = (props: TitleProps) => {
    return (
        <h3 className={props.className}>{props.text}</h3>
    )
}