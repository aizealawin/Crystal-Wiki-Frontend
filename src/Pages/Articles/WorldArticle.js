import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../../Services/api'
import CommentMap from '../../Components/Maps/CommentMap'

const WorldArticle = () => {
  const [lore, setLore] = useState([])
  const { loreId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getLore = async () => {
      let response = await Client.get(`/articles/${loreId}`)
      setLore(response.data)
    }
    getLore()
  }, [loreId])

  const handleDelete = async (id) => {
    await Client.delete(`/articles/${loreId}`)
    navigate('/')
  }

  return (
    <div>
      <Link to={`/edit/${loreId}`}>
        <button>Edit Article</button>
      </Link>
      <button onClick={handleDelete}>Delete Article</button>

      <br />
      <h2>{lore.title}</h2>
      <div>
        <img src={lore.image} alt="world img" />
        <p>{lore.category}</p>
      </div>
      <p>{lore.content}</p>
      <CommentMap articleId={loreId} />
    </div>
  )
}

export default WorldArticle
