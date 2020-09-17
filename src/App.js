import React from 'react';
import './App.css';
import Header from './components/header-component/header';
import Layout from './components/main-componet/layout';



function App() {
  return (
    <div className="App">
       <div className="container">
           <Header /> 
           <div  className="main">
             <Layout />
             
             
           </div>
          
          
       </div>
         
     
    </div>
  );
}

export default App;
