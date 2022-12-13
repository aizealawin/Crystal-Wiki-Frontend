import React from 'react'
import axios from 'axios'
import Client from '../Services/api'
import { useState, useEffect } from 'react'
import { useParams, Link, useHref } from 'react-router-dom'
import WorldArticles from '../Components/WorldArticles'
import DeityArticles from '../Components/DeityArticles'
import MapArticles from '../Components/MapArticles'

const Articles = () => {
  const path = useHref()
  const directories = path.split('/')
  const lastDirectory = directories[directories.length - 1]
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
      {/* {articles.map((response) => {
        if (lastDirectory === 'world') {
          return <WorldArticles />
        }
      })} */}
      {lastDirectory === 'world' ? <WorldArticles /> : null}
      {lastDirectory === 'deities' ? <DeityArticles /> : null}
      {lastDirectory === 'map' ? <MapArticles /> : null}
    </div>
  )
}

export default Articles
