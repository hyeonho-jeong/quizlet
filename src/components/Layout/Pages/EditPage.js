import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EditPage.module.css';

const EditPage = ({ selectedItems }) => {
  const [createdCards, setCreatedCards] = useState([]);
  const [tempData, setTempData] = useState({ front: '', back: '' });

  const handleAddNewCard = () => {
    const cardNumber = createdCards.length + 1;
    const card = {
      title: `card${cardNumber}`,
      tempData: { ...tempData }
    };

    setCreatedCards([...createdCards, card]);
    setTempData({ front: '', back: '' }); 
  };


  const handleSaveTempData = () => {
    const jsonData = JSON.stringify(createdCards);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'data.json'; 
    link.click();
  };

  const handleFrontChange = (e) => {
    setTempData({ ...tempData, front: e.target.value });
  };

  const handleBackChange = (e) => {
    setTempData({ ...tempData, back: e.target.value });
  };

  return (
    <div className={styles.editPage}>
      <div className={`${styles.box} ${styles.addNewCardBox}`}>
        <h1>Add New Card</h1>
        {createdCards.map((card, index) => (
          <div key={index} className={styles.cardItem}>
            <p>{card.title}</p>
          </div>
        ))}
        <button onClick={handleAddNewCard}>Add Card</button>
      </div>

      <div className={`${styles.box} ${styles.tempBox}`}>
        <h1>Temp Box</h1>
        <div className={styles.frontBackBoxes}>
          <div className={styles.frontBox}>
            <label>Front:</label>
            <input
              type="text"
              value={tempData.front || ''}
              onChange={handleFrontChange}
            />
          </div>
          <div className={styles.backBox}>
            <label>Back:</label>
            <input
              type="text"
              value={tempData.back || ''}
              onChange={handleBackChange}
            />
          </div>
        </div>
        <button onClick={handleSaveTempData}>Save Temp Data</button>
      </div>
    </div>
  );
};

export default EditPage;
