import logo from './logo.svg'; 
import './App.css'; 
import Frases from './components/Frases'; 
import Produto from './components/Produto';  
function App() 
{    
  return (     
    <div className="App">            
      <Frases />       
      <Produto        
        nome="Caneca"         
        foto="https://cdn.pixabay.com/photo/2012/04/28/18/16/beer-mug43844_960_720.png"         
        desc="Uma caneca bem interessante"      
        />     
        </div>   
        ); 
      } 
      export default App;   