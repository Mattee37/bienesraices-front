import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";

import Navbar from "./Navbar";

const Header = () => {
  const { logo, icon } = useStaticQuery(graphql`
    query LogoQuery {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
      icon: file(relativePath: { eq: "home.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <header
      css={css`
        background-color: #0d283b;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 120rem;
          margin: 0 auto;
          text-align: center;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <Link to={"/"}>
          <img
            css={css`
              visibility: hidden;
              height: 0px;
              @media (min-width: 768px) {
                visibility: visible;
                height: 64px;
              }
            `}
            src={icon.publicURL}
            alt="Icon"
          ></img>
          <img src={logo.publicURL} alt="Logo" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
