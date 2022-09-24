import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout';
const Home = () => {
  const [input, setInput]=useState('');
  
  const onSearch = () =>{
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r => r.json()).then(
      result =>{console.log(result);}
    )
  };

  const onInputChange = ev =>{
    setInput(ev.target.value);
  };
  const onInputKeyDown=(ev)=>{
    if(ev.keyCode === 13){
      onSearch();
    }
  }
  
  return <MainPageLayout>
    <input type="text" onKeyDown={onInputKeyDown} onChange={onInputChange} value={input} />
    <button type='button' onClick={onSearch}>Search</button>
  </MainPageLayout>;
}

export default Home;
