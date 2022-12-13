import React from 'react'
import Client from '../Services/api'
import { useState, useEffect } from 'react'
import { useParams, Link, useHref } from 'react-router-dom'

const DeityArticles = () => {

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
              <p>{response.content}</p>
            </div> 
          )}
        })
      }
    </div>
  )
}

export default DeityArticles