import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {default as Session6} from './Session-6/App';
import {default as Session7} from './Session-7/App';
import {default as Session8} from './Session-8/App';
import {default as Session9} from './Session-9/App';
import {default as Session10} from './Session-10/App';
import App from './App'

const sessions = [
    [6, Session6], 
    [7, Session7], 
    [8, Session8], 
    [9, Session9], 
    [10, Session10]
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App sessions={sessions} />} />
            {
                sessions.map(s => <Route path={`/session-${s[0]}`} element={React.createElement(s[1])} />)
            }
        </Routes>
    </Router>
);
