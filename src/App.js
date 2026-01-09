import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout Components
import Header from './components/layout/Header';

// Page Components
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';

/**
 * MAIN APP COMPONENT
 * Purpose: Root component with routing and global layout
 * Background: Uses global #020617 background system consistently
 * Structure: Clean routing setup with header navigation
 * Features: React Router for smooth page transitions
 */
function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-primary text-slate-100">
        {/* Global Header Navigation */}
        <Header />
        
        {/* Main Content Routes */}
        <main className="bg-primary">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
