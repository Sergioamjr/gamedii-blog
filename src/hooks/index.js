import { useState, useEffect, useRef } from "react"
import { returnLocationProperty } from "./../utils"

const delayToFetch = 1000
const urlProd = returnLocationProperty("origin")
const urlMock = "https://blog.gamedii.com.br"
const WPAPISearch = "wp/wp-json/wp/v2/posts?search="
// eslint-disable-next-line no-undef
const isProd = process.env.NODE_ENV !== "development"
const urlToFetch = `${isProd ? urlProd : urlMock}/${WPAPISearch}`

export const useFetchWPAPI = props => {
  const fetchRef = useRef(null)
  const [query, setQuery] = useState({
    isQuerying: false,
    results: [],
    search: "",
    hasFinished: false,
  })

  useEffect(() => {
    const searchUrl = props?.location?.search
    var searchParams = new URLSearchParams(searchUrl)
    const search = searchParams.get("s")
    search && updateState({ search })
  }, [])

  useEffect(() => {
    if (query.search) {
      clearTimeout(fetchRef.current)
      fetchRef.current = setTimeout(fetchAPI, delayToFetch)
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

  const onTextChange = ({ target: { value } }) => {
    updateState({
      results: [],
      hasFinished: false,
      search: value,
    })
  }

  return [query, onTextChange]
}
