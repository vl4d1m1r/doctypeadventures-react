import React, { useContext } from "react";
import { StateContext } from "../context/Context";
import Layout from "../components/layouts/DefaultLayout";
import Posts from "../components/posts/Posts";

const Home = (props) => {
  const { state } = useContext(StateContext);
  const currentPage = props.match.params.page_no || 1;
  const filter = props.match.params.filter || false;
  const filterValue = props.match.params.value || false;
  let endPoint = `${state.api.endpoint}posts?_embed&per_page=${state.posts.perPage}&page=${currentPage}`;
  if (filter && filterValue) {
    endPoint = endPoint + `&${filter}=${filterValue}`;
  }
  const data = { endPoint, currentPage, filter, filterValue };

  return (
    <Layout>
      <Posts data={data} />
    </Layout>
  );
};

export default Home;
