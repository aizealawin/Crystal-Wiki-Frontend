import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Client from '../../Services/api'

const MapArticle = () => {
  const [map, setMap] = useState([])

  const { mapId } = useParams()

  useEffect(() => {
    const getMap = async () => {
      let response = await Client.get(`/articles/${mapId}`)
      setMap(response.data)
    }
    getMap()
  }, [])

  return (
    <div>
      <h2>{map.title}</h2>
      <div>
        <img src={map.image} />
        <p>{map.alignment}</p>
        <p>{map.category}</p>
        <p>{map.domains}</p>
        <p>{map.pantheon}</p>
        <p>{map.symbol}</p>
        <img src={map.symbolImage} />
      </div>
      <p>{map.content}</p>
      <p>{map.depiction}</p>
      <p>{map.enemies}</p>
      <p>{map.commandments}</p>
    </div>
  )
}

export default MapArticle
