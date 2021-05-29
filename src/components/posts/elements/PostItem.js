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
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

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
      {props.singlePost && (
        <React.Fragment>
          <Social post={props.post} />
          <div className='post--facebook-comments mb-5 mt-5'>
            <div
              className='fb-comments'
              data-href={window.location.href}
              data-width='100%'
              data-order-by='reverse_time'
              data-colorscheme='dark'
              data-numposts='15'
            ></div>
          </div>
        </React.Fragment>
      )}
    </article>
  );
};

export default PostItem;
