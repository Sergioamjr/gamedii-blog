/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import {
  pageTitle,
  secondTitle,
  text,
  linkStyle,
  xLargeMgBottom,
} from "../design"
import Wrapper from "../components/Wrapper"
import { replaceWpPrefix } from "../utils"
import { useFetchWPAPI } from "../hooks"

const inputStyle = css`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #cacaca;
  padding: 10px;
  font-size: 22px;
  margin-bottom: 5px;
`

const Search = props => {
  const [query, onTextChange] = useFetchWPAPI(props)

  return (
    <Wrapper small>
      <h2 css={pageTitle}>Pesquisar</h2>
      <input
        css={inputStyle}
        placeholder="Pesquisa por palavra-chave"
        onChange={onTextChange}
        type="text"
        value={query.search}
      />
      {query.isQuerying && query.search && <p css={text}>Pesquisando...</p>}
      {query.search && query.hasFinished && (
        <p css={text}>Resultados: {query.results.length}</p>
      )}

      {query.results.map((result, index) => (
        <div key={index} css={xLargeMgBottom}>
          <a href={replaceWpPrefix(result.link)}>
            <h1 css={secondTitle}>{result.title.rendered}</h1>
          </a>
          <div
            css={text}
            dangerouslySetInnerHTML={{ __html: result.excerpt.rendered }}
          />
          <a css={linkStyle} href={replaceWpPrefix(result.link)}>
            Ler mais
          </a>
        </div>
      ))}
    </Wrapper>
  )
}

export default Search
