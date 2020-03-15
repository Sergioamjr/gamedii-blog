/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useState, useEffect, useRef } from "react"
import {
  pageTitle,
  secondTitle,
  text,
  linkStyle,
  xLargeMgBottom,
} from "../design"
import Wrapper from "../components/Wrapper"
import { replaceWpPrefix } from "../utils"

const urlToFetch = "http://blog.gamedii.com.br/wp/wp-json/wp/v2/posts?search="

const inputStyle = css`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #cacaca;
  padding: 10px;
  font-size: 22px;
  margin-bottom: 5px;
`

const Search = () => {
  const fetchRef = useRef(null)
  const [query, setQuery] = useState({
    isQuerying: false,
    results: [],
    hasError: false,
    search: "",
    hasFinished: false,
  })

  useEffect(() => {
    if (query.search) {
      clearTimeout(fetchRef.current)
      fetchRef.current = setTimeout(fetchAPI, 2000)
    }
  }, [query.search])

  const updateState = (obj = {}) => {
    setQuery(v => ({
      ...v,
      ...obj,
    }))
  }

  const fetchAPI = async () => {
    try {
      updateState({ isQuerying: true })
      const response = await fetch(`${urlToFetch}${query.search}`)
      const results = await response.json()
      updateState({ isQuerying: false, results, hasFinished: true })
    } catch (err) {
      updateState({ isQuerying: false, hasFinished: true })
    }
  }

  const updateSearchItem = ({ target: { value } }) => {
    updateState({
      results: [],
      hasFinished: false,
      search: value,
    })
  }

  return (
    <Wrapper small>
      <h2 css={pageTitle}>Pesquisar</h2>
      <input
        css={inputStyle}
        placeholder="Pesquisa por palavra-chave"
        onChange={updateSearchItem}
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
