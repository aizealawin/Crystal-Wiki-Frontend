import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../../Services/api'
import CommentMap from '../../Components/Maps/CommentMap'

const DeityArticle = () => {
  const [deity, setDeity] = useState([])

  const { deityId } = useParams()
  const type = 1
  useEffect(() => {
    const getDeity = async () => {
      let response = await Client.get(`/articles/${deityId}`)
      setDeity(response.data)
    }
    getDeity()
  }, [deityId])
  console.log(deity)
  return (
    <div>
      <Link to={`/edit/${deityId}`}>
        <button>Edit Article</button>
      </Link>
      <br />
      <Link to={`/new/${type}`}>
        <button>New Article</button>
      </Link>
      <h2>{deity.title}</h2>
      <div>
        <img src={deity.image} alt="broken pic" />
        <p>{deity.alignment}</p>
        <p>{deity.category}</p>
        <p>{deity.domains}</p>
        <p>{deity.pantheon}</p>
        <p>{deity.symbol}</p>
        <img src={deity.symbolImage} alt="broken pic" />
      </div>
      <p>{deity.content}</p>
      <p>{deity.depiction}</p>
      <p>{deity.enemies}</p>
      <p>{deity.commandments}</p>
      <CommentMap articleId={deityId} />
    </div>
  )
}

export default DeityArticle
