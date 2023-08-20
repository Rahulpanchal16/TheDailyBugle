import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const pageSize = 12;
  const apikey = process.env.REACT_APP_MY_NEWS_API_KEY;

  const [progress, setProgress] = useState(5);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar height={2} color="#FF3131" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                apikey={apikey}
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                category="technology"
              />
            }
          />
        </Routes>
        <Footer />
       
      </BrowserRouter>
    </div>
  );
};

export default App;
