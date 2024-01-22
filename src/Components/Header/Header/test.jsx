import React, { useState, useEffect } from 'react';
import "./test.css"

const WordAnimation = () => {
  const initialWords = ['Word', 'by', 'word', 'animation'];
  const [words, setWords] = useState(initialWords);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const storedIndex = parseInt(localStorage.getItem('currentIndex'), 10);
    if (!isNaN(storedIndex)) {
      setCurrentIndex(storedIndex);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentIndex', currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex < initialWords.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, initialWords]);

  return (
    <div className="word-animation">
      <div className="line">
        {words.slice(0, currentIndex).map((word, index) => (
          <span key={index} className="word">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordAnimation;
