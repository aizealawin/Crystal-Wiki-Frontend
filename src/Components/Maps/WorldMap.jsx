import React from 'react'
import Client from '../../Services/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import WorldCard from '../WorldCard'

const WorldMap = () => {

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
          if (response.type === "lore"){
          return (
            <div key={response.id}>
              <Link to={{
                pathname:`/articles/lore/${response.id}`
              }}>
                <WorldCard title={response.title} content={response.content} image={response.image}/>
              </Link>
            </div> 
          )}
        })
      }
    </div>
  )
}

export default WorldMap