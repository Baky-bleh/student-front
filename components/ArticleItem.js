import Link from 'next/link'

const ArticleItem = ({ article }) => {
  return (
    <Link legacyBehavior href={`/articles/${article.id}`}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
    </Link>
  )
}

export default ArticleItem
