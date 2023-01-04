import Link from 'next/link'
import Meta from '../../../components/Meta'
import { useRouter } from "next/router";
import { articles } from '../../../data';
import {useEffect, useState} from "react";
import Pages from "../../../layout/Pages";

export default function Article() {
    const router = useRouter();
    const [article,setArticle] = useState(
        {
            id: "0",
            title:"loading",
            excerpt: "loading",
            body: "loading"
        });
    const { id } = router.query
    useEffect(() => {
        for(let article of articles){
            if( article.id === id ) {
                setArticle(article)
                break;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
          <h1>{article.title}</h1>
          <p>{article.body}</p>
          <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

Article.layout = Pages;
