// import { server } from '../config'
import { articles } from '../data'
import ArticleList from '../components/ArticleList'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Pages from "../layout/Pages";

export default function Explore() {
  const [loading,setLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    if(sessionStorage.getItem("authenticated") === "false"){
      setLoading(true)
      router.push("/auth/login")
    }
    else{
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      {
        loading ?
            null
            :
            <> { articles ? <ArticleList articles={articles}/> : null }  </>
      }
    </div>
  )
}

Explore.layout = Pages;
