import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Seacrh from './components/ui/Search'
import './App.css';

const App = ()=> {
  const[items,setItems]=useState([])
  const[isLoading,setIsLoading]=useState([true])
  const[query,setQuery]=useState('')
  useEffect(()=>{
    const fetchItems=async()=>{
      const results=await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      //console.log(results.data)
      setItems(results.data)
      setIsLoading(false)
    }
    fetchItems()
  },[query])
  return (
    <div className="container">
      <Header/>
      <Seacrh getQuery={(q)=>setQuery(q)}/>
      <br></br>
      <br></br>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
