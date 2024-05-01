import alanBtn from '@alan-ai/alan-sdk-web'
import { useEffect, useState } from 'react'
import './App.css'
import wordsToNumber from 'words-to-number'

import NewsCards from './components/NewsCards'

const alanKey = 'e5dde779a7693307b9e984b8b60649882e956eca572e1d8b807a3e2338fdd0dc/stage'; // Add your Alan AI key here

function App() {
  const[newsArticles, setNewsArticles] = useState([])
  const[activeArticle, setActiveArticle] = useState(-1);
  // const [isOpen, setIsOpen] = useState(false);
 
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({command, articles, number}) => {
            if(command === 'newHeadlines'){
              console.log(articles);
              setNewsArticles(articles);
              setActiveArticle(-1);
            }else if(command === 'highlight'){
              setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
            }else if (command === 'open'){
              const parsedNumber = number.length > 2 ? wordsToNumber(number, { fuzzy: true }) : number;
              const article = articles[parsedNumber - 1];
              if(parsedNumber > 20){
                alanBtn().playText('Please try that again...')
              }else if(article){
                window.open(article.url, '_blank')
                alanBtn().playText('Opening...')
              } else{
                alanBtn().playText('Please try that again...')
              }
            }
      },
    });
  },[])

  return (
    <>
      <div className="flex justify-around items-center w-full p-0 sm:flex-col sm:text-center">
          <img src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/655c50a3f72bd9cd7925f888_Alan%20AI%20Studio%20scripts.webp" className="h-[120px] rounded-xl p-0 my-3 sm:h-35vmin" alt="logo" />
      </div>
       <NewsCards articles={newsArticles} activeArticle = {activeArticle}/>
       {/* <Modal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </>
  )
}

export default App
