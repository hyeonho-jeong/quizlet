// StatsPage.js
import React, { useState, useEffect } from 'react';
import styles from './CreatePage.module.css';
import FolderImg from './folder.png';
import DeckImg from './paper-stack.png';
import CardImg from './flash-cards.png';

const StatsPage = ({selectedItems}) => {
  const [newItem, setNewItem] = useState({ type: '', title: '', description: '' });

  useEffect(() => {
    setNewItem({ type: '', title: '', description: '' });
  }, [selectedItems]);

  const handleOptionClick = (option) => {
    const newItem = {
      type: option,
      title: '',
      description: '',
    };
    // Call the prop function from Layout to update selectedItems
  };


  const renderLibraryImage = (option) => {
    switch (option) {
      case 'Accuracy':
        return <img src={FolderImg} alt={`Library ${option}`} style={{ width: 100 }} />;
      case 'Completion':
        return <img src={DeckImg} alt={`Library ${option}`} style={{ width: 100 }} />;
      case 'Data':
        return <img src={CardImg} alt={`Library ${option}`} style={{ width: 100 }} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.createPage}>
      <div className={`${styles.box} ${styles.createBox}`}>
        <h1>Stats</h1>
        <div className={styles.optionsContainer}>
          <div
            className={styles.option}
            //onClick={() => handleOptionClick('folder')}
          >
            <img src={FolderImg} alt="accuracy data" style={{ width: 50 }} />
            <span>Accuracy</span>
          </div>
          <div
            className={styles.option}
            //onClick={() => handleOptionClick('deck')}
          >
            <img src={DeckImg} alt="completion record" style={{ width: 50 }} />
            <span>Completion</span>
          </div>
          <div
            className={styles.option}
            //onClick={() => handleOptionClick('card')}
          >
            <img src={CardImg} alt="rest of the data" style={{ width: 50 }} />
            <span>Data</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StatsPage;
