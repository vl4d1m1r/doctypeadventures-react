import React, { useContext } from "react";
import { StateContext } from "../context/Context";
import Layout from "../components/layouts/DefaultLayout";
import Posts from "../components/posts/Posts";

const Post = (props) => {
  const { state } = useContext(StateContext);
  const slug = props.match.params.slug;
  const endPoint = `${state.api.endpoint}posts/?_embed&slug=${slug}`;
  const data = { endPoint };

  return (
    <Layout>
      <Posts data={data} />
    </Layout>
  );
};

export default Post;
