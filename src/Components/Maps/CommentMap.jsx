import React from 'react'
import Client from '../../Services/api'
import { useState, useEffect } from 'react'

const CommentMap = ({articleId}) => {

  const [comments, setComments] = useState([])


  useEffect(() => {
    const getComments = async () => {
      let response = await Client.get(`/comments/${articleId}`)
      setComments(response.data)
    }
    getComments()
  }, [articleId])
console.log(comments)

  return (
    <div>
      
      <div className="comment">
      {
        comments.map((response) => {
          return(
            <div key={response.id}>
              <p>
                {response.content}
              </p>
            </div>
          )
        })
      }
      
      </div>
    </div>
  )
}

export default CommentMap