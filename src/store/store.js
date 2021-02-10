const tagline = "Technology, security and stuff according to some guy.";

export const initialState = {
  api: {
    endpoint: "https://vl4di11ir.pw/doctypeadventures/wp-json/wp/v2/",
  },
  posts: {
    perPage: 5,
  },
  categories: [],
  tags: [],
  info: {
    tagline,
    technology: [
      { name: "react", url: "https://reactjs.org/" },
      { name: "sass", url: "https://sass-lang.com/" },
      { name: "html5", url: "https://www.w3.org/html/" },
      { name: "netlify", url: "https://www.netlify.com/" },
      { name: "github", url: "https://github.com/" },
    ],
    copyrightYear: "2016-2021",
    version: "4.0.1/Built with React 17",
  },
  social: {
    facebookTarget: "https://www.facebook.com/sharer/sharer.php?u=",
    twitterTarget:
      "https://twitter.com/intent/tweet?hashtags=DOCTYPEAdventures&text=",
    windowWidth: 600,
    windowHeight: 350,
  },
  SEO: {
    title: "<!DOCTYPE Adventures>",
    description: tagline,
  },
  theme: {
    localStorageName: "doctypeadventuresTheme",
    class: { dark: "theme-dark", light: "theme-light" },
    current: null,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "STORE_CATEGORIES":
      return { ...state, categories: action.payload };
    case "STORE_TAGS":
      return { ...state, tags: action.payload };
    case "STORE_THEME":
      let themeCurrent = action.payload;
      let themeAdd = state.theme.class.light;
      let themeRemove = state.theme.class.dark;
      if (themeCurrent === null || themeCurrent === state.theme.class.dark) {
        themeAdd = themeCurrent = state.theme.class.dark;
        themeRemove = state.theme.class.light;
      }
      localStorage.setItem(state.theme.localStorageName, themeAdd);
      document.body.classList.remove(themeRemove);
      document.body.classList.add(themeAdd);
      return { ...state, theme: { ...state.theme, current: action.payload } };
    default:
      return state;
  }
};
