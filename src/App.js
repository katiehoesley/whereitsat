import NavBar from "./NavBar.jsx";
import "./styles.css";
import UserPage from "./UserPage.jsx";
import GetStarted from "./GetStarted.jsx";
import NFTCollection from "./NFTCollection.jsx";
import { BottomNavigation } from '@mui/material';
import * as React from 'react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import {
  BrowserRouter as Router,
  Route,
  Routes, 
  Switch
} from "react-router-dom";
import BottomNav from './BottomNav.jsx'


function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path='/home' element={<GetStarted/>} />
        <Route path='/my-nft' element={<UserPage/>} />
        <Route path='/gallery' element={<NFTCollection/>} />
      </Routes>
      <BottomNav/>
    </div>
  );
}

export default App;
