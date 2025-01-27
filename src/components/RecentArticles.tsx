import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
  url: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  pubDate: string;
}

const RecentArticles = () => {
  const [posts, setPosts] = useState<null | Post[]>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    fetch("https://douiri.org/api/latestposts.json", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(() => setError("Error while fetching the posts"))
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  if(error) return <p className="py-1 px-2 bg-red-200 text-red-700 rounded-xl text-center">{error}</p>

  return (
    <>
      <div className="grid gap-3 grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3">
        {isLoading &&
          [1, 2, 3].map((item) => (
            <div key={item}>
              <span className="skeleton w-full aspect-video rounded-3xl"></span>
              <div className="p-3">
                <span className="h-4 mb-2 skeleton"></span>
                <span className="h-4 w-2/3 skeleton mb-3"></span>
                <span className="h-2 w-12 skeleton"></span>
              </div>
            </div>
          ))}

        {posts &&
          posts.map((post) => (
            <article key={post.id} className="relative grid">
              <div className="p-3 order-2">
                <h3 className="font-bold text-xl leading-6 mb-1">
                  <a
                    className="after:absolute after:inset-0"
                    target="_blank"
                    href={post.url}
                  >
                    {post.title}
                  </a>
                </h3>
                <time
                  className="text-gray-400 text-sm"
                  dateTime={post.pubDate.split("T")[0]}
                >
                  {post.pubDate.split("T")[0]}
                </time>
              </div>
              <img
                className="rounded-3xl order-1"
                src={post.image.src}
                alt={post.image.alt}
                loading="lazy"
                decoding="async"
              />
            </article>
          ))}
      </div>
    </>
  );
};

export default RecentArticles;
