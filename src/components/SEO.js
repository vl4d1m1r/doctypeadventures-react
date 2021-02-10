import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { StateContext } from "../context/Context";
import { stripHtml } from "../libs/utilities.js";

const SEO = (props) => {
  const { state } = useContext(StateContext);
  // Posts list
  let seoImage = "index.jpg";
  let seoTitle = state.SEO.title;
  let seoDescription = state.SEO.description;

  // Single post
  if (props.post) {
    seoImage = props.post[0]._embedded["wp:featuredmedia"][0].source_url;
    seoTitle = `${state.SEO.title} ${stripHtml(props.post[0].title.rendered)}`;
    seoDescription = stripHtml(props.post[0].excerpt.rendered);
  }

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name='author' content='Vladimir Jankovic' />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={seoImage} />
      <meta name='description' content={seoDescription} />
      <meta property='og:url' content={window.location.href} />
      <meta property='og:title' content={seoTitle} />
      <meta property='og:description' content={seoDescription} />
    </Helmet>
  );
};

export default SEO;
