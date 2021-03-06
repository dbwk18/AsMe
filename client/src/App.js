import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
import MainPage from './pages/main/MainPage';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import DraftPage from './pages/draft/DraftPage';
import ArchivePage from './pages/archive/ArchivePage';
import WasteBasketPage from './pages/wastebasket/WasteBasketPage';


function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Suspense fallback={(<div>Loading...</div>)}>
                    <Router>
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/draft" element={<DraftPage />} />
                            <Route path="/archive" element={<ArchivePage />} />
                            <Route path="/wastebasket" element={<WasteBasketPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/signup" element={<SignupPage />} />
                            <Route path="/*" element={<NotFound />} />
                        </Routes>
                    </Router>
                </Suspense>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
