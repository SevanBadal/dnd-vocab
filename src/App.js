import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import data_csv from './clean_data.csv';
import SearchInput from './components/search_input';
import WordCard from './components/word_card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import useModal from './components/useModal';
import Modal from './components/Modal';

const d3 = require('d3');

function App() {
  const {isShowing, toggle} = useModal();
  const [currentWord, setCurretWord] = useState({})
  const [words, setWords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleQuery = event => {
    console.log(event.target.value)
    setSearchTerm(event.target.value.toLowerCase());
  };

  const clickWord = (e) => {
    const index = e.target.getAttribute("index");
    setCurretWord(words[index])
    toggle();
  }

  useEffect( () => {
    const asyncLoadWords = async () => {
      const dnd_words = await d3.csv(data_csv);
      setWords(dnd_words);
    }
    asyncLoadWords();    
  },[]);

  const handleChinese = () => {
    return words.filter(wordObject => {
      return wordObject.译本译词.toLowerCase().includes(searchTerm);
    });
  }

  const handleEnglish = () => {
    return words.filter(wordObject => {
      return wordObject.原词.toLowerCase().includes(searchTerm);
    });
  }

  const results = useMemo(() => {
    if(searchTerm.match(/[\u3400-\u9FBF]/)) return handleChinese();
    return handleEnglish();
  }, [words, searchTerm]);

  const displayWordCards = () => {
    return results.map((wordObject, index) => (
      <WordCard
      index={wordObject.id} 
      key={wordObject.id} 
      english={wordObject.原词} 
      chinese={wordObject.译本译词} 
      onClick={clickWord}
      />
    ))
  }

  return (
    <div className="App">
      <div className="App-header">
        <h2>DnD 5E 词表卡</h2>
          <a href="https://github.com/SevanBadal/dnd-vocab">  <FontAwesomeIcon icon={faGithub} /></a>
        <div className="Word-container">
          <Modal
            currentWord={currentWord}
            isShowing={isShowing}
            hide={toggle}
          />
          <SearchInput class={"input"} value={searchTerm} handleQuery={handleQuery}/>
          {displayWordCards()}
          </div>
      </div>
    </div>
  );
}

export default App;
