import React, { useContext, useEffect } from "react";
import { StateContext } from "../../../context/Context";
import { NavLink } from "react-router-dom";
import { Parser } from "html-to-react";
import Tags from "../../../components/Tags";
import Social from "../../../components/Social";
import { categoriesToArray } from "../../../libs/utilities.js";

const PostItem = (props) => {
  const { state } = useContext(StateContext);
  const categories = categoriesToArray(state.categories);
  const tags = state.tags.filter((tag) => {
    return props.post.tags.includes(tag.id);
  });
  const htmlParser = new Parser();
  const imageUrl = props.post._embedded["wp:featuredmedia"][0];
  const slugPath = `/post/${props.post.slug}`;
  let postContent = htmlParser.parse(props.post.excerpt.rendered);
  if (props.singlePost) {
    postContent = htmlParser.parse(props.post.content.rendered);
  }

  useEffect(() => {
    console.log("RABR BEJBI BAGI BAMPRS");
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "958449331300080",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v3.0",
      });
      window.FB.XFBML.parse();
      console.log("This happened...");
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });

  return (
    <article className='post'>
      <div className='post--category'>
        {categories[props.post.categories[0]]}
      </div>
      <div className='post--date'>{props.post.date.substring(0, 10)}</div>
      <div className='post--headline'>
        <h1>{htmlParser.parse(props.post.title.rendered)}</h1>
      </div>
      <div className='post--image'>
        <img src={imageUrl.source_url} alt={imageUrl.title.rendered} />
      </div>
      <div className='post--image-copyright'>{imageUrl.title.rendered}</div>
      <div className='post--content'>{postContent}</div>
      <div className='post--footer'>
        {!props.singlePost && (
          <NavLink className='post--read-more' to={slugPath}>
            Read more
          </NavLink>
        )}
        <Tags tags={tags} />
      </div>
      {props.singlePost && <Social post={props.post} />}
      {props.singlePost && (
        <div>
          <div>-------------</div>
          <div
            className='fb-comments'
            data-href={window.location.href}
            data-width=''
            data-numposts='15'
          ></div>
        </div>
      )}
    </article>
  );
};

export default PostItem;
