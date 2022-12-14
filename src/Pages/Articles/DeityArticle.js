import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../../Services/api'
import CommentMap from '../../Components/Maps/CommentMap'
import { useNavigate } from 'react-router-dom'

const DeityArticle = () => {
  const [deity, setDeity] = useState([])
  const navigate = useNavigate()

  const { deityId } = useParams()
  useEffect(() => {
    const getDeity = async () => {
      let response = await Client.get(`/articles/${deityId}`)
      setDeity(response.data)
    }
    getDeity()
  }, [deityId])

  const handleDelete = async (id) => {
    await Client.delete(`/articles/${deityId}`)
    navigate('/')
  }

  return (
    <div>
      <Link to={`/edit/${deityId}`}>
        <button>Edit Article</button>
      </Link>
      <button onClick={handleDelete}>Delete Article</button>
      <br />

      <div className="deityarticle-container">
        <div className="deity-words">
          <h3>{deity.title}</h3>
          <p>{deity.content}</p>
          <h4>Depiction</h4>
          <p>{deity.depiction}</p>
          <h4>Enemies</h4>
          <p>{deity.enemies}</p>
          <h4>Commandments</h4>
          <p>{deity.commandments}</p>
        </div>
        <div className="deity-longcard">
          <img src={deity.image} alt="broken pic" />
          <p>
            <b>Alignment:</b> {deity.alignment}
          </p>
          <p>
            <b>Category:</b>
            {deity.category}
          </p>
          <p>
            <b>Domains:</b>
            {deity.domains}
          </p>
          <p>
            <b>Pantheon:</b>
            {deity.pantheon}
          </p>
          <p>
            <b>Symbol:</b>
            {deity.symbol}
          </p>
          <img src={deity.symbolImage} alt="broken pic" />
        </div>
      </div>

      <div className="Comment-section">
        <h4> Comments: </h4>
        <CommentMap articleId={deityId} />
      </div>
    </div>
  )
}

export default DeityArticle
