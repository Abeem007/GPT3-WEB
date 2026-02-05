import React from 'react'
import './article.css'
const Article = ({imgUrl,date,title,url}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt={title} />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
           <a href={url} target='_blank' rel='noreferrer' >Read Full Article</a>
      </div>
    </div>
  )
}

export default Article
