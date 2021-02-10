import React, { useContext } from "react";
import { StateContext } from "../../context/Context";
import Logo from "./elements/Logo";
import Toggler from "./elements/Toggler";
import Buttons from "./elements/Buttons";
import MenuItem from "./elements/MenuItem";

const Navigation = () => {
  const { state } = useContext(StateContext);

  return (
    <nav className='navbar navbar-expand-lg navigation-main'>
      <div className='navbar-brand'>
        <Logo />
      </div>
      <Toggler />
      <div className='collapse navbar-collapse' id='navbarNavigation'>
        <ul className='navbar-nav me-auto'>
          {state.categories.map((category) => {
            return <MenuItem category={category} key={category.id} />;
          })}
        </ul>
        <Buttons />
      </div>
    </nav>
  );
};

export default Navigation;
