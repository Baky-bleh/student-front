import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className='container'>
      <div className='left-side overflow-x-auto relative'>
        <table>
          <thead>
            <tr>
              <th scope="col" className="py-3 px-6">
                Тун удахгүй
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 Их сургуулийн элсэлт бүртгүүлэх
              </th>
            </tr>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Тэтгэлэг
              </th>
            </tr>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Гадаад их сургууль
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div className={articleStyles.grid}>
          {articles.map((article) => (
            <ArticleItem article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleList
