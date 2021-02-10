import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { StateContext } from "./context/Context";
import { filterUncategorized } from "./libs/utilities.js";
import Home from "./pages/Home";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

function App() {
  const { state, dispatch } = useContext(StateContext);

  useEffect(() => {
    const myTheme = localStorage.getItem(state.theme.localStorageName);
    dispatch({ type: "STORE_THEME", payload: myTheme });
  }, [dispatch, state.theme.localStorageName]);

  useEffect(() => {
    // Fetch categories and tags, then store them in the global context
    Promise.all([
      fetch(`${state.api.endpoint}categories`),
      fetch(`${state.api.endpoint}tags?per_page=100`),
    ])
      .then((responses) => {
        return Promise.all(
          responses.map((response) => {
            return response.json();
          })
        );
      })
      .then((data) => {
        const [categories, tags] = data;
        dispatch({
          type: "STORE_CATEGORIES",
          payload: filterUncategorized(categories),
        });
        dispatch({ type: "STORE_TAGS", payload: tags });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch, state.api.endpoint]);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Redirect exact from='/post/' to='/' />
          <Route exact path='/' component={Home} />
          <Route exact path='/page/:page_no' component={Home} />
          <Route exact path='/page/:page_no/:filter/:value' component={Home} />
          <Route exact path='/post/:slug' component={Post} />
          <Route component={NotFound} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
