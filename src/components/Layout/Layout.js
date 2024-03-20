import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import styles from "./Layout.module.css";
import CreatePage from "./Pages/CreatePage";
import StatsPage from "./Pages/StatsPage";
import StudyPage from "./Pages/StudyPage";
import Library from "./Library";
import EditPage from "./Pages/EditPage";
import SignupPage from "./Pages/SignupPage";
import SignupSuccessPage from "./Pages/SignupSuccessPage";
import LoginPage from './Pages/LoginPage';

const Layout = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const updateSelectedItems = (newItems) => {
    setSelectedItems(newItems);
    localStorage.setItem("selectedItems", JSON.stringify(newItems));
  };

  return (
    <Router>
      <div className={styles.layout}>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <main>
                  <div className={styles.container}>
                    <div className={styles.library}>
                      <Library
                        selectedItems={selectedItems}
                        imageDirectory="/path/to/layout/images"
                      />
                    </div>
                    <div className={styles.study}>Today's Study</div>
                    <div className={styles.reminder}>Reminders</div>
                  </div>
                </main>
              </React.Fragment>
            }
          />

          <Route
            path="/create"
            element={
              <CreatePage
                selectedItems={selectedItems}
                updateSelectedItems={updateSelectedItems}
              />
            }
          />
          <Route
            path="/study"
            element={<StudyPage selectedItems={selectedItems} />}
          />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup/success" element={<SignupSuccessPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Layout;
