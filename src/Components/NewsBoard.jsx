import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import SkeletonCard from "./LoadingCardl";
const NewsBoard = ({category}) => {
  const [Articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch articles:", err);
        setIsLoading(false);
      });
  }, [category]);

  return (
    <div className="px-4 py-6">
      <div className="text-center text-3xl font-semibold mb-6">
        Latest
        <span className="bg-red-700 text-white ml-2 px-3 py-1 rounded-[6px] tracking-wide">
          News
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {isLoading
          ? [...Array(6)].map((_, idx) => <SkeletonCard key={idx} />)
          : Articles.map((news, index) => (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            ))}
      </div>
    </div>
  );
};

export default NewsBoard;

