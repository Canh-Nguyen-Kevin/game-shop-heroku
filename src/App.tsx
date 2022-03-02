import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

import AppLayout from "./pages/layout";

import ScrollToTop from "./components/scrollToTop";
import PacmanLoader from "react-spinners/PacmanLoader";
interface LocationState {
  from: {
    pathname: string;
  };
}

function App() {
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [location]);
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="loading">
            <PacmanLoader color={"#AA1934"} loading={loading} size={30} />
          </div>
        }
      >
        <ScrollToTop />
        {loading ? (
          <div className="loading">
            <PacmanLoader color={"#AA1934"} loading={loading} size={30} />
          </div>
        ) : (
          <AppLayout />
        )}
      </Suspense>
    </div>
  );
}

export default App;
