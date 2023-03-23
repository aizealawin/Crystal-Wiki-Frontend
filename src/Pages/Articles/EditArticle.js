import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../../Services/api'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const EditArticle = () => {
  const { articleId } = useParams()
  const [article, setArticle] = useState([])
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const getArticle = async () => {
      let response = await Client.get(`/articles/${articleId}`)
      setArticle(response.data)
    }
    getArticle()
  }, [articleId])

  const initialEditState = {
    articleId: parseInt(articleId),
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
      articleId: parseInt(formValues.articleId),
      ...formValues
    }
    articleEdits(newData)
  }

  const articleEdits = async (newData) => {
    try {
      const res = await Client.put(`/articles/${articleId}`, newData)
      return res.newData
    } catch (error) {
      throw error
    }
  }

  return (
    <div>
      {article.type === 'god' ? (
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={formValues.title}
          placeholder="title"
          required
        ></input>
      ) : null}
      {article.type === 'god' ? (
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={formValues.image}
          placeholder="image"
          required
        ></input>
      ) : null}
      {article.type === 'god' ? (
        <input
          type="text"
          name="alignment"
          onChange={handleChange}
          value={formValues.alignment}
          placeholder="alignment"
          required
        ></input>
      ) : null}
      {article.type === 'god' ? (
        <input
          type="text"
          name="category"
          onChange={handleChange}
          value={formValues.category}
          placeholder="category"
          required
        ></input>
      ) : null}
      {article.type === 'god' ? (
        <input
          type="text"
          name="domains"
          onChange={handleChange}
          value={formValues.domains}
          placeholder="domains"
          required
        ></input>
      ) : null}
      {article.type === 'god' ? (
        <input
          type="text"
          name="pantheon"
          onChange={handleChange}
          value={formValues.pantheon}
          placeholder="pantheon"
          required
        ></input>
      ) : null}
      {article.type === 'god' ? (
        <input
          type="text"
          name="symbol"
          onChange={handleChange}
          value={formValues.symbol}
          placeholder="symbol"
          required
        ></input>
      ) : null}
      {article.type === 'god' ? (
        <input
          type="text"
          name="symbolImage"
          onChange={handleChange}
          value={formValues.symbolImage}
          placeholder="symbol image"
          required
        ></input>
      ) : null}
      {article.type === 'god' ? (
        <textarea
          type="text"
          name="content"
          onChange={handleChange}
          value={formValues.content}
          placeholder="content"
          required
        ></textarea>
      ) : null}
      {article.type === 'god' ? (
        <textarea
          type="text"
          name="depiction"
          onChange={handleChange}
          value={formValues.depiction}
          placeholder="depiction"
          required
        ></textarea>
      ) : null}
      {article.type === 'god' ? (
        <textarea
          type="text"
          name="enemies"
          onChange={handleChange}
          value={formValues.enemies}
          placeholder="enemies"
          required
        ></textarea>
      ) : null}
      {article.type === 'god' ? (
        <textarea
          type="text"
          name="commandments"
          onChange={handleChange}
          value={formValues.commandments}
          placeholder="commandments"
          required
        ></textarea>
      ) : null}
      {article.type != 'god' ? (
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={formValues.title}
          placeholder="title"
          required
        ></input>
      ) : null}
      {article.type != 'god' ? (
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={formValues.image}
          placeholder="image"
          required
        ></input>
      ) : null}
      {article.type != 'god' ? (
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
      <button onClick={handleSubmit}>Submit Edits</button>
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>


      <ReactQuill theme="snow" value={value} onChange={setValue} />

    </div>
  )
}

export default EditArticle
