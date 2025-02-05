import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import {default as Session6} from './Session-6/App';
import {default as Session7} from './Session-7/App';
import {default as Session8} from './Session-8/App';
import {default as Session9} from './Session-9/App';
import {default as Session10} from './Session-10/App';
import {default as Session12} from './Session-12/App';
import {default as Session15} from './Session-15/App';
import {default as Session16} from './Session-16/App';
import {default as Session17} from './Session-17/App';
import App from './App'

const sessions = [
    [6, Session6], 
    [7, Session7], 
    [8, Session8], 
    [9, Session9], 
    [10, Session10],
    [12, Session12],
    [15, Session15],
    [16, Session16],
    [17, Session17]
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter basename="">
        <Routes>
            <Route path="/" element={<App sessions={sessions} />} />
            {
                sessions.map(s => <Route key={s[0]} path={`/session-${s[0]}/*`} element={React.createElement(s[1])} />)
            }
        </Routes>
    </HashRouter>
);
