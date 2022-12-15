import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../../Services/api'

const NewArticle = () => {
  const navigate = useNavigate()
  const { articleType } = useParams()
  console.log(articleType)
  let type = ''
  if (articleType === '1') {
    type = 'god'
  } else if (articleType === '2') {
    type = 'lore'
  } else if (articleType === '3') {
    type = 'map'
  }

  const initialEditState = {
    type: type,
    alignment: '',
    category: '',
    commandments: '',
    content: '',
    depiction: '',
    domains: '',
    enemies: '',
    image: '',
    pantheon: '',
    symbol: '',
    symbolImage: '',
    title: ''
  }

  const [formValues, setFormValues] = useState(initialEditState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newData = {
      ...formValues
    }
    articleContent(newData)
  }

  const articleContent = async (newData) => {
    try {
      const res = await Client.post(`/articles/create`, newData)
      return res.newData
    } catch (error) {
      throw error
    }
  }

  return (
    <div>
      {type === 'god' ? (
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={formValues.title}
          placeholder="title"
          required
        ></input>
      ) : null}
      {type === 'god' ? (
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={formValues.image}
          placeholder="image"
          required
        ></input>
      ) : null}
      {type === 'god' ? (
        <input
          type="text"
          name="alignment"
          onChange={handleChange}
          value={formValues.alignment}
          placeholder="alignment"
          required
        ></input>
      ) : null}
      {type === 'god' ? (
        <input
          type="text"
          name="category"
          onChange={handleChange}
          value={formValues.category}
          placeholder="category"
          required
        ></input>
      ) : null}
      {type === 'god' ? (
        <input
          type="text"
          name="domains"
          onChange={handleChange}
          value={formValues.domains}
          placeholder="domains"
          required
        ></input>
      ) : null}
      {type === 'god' ? (
        <input
          type="text"
          name="pantheon"
          onChange={handleChange}
          value={formValues.pantheon}
          placeholder="pantheon"
          required
        ></input>
      ) : null}
      {type === 'god' ? (
        <input
          type="text"
          name="symbol"
          onChange={handleChange}
          value={formValues.symbol}
          placeholder="symbol"
          required
        ></input>
      ) : null}
      {type === 'god' ? (
        <input
          type="text"
          name="symbolImage"
          onChange={handleChange}
          value={formValues.symbolImage}
          placeholder="symbol image"
          required
        ></input>
      ) : null}
      {type === 'god' ? (
        <textarea
          type="text"
          name="content"
          onChange={handleChange}
          value={formValues.content}
          placeholder="content"
          required
        ></textarea>
      ) : null}
      {type === 'god' ? (
        <textarea
          type="text"
          name="depiction"
          onChange={handleChange}
          value={formValues.depiction}
          placeholder="depiction"
          required
        ></textarea>
      ) : null}
      {type === 'god' ? (
        <textarea
          type="text"
          name="enemies"
          onChange={handleChange}
          value={formValues.enemies}
          placeholder="enemies"
          required
        ></textarea>
      ) : null}
      {type === 'god' ? (
        <textarea
          type="text"
          name="commandments"
          onChange={handleChange}
          value={formValues.commandments}
          placeholder="commandments"
          required
        ></textarea>
      ) : null}
      {type != 'god' ? (
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={formValues.title}
          placeholder="title"
          required
        ></input>
      ) : null}
      {type != 'god' ? (
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={formValues.image}
          placeholder="image"
          required
        ></input>
      ) : null}
      {type != 'god' ? (
        <textarea
          type="text"
          name="content"
          onChange={handleChange}
          value={formValues.content}
          placeholder="content"
          required
        ></textarea>
      ) : null}
      <br />
      <button onClick={handleSubmit}>Submit New</button>
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default NewArticle
