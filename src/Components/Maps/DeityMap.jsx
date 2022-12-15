import React from 'react'
import Client from '../../Services/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
            <div className='plsWork' key={response.id}>
              <Link to={{
                pathname:`/articles/deities/${response.id}`
              }}>
                <p className='deityTitle'>{response.title}</p>
                <DeityCard content={response.content} image={response.image}/>
              </Link>
            </div> 
          )}
        })
      }
    </div>
  )
}

export default DeityMap