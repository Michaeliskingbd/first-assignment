import axios from "axios";
import { useEffect, useState } from "react";

const FacebookPost = () => {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState(0);

  const handleLikes = () => {
    if (likes < 1) {
      setLikes(likes + 1);
    }
  };
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/posts");
        setPosts(response.data.posts);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchPost();
  }, []);

  return (
    <>
      {posts.map((p, index) => (
        <div
          key={index}
          className="max-w-md mx-auto bg-white rounded shadow-md p-4 space-y-4 mb-4 "
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <div>
                <p className="font-semibold">Page_name</p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  Sponsored <span>🌐</span>
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm text-gray-700">{p.body}</p>
            <div className="text-blue-500 text-sm space-x-2 mt-1">
              <a href="#">#{p.tags[0]}</a>
              <a href="#">#{p.tags[1]}</a>
              <a href="#">#{p.tags[2]}</a>
            </div>
          </div>

          {/* Image */}
          <div className="bg-gray-300 h-48 w-full rounded" />

          {/* Website and CTA */}
          <div className="flex justify-between items-center text-xs border-t pt-2">
            <div>
              <p className="font-medium text-black">websitename.com</p>
              <p className="text-gray-500">tagline goes here</p>
            </div>
            <button className="px-3 py-1 border rounded text-sm">
              learn more
            </button>
          </div>

          {/* Reactions */}
          <div className="flex items-center justify-between text-sm text-gray-600 pt-2 border-t">
            <div className="flex items-center gap-1">
              <span>👍❤️</span>
              <span>{likes}</span>
            </div>
            <div className="flex gap-4">
              <span>57 Comments</span>
              <span>{p.views} Views </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center pt-2 border-t text-sm">
            <button onClick={handleLikes} className="flex items-center gap-2">
              👍 <span>Like</span>
            </button>
            <button className="flex items-center gap-2">
              💬 <span>Comment</span>
            </button>
            <button className="flex items-center gap-2">
              🔁 <span>Share</span>
            </button>
            <div className="w-6 h-6 bg-gray-300 rounded-full" />
          </div>
        </div>
      ))}
    </>
  );
};

export default FacebookPost;
