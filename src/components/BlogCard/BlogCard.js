/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { colors, fontSize } from "./../../design/theme";
import { linkStyle } from "../../design";

const mgBottom = css`
  margin-bottom: 8px;
`;

const largeMgBottom = css`
  margin-bottom: 40px;
`;

const title = css`
  ${mgBottom};
  color: #424242;
  font-size: ${fontSize.medium};
  font-weight: bold;
`;

const text = css`
  line-height: 1.8;
  font-size: 16px;
  color: ${colors.black};
  ${mgBottom}
`;

const BlogCard = () => {
  return (
    <div css={largeMgBottom}>
      <img
        alt="thumbnail"
        src="https://www.saude.novartis.com.br/enxaqueca/wp-content/uploads/2018/10/4-3-enxaqueca-e-vida-social.jpg"
      />
      <p css={title}>Vida Social com DII</p>
      <p className="font-2" css={text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
        nec ipsum ac tristique. Nunc erat orci, scelerisque eget nisi quis,
        efficitur consequat magna...
      </p>
      <a href="#conteudo" css={linkStyle}>
        Continuar lendo
      </a>
    </div>
  );
};

export default BlogCard;
