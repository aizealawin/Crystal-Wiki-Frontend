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
    
    <div className="ArticlePage">
      <div className = "deity-intro">
        <h2>Deities</h2>
        <h4> Well-known Characters</h4>
        <p> 
          Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Egestas integer eget aliquet nibh. 
          Dignissim enim sit amet venenatis urna cursus eget nunc 
          scelerisque. In eu mi bibendum neque egestas congue. 
          Scelerisque varius morbi enim nunc faucibus a.
          </p>
      </div>
      <div className="Deity-container">
      {
        articles.map((response) => {
          if (response.type === "god"){
          return (
          
            <div className='DeityCard' key={response.id}>
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
    </div>
  )
}

export default DeityMap