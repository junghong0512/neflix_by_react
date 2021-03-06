import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 50px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderC = () => {
  const [pathname, setPathname] = useState("/");

  return (
    <Header>
      <List>
        <Item current={pathname === "/"} onClick={() => setPathname("/")}>
          <SLink to="/">Movies</SLink>
        </Item>
        <Item current={pathname === "/tv"} onClick={() => setPathname("/tv")}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item
          current={pathname === "/search"}
          onClick={() => setPathname("/search")}
        >
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
    </Header>
  );
};

export default HeaderC;
