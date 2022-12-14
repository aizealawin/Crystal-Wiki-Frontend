import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../../Services/api'
import CommentMap from '../../Components/Maps/CommentMap'

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
  console.log(map)
  return (
    <div>
      <Link to={`/edit/${mapId}`}>
        <button>Edit Article</button>
      </Link>
      <br />
      <h2>{map.title}</h2>
      <div>
        <img src={map.image} />
        <p>{map.category}</p>
      </div>
      <p>{map.content}</p>
      <CommentMap articleId={mapId} />
    </div>
  )
}

export default MapArticle
