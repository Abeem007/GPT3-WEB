import React, { useEffect, useState } from "react";
import "./blog.css";
import { Article } from "../../Components/";
import { blog01, blog02, blog03, blog04, blog05 } from "./Imports";

const fallbackImages = [blog01, blog02, blog03, blog04, blog05];

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

        
        if (!API_KEY) {
          console.warn("API key not found, using static articles");
          setArticles(generateStaticArticles());
          setIsLoading(false);
          return;
        }

        const url =
          `https://gnews.io/api/v4/search?` +
          `q=artificial intelligence OR machine learning OR generative AI OR OpenAI&` +
          `topic=technology&lang=en&max=5&token=${API_KEY}`;

        const response = await fetch(url, {
         
          signal: AbortSignal.timeout(10000),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

       
        if (!data.articles || data.articles.length === 0) {
          console.warn("No articles from API, using static articles");
          setArticles(generateStaticArticles());
          setIsLoading(false);
          return;
        }

        const filteredArticles = (data.articles || [])
          .filter(
            (article) =>
              article.title &&
              (article.title.toLowerCase().includes("ai") ||
                article.title.toLowerCase().includes("artificial") ||
                article.title.toLowerCase().includes("machine learning") ||
                article.title.toLowerCase().includes("gpt") ||
                article.title.toLowerCase().includes("openai")),
          )
          .map((article, index) => ({
            ...article,
            image: getValidImageUrl(article.image, index),
          }));

    
        if (filteredArticles.length < 5) {
          const staticArticles = generateStaticArticles();
          const combinedArticles = [
            ...filteredArticles,
            ...staticArticles.slice(filteredArticles.length, 5),
          ];
          setArticles(combinedArticles.slice(0, 5));
        } else {
          setArticles(filteredArticles.slice(0, 5));
        }
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError("Failed to load articles. Showing static content instead.");

       
        setArticles(generateStaticArticles());
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

 
  const getValidImageUrl = (imageUrl, index) => {
    
    if (
      !imageUrl ||
      imageUrl === "null" ||
      imageUrl === "undefined" ||
      !imageUrl.startsWith("http") ||
      imageUrl.includes("placeholder")
    ) {
      return fallbackImages[index % fallbackImages.length];
    }
    return imageUrl;
  };


  const generateStaticArticles = () => {
    const staticTitles = [
      "OpenAI Releases New GPT-4 Model with Multimodal Capabilities",
      "AI Revolution: How Machine Learning is Transforming Industries",
      "The Future of Generative AI: From Text to Video Generation",
      "Ethical AI: Balancing Innovation with Responsible Development",
      "AI in Healthcare: How Artificial Intelligence is Saving Lives",
    ];

    const staticDescriptions = [
      "Discover the latest advancements in OpenAI's flagship model",
      "Exploring the impact of AI across different sectors",
      "Understanding the next frontier in generative technologies",
      "Discussing the ethical considerations in AI development",
      "Examining real-world applications of AI in medical fields",
    ];

    return staticTitles.map((title, index) => ({
      title,
      description:
        staticDescriptions[index] || "Latest developments in AI technology",
      publishedAt: new Date().toISOString(),
      url: "#",
      image: fallbackImages[index % fallbackImages.length],
      source: { name: "AI Blog" },
    }));
  };

  if (isLoading) {
    return (
      <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
          <h1 className="gradient__text">
            A lot is happening,
            <br />
            We are blogging about it.
          </h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-loading">
            <p>Loading latest AI news...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    console.log(error); 
  }


  const displayArticles =
    articles.length >= 5
      ? articles
      : [...articles, ...generateStaticArticles().slice(articles.length, 5)];

  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening,
          <br />
          We are blogging about it.
        </h1>
        {error && <p className="gpt3__blog-error">{error}</p>}
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          {displayArticles[0] && (
            <Article
              imgUrl={displayArticles[0].image}
              date={new Date(displayArticles[0].publishedAt).toDateString()}
              title={displayArticles[0].title}
              url={displayArticles[0].url}
            />
          )}
        </div>
        <div className="gpt3__blog-container_groupB">
          {displayArticles.slice(1).map((item, index) => (
            <Article
              key={index}
              imgUrl={item.image}
              date={new Date(item.publishedAt).toDateString()}
              title={item.title}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
