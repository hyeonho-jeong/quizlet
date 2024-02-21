import React, { useState } from 'react';
import styles from './CreatePage.module.css';
import FolderImg from './folder.png';
import DeckImg from './paper-stack.png';
import CardImg from './flash-cards.png';

const CreatePage = () => {
  // State to track selected items
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to handle the click on an option
  const handleOptionClick = (option) => {
    // Create a new item with default details
    const newItem = {
      type: option,
      title: '',
      description: '',
    };
    // Add the new item to the selectedItems state
    setSelectedItems([...selectedItems, newItem]);
  };

  // Function to handle editing an item
  const handleEditItem = (item) => {
    // Implement edit functionality
    console.log(`Editing ${item.type}`);
  };

  // Function to handle sharing an item
  const handleShareItem = (item) => {
    // Implement share functionality
    console.log(`Sharing ${item.type}`);
  };

  // Function to handle deleting an item
  const handleDeleteItem = (item) => {
    // Implement delete functionality
    const updatedItems = selectedItems.filter((selectedItem) => selectedItem !== item);
    setSelectedItems(updatedItems);
  };

  // Function to render the content of the library
  const renderLibraryContent = () => {
    return selectedItems.map((item, index) => (
      <div key={`${item.type}-${index}`} className={styles.libraryItem}>
        <h2>{`Library ${item.type.charAt(0).toUpperCase() + item.type.slice(1)}`}</h2>
        {renderLibraryImage(item.type)}
        <div className={styles.itemOptions}>
          <span onClick={() => handleEditItem(item)}>Edit</span>
          <span onClick={() => handleShareItem(item)}>Share</span>
          <span onClick={() => handleDeleteItem(item)}>Delete</span>
        </div>
      </div>
    ));
  };

  // Function to render the image based on item type
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

  // JSX for the component
  return (
    <div className={styles.createPage}>
      <div className={`${styles.box} ${styles.createBox}`}>
        <h1>Create</h1>
        <div className={styles.optionsContainer}>
          {/* Option for creating a folder */}
          <div
            className={styles.option}
            onClick={() => handleOptionClick('folder')}
          >
            <img src={FolderImg} alt="Create Folder" style={{ width: 50 }} />
            <span>Folder</span>
          </div>

          {/* Option for creating a deck */}
          <div
            className={styles.option}
            onClick={() => handleOptionClick('deck')}
          >
            <img src={DeckImg} alt="Create Deck" style={{ width: 50 }} />
            <span>Deck</span>
          </div>

          {/* Option for creating a card */}
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
        {/* Render the content of the library */}
        {renderLibraryContent()}
      </div>
    </div>
  );
};

export default CreatePage;
