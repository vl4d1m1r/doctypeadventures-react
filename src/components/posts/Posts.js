import React, { useState, useEffect } from "react";
import NotFound from "../../pages/NotFound";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import SEO from "../../components/SEO";
import PostItem from "./elements/PostItem";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [paginationData, setPaginationData] = useState({});
  const [noErrors, setNoErrors] = useState(true);
  // If currentPage key is not present in props.data object it is single post.
  const singlePost = !("currentPage" in props.data);

  useEffect(() => {
    setPosts([]);
    setNoErrors(true);
    const fetchData = async () => {
      const response = await fetch(props.data.endPoint);
      if (response.ok) {
        setPaginationData({
          currentPage: props.data.currentPage,
          filter: props.data.filter,
          filterValue: props.data.filterValue,
          totalPosts: response.headers.get("X-WP-Total"),
          totalPages: response.headers.get("X-WP-TotalPages"),
        });
        const postData = await response.json();
        if (postData.length > 0) {
          setPosts(postData);
          return;
        }
      }
      setNoErrors(false);
    };
    fetchData();
  }, [
    props.data.currentPage,
    props.data.endPoint,
    props.data.filter,
    props.data.filterValue,
  ]);

  if (posts.length === 0 && noErrors) {
    return <Loading />;
  }

  if (posts.length > 0 && noErrors) {
    return (
      <React.Fragment>
        <SEO post={singlePost && posts} />
        <div className='posts-list'>
          {posts.map((post) => {
            return (
              <PostItem post={post} singlePost={singlePost} key={post.id} />
            );
          })}
          {!singlePost && <Pagination paginationData={paginationData} />}
        </div>
      </React.Fragment>
    );
  }
  return <NotFound />;
};

export default Posts;
