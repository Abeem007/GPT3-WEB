import React, { useEffect, useState } from "react";
import "./blog.css";
import { Article } from "../../Components/";
import { blog01, blog02, blog03, blog04, blog05 } from "./Imports";

const fallbackImages = [blog01, blog02, blog03, blog04, blog05];

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      setError(null);
      setUsingFallback(false);

      try {
       
        const apiUrl = "/api/gnews";

       
        const url = `${apiUrl}?t=${Date.now()}`;

        const response = await fetch(url, {
          signal: AbortSignal.timeout(15000), 
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `HTTP ${response.status}: ${errorText || "Server error"}`,
          );
        }

        const data = await response.json();

       
        if (data.error) {
          throw new Error(data.message || data.error);
        }

       
        if (!data.articles || data.articles.length === 0) {
          console.warn("No articles returned from API");
          setUsingFallback(true);
          setArticles(generateStaticArticles());
          setIsLoading(false);
          return;
        }

        
        const processedArticles = data.articles
          .filter(
            (article) =>
              article.title &&
              (article.title.toLowerCase().includes("ai") ||
                article.title.toLowerCase().includes("artificial") ||
                article.title.toLowerCase().includes("machine learning") ||
                article.title.toLowerCase().includes("gpt") ||
                article.title.toLowerCase().includes("openai") ||
                article.title.toLowerCase().includes("chatgpt") ||
                article.title.toLowerCase().includes("generative")),
          )
          .slice(0, 5) 
          .map((article, index) => ({
            ...article,
           
            title: article.title || "AI News Update",
            description:
              article.description ||
              "Latest developments in artificial intelligence",
            publishedAt: article.publishedAt || new Date().toISOString(),
            url: article.url || "#",
            source: article.source || { name: "AI News" },
            image: getValidImageUrl(article.image, article.title, index),
          }));

       
        if (processedArticles.length < 5) {
          console.log(
            `Only ${processedArticles.length} articles found, supplementing with static content`,
          );
          setUsingFallback(true);
          const staticArticles = generateStaticArticles();
          const combinedArticles = [
            ...processedArticles,
            ...staticArticles.slice(processedArticles.length, 5),
          ];
          setArticles(combinedArticles.slice(0, 5));
        } else {
          setArticles(processedArticles.slice(0, 5));
        }
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError(
          "Failed to load live articles. Showing example content instead.",
        );
        setUsingFallback(true);

     
        setArticles(generateStaticArticles());
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

 
  const getValidImageUrl = (imageUrl, title, index) => {
   
    const invalidPatterns = [
      "null",
      "undefined",
      "placeholder",
      "default",
      "no-image",
      "missing",
      "broken",
    ];

    const isInvalid =
      !imageUrl ||
      invalidPatterns.some((pattern) =>
        imageUrl.toLowerCase().includes(pattern),
      ) ||
      !imageUrl.startsWith("http") ||
      imageUrl.length < 10; 

    if (isInvalid) {
  
      const fallbackIndex = index % fallbackImages.length;
      return fallbackImages[fallbackIndex];
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

    const staticSources = [
      "TechCrunch",
      "AI Journal",
      "MIT Technology Review",
      "Wired",
      "Forbes AI",
    ];

    return staticTitles.map((title, index) => ({
      title,
      description:
        staticDescriptions[index] || "Latest developments in AI technology",
      publishedAt: new Date(Date.now() - index * 86400000).toISOString(), 
      url: "#",
      image: fallbackImages[index % fallbackImages.length],
      source: { name: staticSources[index] || "AI Insights" },
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
            <div className="loading-spinner"></div>
            <p>Loading latest AI news...</p>
          </div>
        </div>
      </div>
    );
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

        
        <div className="gpt3__blog-status">
          {error && <p className="gpt3__blog-error">⚠️ {error}</p>}
          {usingFallback && !error && (
            <p className="gpt3__blog-notice">📝 Showing example AI articles</p>
          )}
          {!usingFallback && !error && articles.length > 0 && (
            <p className="gpt3__blog-success">✅ Latest AI news loaded</p>
          )}
        </div>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          {displayArticles[0] && (
            <Article
              imgUrl={displayArticles[0].image}
              date={new Date(displayArticles[0].publishedAt).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                },
              )}
              title={displayArticles[0].title}
              url={displayArticles[0].url}
              source={displayArticles[0].source?.name}
            />
          )}
        </div>

        <div className="gpt3__blog-container_groupB">
          {displayArticles.slice(1).map((item, index) => (
            <Article
              key={`${index}-${item.title.substring(0, 20)}`}
              imgUrl={item.image}
              date={new Date(item.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              title={item.title}
              url={item.url}
              source={item.source?.name}
            />
          ))}
        </div>
      </div>


      <div className="gpt3__blog-attribution">
        <p>
          {usingFallback
            ? "Example content showcasing AI topics"
            : "Powered by GNews API • AI and Technology News"}
        </p>
      </div>
    </div>
  );
};

export default Blog;
