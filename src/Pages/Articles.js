import React from 'react'
import Client from '../Services/api'
import { useState, useEffect } from 'react'
import { useHref, Link } from 'react-router-dom'
import WorldMap from '../Components/Maps/WorldMap'
import DeityArticles from '../Components/Maps/DeityMap'
import MapArticles from '../Components/Maps/MapArticles'

const Articles = () => {
  const path = useHref()
  const directories = path.split('/')
  const lastDirectory = directories[directories.length - 1]
  let type

  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      let response = await Client.get('/articles')
      setArticles(response.data)
    }
    getArticles()
  }, [])

  return (
    <div className="ArticlePageAlpha">
      {lastDirectory === 'world' ? (
        <Link to={`/new/${(type = 2)}`}>
          <button>New Article</button>
        </Link>
      ) : null}
      {lastDirectory === 'world' ? <WorldMap /> : null}
      {lastDirectory === 'deities' ? (
        <Link to={`/new/${(type = 1)}`}>
          <button>New Article</button>
        </Link>
      ) : null}
      {lastDirectory === 'deities' ? <DeityArticles /> : null}
      {lastDirectory === 'map' ? (
        <Link to={`/new/${(type = 3)}`}>
          <button>New Article</button>
        </Link>
      ) : null}
      {lastDirectory === 'map' ? <MapArticles /> : null}
    </div>
  )
}

export default Articles
