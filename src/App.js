import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from "./components/Feed";
import Profile from "./components/Profile";
import ArticleView from "./components/ArticleView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/article" element={<ArticleView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
