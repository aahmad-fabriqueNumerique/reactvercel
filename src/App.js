import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {

  const [voiture, setVoiture] = useState([]);
  useEffect(() => {
    const url = process.env.VERCELAPIURL
     fetch=(`${url}/list`)
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setVoiture(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);




  return (
    
    <div className="posts-container">
      <h1>testeststestestestes</h1>
    {voiture.map((voiture) => {
       return (
          <div className="post-card" key={voiture.make}>
             <h2 className="post-title">{voiture.model}</h2>
             <p className="post-body">{voiture.price}</p>
      
          </div>
       );
    })}
 </div>
  );
}

export default App;
