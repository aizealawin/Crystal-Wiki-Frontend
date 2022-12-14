import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Client from '../../Services/api'

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
      <h2>{lore.title}</h2>
      <div>
        <img src={lore.image} />
        <p>{lore.alignment}</p>
        <p>{lore.category}</p>
        <p>{lore.domains}</p>
        <p>{lore.pantheon}</p>
        <p>{lore.symbol}</p>
        <img src={lore.symbolImage} />
      </div>
      <p>{lore.content}</p>
      <p>{lore.depiction}</p>
      <p>{lore.enemies}</p>
      <p>{lore.commandments}</p>
    </div>
  )
}

export default WorldArticle
