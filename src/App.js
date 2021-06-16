import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Router, navigate} from '@reach/router';
import axios from 'axios';
import './App.css';
import Form from "./components/Form";
import Display from "./views/Display";



function App() {

  const [selectedOption, setSelectedOption] = useState({
    category: 'people',
    id:''
  });



  const onChangeHandler = (e) => {
    setSelectedOption({
      ...selectedOption, 
      [e.target.name]: e.target.value
      
    })
    
  }

  const onSubmitHandler = (e) => {
    const {category, id} = selectedOption; 
    e.preventDefault();
    navigate(`/${category}/${id}`);
  }

  const Search =()=> {
    const {category, id} = selectedOption;
    axios.get(`https://swapi.dev/api/${category}/${id}`)
      
  }
  return (
    <div className="App">
      <h1 className= "display-1 mb-5">Star Wars API</h1> 
      <Form selectedOption={selectedOption} onChangeHandler={onChangeHandler} onSubmitHandler= {onSubmitHandler}></Form>
      <Router>
        <Display selectedOption={selectedOption} setSelectedOption={setSelectedOption} path = "/:category/:id"></Display>
      </Router>
    

    </div>
  );
}

export default App;
