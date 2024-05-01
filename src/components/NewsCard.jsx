/* eslint-disable react/prop-types */
import { useState, useEffect, createRef } from 'react';

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  activeArticle,
  i
}) => {
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);
    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <div ref={elRefs[i]} className={`max-w-sm rounded overflow-hidden shadow-lg ${activeArticle === i ? 'border-b-8 border-blue-800' : 'flex flex-col justify-between border-b-8 border-white'}`}>
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <img className="h-64 w-full object-cover" src={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'} alt={title} />
        <div className="px-6 py-4 flex justify-between m-5">
          <span className="text-gray-400 text-xs">{(new Date(publishedAt)).toDateString()}</span>
          <span className="text-gray-400 text-xs">{source.name}</span>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </a>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <a href={url} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
        <span className="text-xs text-gray-400">{i + 1}</span>
      </div>
    </div>
  );
};

export default NewsCard;