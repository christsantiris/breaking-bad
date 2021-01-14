import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/header'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchITems = async () => {
      const result = await axios(`https://breakingbadapi.com/api/characters`)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchITems()
  }, [])

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
