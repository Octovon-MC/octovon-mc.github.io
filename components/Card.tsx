interface CardProps {
    title: string;
    content?: string;
}

export default function Card(props: CardProps) {
    const hasContent = props.content !== undefined
    const content = hasContent ? <h2>{props.content}</h2> : <></>
    
    return (
        <div id="card">
            <h1>{props.title}</h1>
            {content}
        </div>
    )
}