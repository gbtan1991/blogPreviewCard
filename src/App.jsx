import React from 'react'
import Card from './component/Card'


function App() {

const learningCards = [
    {
      title : "HTML & CSS foundations",
      description : "These languages are the backbone of every website, defining structure, content, and presentation.",
      cover: "../src/assets/images/illustration-article.svg",
      category : "Learning",
      publishedDay : 21,
      publishedMonth : 12,
      publishedYear : 2023,
      author: "Greg Hoopper",
      authorPhoto: "../src/assets/images/image-avatar.webp",
    }
]

  return (
    <div className="bg-yellow w-screen h-screen">
      {learningCards.map((card, index) => (
        <Card key={index} card={card} />

      ))}

      
    </div>
  )
}

export default App
