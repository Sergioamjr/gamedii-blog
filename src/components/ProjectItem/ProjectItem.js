/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { colors, fontSize } from "./../../design/theme";
import Tags from "../Tags";

const mgBottom = css`
  margin-bottom: 8px;
`;

const largeMgBottom = css`
  margin-bottom: 40px;
`;

const title = css`
  ${mgBottom};
  color: ${colors.dark};
  font-size: ${fontSize.medium};
  font-weight: bold;
`;

const text = css`
  color: ${colors.black}
  text-align: justify;
  ${mgBottom}
`;

const ProjectItem = () => {
  return (
    <div css={largeMgBottom}>
      <p css={title}>WhatToWatch?</p>
      <p css={text}>A platform to recommend what you can watch.</p>
      <div css={mgBottom}>
        {["React", "Next", "Styled Components"].map((text, index) => (
          <Tags key={index} name={text} />
        ))}
      </div>
      <a href="/#">Githubs Link</a>
    </div>
  );
};

export default ProjectItem;
