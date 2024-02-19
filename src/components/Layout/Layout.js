import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header/Header";
import styles from "./Layout.module.css";
import CreatePage from "./Pages/CreatePage";
import StatsPage from "./Pages/StatsPage";
import StudyPage from "./Pages/StudyPage";

const Layout = () => {
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
                                        <div className={styles.library}>Library</div>
                                        <div className={styles.study}>Today's Study</div>
                                        <div className={styles.reminder}>Reminders</div>
                                    </div>
                                </main>
                            </React.Fragment>
                        }
                    />

                    <Route path="/create" element={<CreatePage />} />
                    <Route path="/study" element={<StudyPage />} />
                    <Route path="/stats" element={<StatsPage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default Layout;
