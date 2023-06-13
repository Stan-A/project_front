import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import NewUser from './components/User/Signup';
import NotFound from './components/NotFound/NotFound';
import Homeco from './components/Home/Homeconnected';





function App() {







  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inscription' element={<NewUser />} />

        <Route path='/homeconnected' element={<Homeco />} />





        <Route path='/*' element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
