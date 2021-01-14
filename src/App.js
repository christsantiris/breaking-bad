import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchITems = async () => {
      const result = await axios(`https://breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchITems()
  }, [query])

  return (
    <div className="App">
      <Header />
      <Search getQuery={(query) => setQuery(query)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
