import React from 'react';
import SVGInline from "react-svg-inline";

import twitterSVG from "!raw-loader!../assets/twitter.svg";
import instagramSVG from "!raw-loader!../assets/instagram.svg";
import linkedinSVG from "!raw-loader!../assets/linkedin.svg";
import githubSVG from "!raw-loader!../assets/github.svg";

export default ({ twitter, instagram, linkedin, github }) => {
  let svg = null;
  let link = null;

  if (twitter) {
    svg = twitterSVG;
    link = "https://twitter.com/amsdamsgram";
  }
  if (instagram) {
    svg = instagramSVG;
    link = "https://www.instagram.com/amsdamsgram/";
  }

  if (linkedin) {
    svg = linkedinSVG;
    link = "https://www.linkedin.com/in/soularddamien/";
  }

  if (github) {
    svg = githubSVG;
    link = "https://github.com/amsdamsgram";
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" css={{ margin: "10px" }}>
      <SVGInline svg={svg} fill="#DCE1DE" height="24px" width="24px" />
    </a>
  );
};
