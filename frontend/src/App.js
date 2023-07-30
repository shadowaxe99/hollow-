```javascript
import React from 'react';
import Hologram from './components/Hologram';
import VisualAids from './components/VisualAids';
import QuestionAnsweringSystem from './components/QuestionAnsweringSystem';
import CustomizeAppearance from './components/CustomizeAppearance';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Hologram />
      <VisualAids />
      <QuestionAnsweringSystem />
      <CustomizeAppearance />
    </div>
  );
}

export default App;
```