import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../scss/main.scss'

const ArticlesList = () => {

  const [ArticlesList, setArticles] = useState([])

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles/')

    if (result.status == 200)
      setArticles(await result.json())
  }

  return (
    <div>
       <div className="container">
      <div className="articles-list">
      <div className="grid-container">
        {
          ArticlesList.map(article => (
            <Link key={article.id} to="">
               <div className="grid-item">
                <div className="services">
                  <div className="box">
                    <img src={article.imageUrl} style={{ width: '420px', height: '230px' }} alt="25 mars" />
                      <div className="image">
                      {/* <img src={img_mars} alt="Image of a calender date" /> */}
                    </div>
                    <p>{article.category}</p>
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        }
               </div>
      </div>
    </div>
    </div>
  )


}

export default ArticlesList

              {/* <div className="image"></div>
                <div className="info">
                  <div className="id">{article.id}</div>
                  <div className="title">{article.title}</div>
                  <div className="content">{article.content}</div>
                  <div className="author">{article.author}</div>
                  <div className="published">{article.published}</div>
                  <div className="categories">
                    <div className="category">{article.category}</div>
                  </div>
                  <div className="imageUrl">{article.imageUrl}</div>   
                  <br />
                </div> */}
