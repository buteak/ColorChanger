import Header from './Header';
import Content from './Content';
import {useState} from 'react'




function App() {
  const [colorValue, setColorValue] = useState('');
  const [hex, setHex] = useState("");

  return (
    <div className="App">
        <Header />
        <Content 
        colorValue={colorValue} 
        setColorValue={setColorValue}
         hex={hex} 
         setHex={setHex}
         />
    </div>
  );
}

export default App;
