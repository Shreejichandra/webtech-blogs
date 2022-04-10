import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from "./components/Feed";
import Profile from "./components/Profile";
import ArticleView from "./components/ArticleView";
import Header from './components/Header'
import SignInUp from './components/SignInUp'
import Creator from './components/Creator'

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header showSignIn={showSignIn} setShowSignIn={setShowSignIn} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <SignInUp showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/article" element={<ArticleView />} />
          <Route path="/create" element={<Creator />} />
          <Route path="/*" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App