/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { pageTitle, text } from "../design"
import Wrapper from "../components/Wrapper"
import { useFetchWPAPI } from "../hooks"
import SearchItem from "../components/SearchItem"

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
        <SearchItem
          key={index}
          link={result.link}
          excerpt={result.excerpt.rendered}
          title={result.title.rendered}
        />
      ))}
    </Wrapper>
  )
}

export default Search
