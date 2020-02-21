/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { colors, fontSize } from "./../../design/theme";

const tags = css`
  color: #fff;
  margin-right: 10px;
  padding: 0 5px;
  border-radius: 3px;
  margin-bottom: 10px;
  font-size: ${fontSize.small};
  background: ${colors.danger};
`;

const Tags = ({ name }) => {
  return <span css={tags}>{name}</span>;
};

export default Tags;
