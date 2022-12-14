import React from 'react'
import Client from '../../Services/api'
import { useState, useEffect } from 'react'
import { useParams, Link, useHref } from 'react-router-dom'
import DeityCard from '../DeityCard'

const DeityMap = () => {

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
          if (response.type === "god"){
          return (
            <div key={response.id}>
              <Link to={{
                pathname:`/articles/deities/${response.id}`
              }}>
                <DeityCard title={response.title} content={response.content} image={response.image}/>
              </Link>
            </div> 
          )}
        })
      }
    </div>
  )
}

export default DeityMap