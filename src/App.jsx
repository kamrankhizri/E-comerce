import React, { useState, useEffect } from "react";
import AppRouting from "./routing/index";
import Loader from "./components/loader"; // Make sure you created this

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2-3 seconds (replace this with real data/API loading)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : <AppRouting />}
    </>
  );
};

export default App;
