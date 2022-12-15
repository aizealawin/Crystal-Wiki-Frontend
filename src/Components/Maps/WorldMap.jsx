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
    <div className='world-container-parent'>
      <div className = "world-intro">
        <h2>World Information</h2>
        <h4> Current and Ongoing Lore</h4>
        <p> 
          Lorem ipsum dolor sit amet, consectetur adipiscing 
          elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Egestas integer eget aliquet nibh. 
          Dignissim enim sit amet venenatis urna cursus eget nunc 
          scelerisque. In eu mi bibendum neque egestas congue. 
          Scelerisque varius morbi enim nunc faucibus a.
          </p>
      </div>
      <div className="World-container">
      {
        articles.map((response) => {
          if (response.type === "lore"){
          return (
            <div className="WorldCard" key={response.id}>
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
    </div>
  )
}

export default WorldMap