// import './App.scss'
import Editor from './components/Editor/Editor';
import Preview from './components/Preview/Preview';

import { useState } from "react";

function App() {
  const [expandEdilecek, setExpandEdilecek] = useState('');
  return (
    <div className="App">
      {"Expand edilecek olan : " + expandEdilecek}

      {expandEdilecek !== "preview" && <Editor xFonksiyonu={setExpandEdilecek} suankiExpandEdilecek={expandEdilecek} />}
      {expandEdilecek !== 'editor' && <Preview gFonksiyonu={setExpandEdilecek} suankiExpandEdilecek={expandEdilecek} />}

    </div>
  );
}

export default App;
