// CreatePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CreatePage.module.css';
import FolderImg from './folder.png';
import DeckImg from './paper-stack.png';
import CardImg from './flash-cards.png';
import EditPage from './EditPage';

const CreatePage = ({ selectedItems, updateSelectedItems }) => {
  const [newItem, setNewItem] = useState({ type: '', title: '', description: '' });
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    setNewItem({ type: '', title: '', description: '' });
  }, [selectedItems]);

  const handleOptionClick = (option) => {
    const newItem = {
      type: option,
    };
    updateSelectedItems([...selectedItems, newItem]);
  };

  const handleEditItem = (item) => {
    if (item.type === 'deck') {
      // Use the navigate function to navigate to the EditPage with the item information
      navigate('/edit', { state: { item } });
    } else {
      console.log(`Editing ${item.type}`);
    }
  };

  const handleShareItem = (item) => {
    console.log(`Sharing ${item.type}`);
  };

  const handleDeleteItem = (item) => {
    const updatedItems = selectedItems.filter((selectedItem) => selectedItem !== item);
    updateSelectedItems(updatedItems);
  };

  const renderLibraryContent = () => {
    return selectedItems.map((item, index) => (
      <div key={`${item.type}-${index}`} className={styles.libraryItem}>
        <h2>{`${item.type.charAt(0).toUpperCase() + item.type.slice(1)}`}</h2>
        {renderLibraryImage(item.type)}
        <div className={styles.itemOptions}>
          <span onClick={() => handleEditItem(item)}>Edit  </span>
          <span onClick={() => handleShareItem(item)}>Share  </span>
          <span onClick={() => handleDeleteItem(item)}>Delete</span>
        </div>
      </div>
    ));
  };

  const renderLibraryImage = (option) => {
    switch (option) {
      case 'folder':
        return <img src={FolderImg} alt={`Library ${option}`} style={{ width: 100 }} />;
      case 'deck':
        return <img src={DeckImg} alt={`Library ${option}`} style={{ width: 100 }} />;
      case 'card':
        return <img src={CardImg} alt={`Library ${option}`} style={{ width: 100 }} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.createPage}>
      <div className={`${styles.box} ${styles.createBox}`}>
        <h1>Create</h1>
        <div className={styles.optionsContainer}>
          <div
            className={styles.option}
            onClick={() => handleOptionClick('folder')}
          >
            <img src={FolderImg} alt="Create Folder" style={{ width: 50 }} />
            <span>Folder</span>
          </div>
          <div
            className={styles.option}
            onClick={() => handleOptionClick('deck')}
          >
            <img src={DeckImg} alt="Create Deck" style={{ width: 50 }} />
            <span>Deck</span>
          </div>
          <div
            className={styles.option}
            onClick={() => handleOptionClick('card')}
          >
            <img src={CardImg} alt="Create Card" style={{ width: 50 }} />
            <span>Card</span>
          </div>
        </div>
      </div>

      <div className={`${styles.box} ${styles.libraryBox}`}>
        <h1>Library</h1>
        {renderLibraryContent()}
      </div>
    </div>
  );
};

export default CreatePage;
