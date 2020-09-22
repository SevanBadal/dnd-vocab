import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import data_csv from './clean_data.csv';
import WordCard from './components/word_card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const d3 = require('d3');


function App() {

  const [words, setWords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleQuery = event => {
    console.log(event.target.value)
    setSearchTerm(event.target.value);
  };

  useEffect( () => {
    const asyncLoadWords = async () => {
      const dnd_words = await d3.csv(data_csv);
      setWords(dnd_words);
    }
    asyncLoadWords();    
  },[]);

  const results = useMemo(() => {
    return words.filter(wordObject => {
      return wordObject.原词.toLowerCase().includes(searchTerm);
    });
  }, [words, searchTerm]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>DnD 5E 词表卡</h2>
        <div>
      
          <a href="https://github.com/SevanBadal/dnd-vocab">  <FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <div className="Word-container">
          <input 
            className="input"
            type="text" 
            placeholder="Tiefling" 
            value={searchTerm}
            onChange={handleQuery} 
            />
          {results.map(wordObject => (
            <WordCard key={wordObject.id} english={wordObject.原词} chinese={wordObject.译本译词} />
          ))}
          </div>
      </header>
    </div>
  );
}

export default App;
