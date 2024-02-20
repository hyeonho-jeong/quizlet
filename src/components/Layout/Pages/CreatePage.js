import React, { useState } from 'react';
import styles from './CreatePage.module.css';
import FolderImg from './folder.png';
import DeckImg from './paper-stack.png';
import CardImg from './flash-cards.png';

const CreatePage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    // You can perform any additional actions based on the selected option
  };

  return (
    <div className={styles.createPage}>
      <div className={`${styles.box} ${styles.createBox}`}>
        <h1>Create</h1>
        <div className={styles.optionsContainer}>
          <div
            className={`${styles.option} ${selectedOption === 'folder' && styles.selected}`}
            onClick={() => handleOptionClick('folder')}
          >
            <img src={FolderImg} alt="Create Folder" style={{ width: 50 }} />
            <span>Folder</span>
          </div>

          <div
            className={`${styles.option} ${selectedOption === 'deck' && styles.selected}`}
            onClick={() => handleOptionClick('deck')}
          >
            <img src={DeckImg} alt="Create Deck" style={{ width: 50 }} />
            <span>Deck</span>
          </div>

          <div
            className={`${styles.option} ${selectedOption === 'card' && styles.selected}`}
            onClick={() => handleOptionClick('card')}
          >
            <img src={CardImg} alt="Create Card" style={{ width: 50 }} />
            <span>Card</span>
          </div>
        </div>
        {selectedOption && (
          <div className={styles.formContainer}>
            {/* Render form or additional content based on the selected option */}
            {/* For example, you can show a form to enter details for the selected item */}
          </div>
        )}
      </div>

      <div className={`${styles.box} ${styles.libraryBox}`}>
        <h1>Library</h1>
        {/* Render Library content or components */}
      </div>
    </div>
  );
};
export default CreatePage;
