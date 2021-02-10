import React, { useState, useEffect, useContext } from "react";
import { StateContext } from "../../../context/Context";
import logoGithub from "../../../assets/images/logos/logo-github.svg";
import sunIcon from "../../../assets/images/icons/sun.svg";
import moonIcon from "../../../assets/images/icons/moon.svg";

const Buttons = (props) => {
  const { state, dispatch } = useContext(StateContext);
  const [theme, setTheme] = useState("");
  const buttons = [
    {
      name: "Github repo",
      src: logoGithub,
      action: () => window.open("https://github.com/vl4d1m1r"),
    },
    {
      name: "Theme toggler",
      src: setThemeIcon(theme),
      action: () => toggleTheme(),
    },
  ];

  useEffect(() => {
    setTheme(state.theme.current);
  }, [setTheme, state.theme]);

  function setThemeIcon(theme) {
    if (theme === state.theme.class.dark) {
      return sunIcon;
    }
    return moonIcon;
  }

  function toggleTheme() {
    let newTheme = state.theme.class.dark;
    if (state.theme.current === state.theme.class.dark) {
      newTheme = state.theme.class.light;
    }
    dispatch({ type: "STORE_THEME", payload: newTheme });
  }

  return (
    <nav className='nav-buttons'>
      {buttons.map((button) => {
        return (
          <span
            key={button.name}
            className='nav-button'
            onClick={button.action}
            data-bs-toggle='collapse'
            data-bs-target='.navbar-collapse.show'
          >
            <img src={button.src} alt={button.name} />
          </span>
        );
      })}
    </nav>
  );
};

export default Buttons;
