import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lobby from './components/Lobby';
import CodeBlock from './components/CodeBlock';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Lobby />} />
                    <Route path="/codeblock/:id" element={<CodeBlock />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
