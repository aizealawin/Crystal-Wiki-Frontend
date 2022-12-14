import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Client from '../../Services/api'

const DeityArticle = () => {
  const [deity, setDeity] = useState([])

  const { deityId } = useParams()

  useEffect(() => {
    const getDeity = async () => {
      let response = await Client.get(`/articles/${deityId}`)
      setDeity(response.data)
    }
    getDeity()
    console.log(deity)
  }, [])

  return (
    <div>
      <h2>{deity.title}</h2>
      <div>
        <img src={deity.image} />
        <p>{deity.alignment}</p>
        <p>{deity.category}</p>
        <p>{deity.domains}</p>
        <p>{deity.pantheon}</p>
        <p>{deity.symbol}</p>
        <img src={deity.symbolImage} />
      </div>
      <p>{deity.content}</p>
      <p>{deity.depiction}</p>
      <p>{deity.enemies}</p>
      <p>{deity.commandments}</p>
    </div>
  )
}

export default DeityArticle
