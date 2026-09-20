import React from 'react';
import { createRoot } from 'react-dom/client';
import Landing from './landing';
import Admin from './admin';

const root = createRoot(document.getElementById('root'));
root.render(location.pathname === '/admin' ? <Admin /> : <Landing />);
