/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { secondTitle, largeMgBottom, text } from "./../../design";

const liStyle = css`
  margin-left: 20px;
  list-style-type: disc;
`;

const fontWeight = css`
  font-weight: bold;
  margin-bottom: 8px;
`;

const ProfessionalExperienceItem = () => {
  return (
    <div css={largeMgBottom}>
      <p css={secondTitle}>Ferreri</p>
      <p css={fontWeight}>MOBILE & FRONT END DEVELOPER</p>
      <p css={text}>Ago/2019 - Currently</p>
      <p css={text}>
        Ferreri is my currently job, they are an agency with different clients
        and projects. I worked building a mobile app using React Native and now
        Im working in a new squad, with amazing professionals, such as
        developers, designers, squad and tech leader. My responsibilities are:
      </p>
      <ul>
        <li css={liStyle}>
          <p css={text}>Improve and maintain our platform.</p>
        </li>
        <li css={liStyle}>
          <p css={text}>
            Development of new features and correction of any bug.
          </p>
        </li>
        <li css={liStyle}>
          <p css={text}>
            Revising and submitting changes through pull requests.
          </p>
        </li>
        <li css={liStyle}>
          <p css={text}>
            Create reusable components and methods on our codebase.
          </p>
        </li>
        <li css={liStyle}>
          <p css={text}>Follow our code Style Guide</p>
        </li>
      </ul>
    </div>
  );
};

export default ProfessionalExperienceItem;
