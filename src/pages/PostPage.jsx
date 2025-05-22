import React, { Suspense } from "react";
import Loading from "../components/Loading";
// import FacebookPost from "../components/Posts";

// const FacebookPost = React.lazy(() => import("../components/Posts"));
const FacebookPost = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../components/Posts"));
      }, 5000);
    })
);

const PostPage = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <FacebookPost />
      </Suspense>
    </div>
  );
};

export default PostPage;
