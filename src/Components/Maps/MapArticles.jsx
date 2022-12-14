import React from 'react'
import Client from '../../Services/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MapCard from '../MapCard'

const MapArticles = () => {

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
              <Link to={{
                pathname:`/articles/map/${response.id}`
              }}>
                <MapCard title={response.title} content={response.content} image={response.image}/>
              </Link>
            </div> 
          )}
        })
      }
    </div>
  )
}

export default MapArticles