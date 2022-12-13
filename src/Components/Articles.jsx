import React from 'react'
import axios from 'axios'
import Client from '../Services/api'
import { useState, useEffect } from 'react'
import {useParams, Link, useHref} from 'react-router-dom'

const Articles = () => {

  const path = useHref()
  const directories = path.split('/')
  const lastDirectory = directories[(directories.length -1)]
  console.log(lastDirectory)

  const [articles, setArticles] = useState([])
  
  useEffect(() => {
    const getArticles = async () => {
      let response = await Client.get('/articles')
      setArticles(response.data)
    }
    getArticles()
  }, [])


  return (
    <div>
      {
        articles.map((response) => {
          if (response.type === "map"){
          return (
            <div key={response.id}>
              <p>{response.content}</p>
            </div> 
          )}
        })
      }
    </div>
  )
}

export default Articles