/* eslint-disable react/prop-types */

import NewsCard from './NewsCard'

const infoCards = [
    { color: 'bg-teal-700', title: 'Latest News', text: 'Give me the latest news' },
    { color: 'bg-blue-700', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: 'bg-purple-700', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: 'bg-indigo-800', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

function NewsCards({articles, activeArticle}) {

    if (!articles.length) {
        return (
            <div className="flex-grow transition-opacity duration-500">
                <div className="container h-96 mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {infoCards.map((infoCard, index) => (
                        <div className={`p-4 ${infoCard.color} rounded-lg text-white flex flex-col justify-between`} key={index}>
                            <h5 className="text-lg font-bold">{infoCard.title}</h5>
                            {infoCard.info && (
                                <h6 className="text-base mt-2">
                                    <strong>{infoCard.title.split(' ')[2]}</strong>: <br />
                                    {infoCard.info}
                                </h6>
                            )}
                            <h6 className="text-base mt-2">Try saying: <br /> <i>{infoCard.text}</i></h6>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

  return (
    <div className="flex-grow transition-opacity duration-500">
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {articles.map((article, i) => (
        <div className="flex flex-col" key={i}>
          <NewsCard  i={i} article={article}  activeArticle={activeArticle}/>
        </div>
      ))}
    </div>
  </div>
  )
}

export default NewsCards