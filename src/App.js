import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from "./components/Feed";
import Profile from "./components/Profile";
import ArticleView from "./components/ArticleView";
import Header from "./components/Header";
import SignInUp from "./components/SignInUp";
import Creator from "./components/Creator";
import UserArticles from "./components/UserArticles";

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      <Header
        showSignIn={showSignIn}
        setShowSignIn={setShowSignIn}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <SignInUp
        showSignIn={showSignIn}
        setShowSignIn={setShowSignIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      {/* <BrowserRouter> */}
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/article" element={<ArticleView />} />
        <Route path="/create" element={<Creator />} />
        <Route path="/userarticles" element={<UserArticles />} />
        <Route path="/*" element={<Feed />} />
        <Route exact path="/article/:id" element={<ArticleView />} />
        {/* <Route path="/article/:id" element={(props) => (<ArticleView {...props} />)} /> */}
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
