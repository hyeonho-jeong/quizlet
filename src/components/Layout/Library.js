import React from 'react';
import FolderImg from '../Layout/Pages/folder.png';
import DeckImg from '../Layout/Pages/paper-stack.png';
import CardImg from '../Layout/Pages/flash-cards.png';

const Library = ({ selectedItems }) => {
  return (
    <div>
      <h2>Library</h2>
      {selectedItems.length > 0 ? (
        <ul class='library-list'>
          {selectedItems.map((item, index) => (
            <li key={index} class='library-elem'>
              <div>
                <img
                  src={renderLibraryImage(item.type)}
                  alt={`Library ${item.type}`}
                  style={{ width: 50 }}
                />
              </div>
              <div>
                <p>{item.type}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in the library.</p>
      )}
    </div>
  );
};

const renderLibraryImage = (option) => {
  switch (option) {
    case 'folder':
      return FolderImg;
    case 'deck':
      return DeckImg;
    case 'card':
      return CardImg;
    default:
      return null;
  }
};

export default Library;
