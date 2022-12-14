import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../../Services/api'
import CommentMap from '../../Components/Maps/CommentMap'

const WorldArticle = () => {
  const [lore, setLore] = useState([])
  const { loreId } = useParams()

  useEffect(() => {
    const getLore = async () => {
      let response = await Client.get(`/articles/${loreId}`)
      setLore(response.data)
    }
    getLore()
  }, [])

  return (
    <div>
      <Link to={`/edit/${loreId}`}>
        <button>Edit Article</button>
      </Link>
      <br />
      <h2>{lore.title}</h2>
      <div>
        <img src={lore.image} />
        <p>{lore.category}</p>
      </div>
      <p>{lore.content}</p>
      <CommentMap articleId={loreId} />
    </div>
  )
}

export default WorldArticle
