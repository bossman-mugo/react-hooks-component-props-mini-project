function Article(props){
    const dateString = props.date || "January 1, 1970";

    return (
        <article>
            <h3>{props.title}</h3>
            <small>{dateString}</small>
            <p>{props.preview}</p>
        </article>

    )


}

export default Article;