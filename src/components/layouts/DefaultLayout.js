import React, { useContext } from "react";
import Tagline from "../../components/Tagline";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Tags from "../../components/Tags";
import Footer from "../../components/Footer";
import { StateContext } from "../../context/Context";

const DefaultLayout = (props) => {
  const { state } = useContext(StateContext);
  return (
    <div className='wrapper'>
      <Tagline />
      <Header />
      <div className='background'>
        <div className='container'>
          <div className='row'>
            <main className='blog col-12 col-lg-8'>{props.children}</main>
            <aside className='sidebar col-12 col-lg-4'>
              <Search />
              <div className='tags'>
                <Tags tags={state.tags} />
              </div>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
      <Tagline bottom={true} />
    </div>
  );
};

export default DefaultLayout;
