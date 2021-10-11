import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect } from "react";


const alanKey = process.env.REACT_APP_API_KEY;

function App() {

  useEffect(() => {
    alanBtn({
      key: alanKey,
    });
  }, []);

  return <div className="App"></div>;
}

export default App;
