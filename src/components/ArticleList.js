import Article from "./Article";

function ArticleList(props){
const articleFeatures = props.articles.map((article) => (
    <Article
    key={article.id}
    title={article.title}
    date={article.date}
    preview={article.preview}
    />
));

    return (
        <main>{articleFeatures}</main>

    )
}

export default ArticleList;