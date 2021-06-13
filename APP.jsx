import React,{useState,useEffect}from 'react'
import Menu from './Menu'
const App = () =>{
 const APP_ID="REPLACE IT WITH UR APPID";
 const APP_KEY="REPLACE IT WITH YOUR APP KEY";
//GET UR APP_ID AND APP_KEY AT EDAMAN.COM 
 
const [recipes,setRecipe]=useState([]);
const [search,setSearch]=useState("chiken");

 useEffect(()=>{
  req();
 },[]);
 const req = async () =>{
  const Response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
 
 const data=await Response.json();
 setRecipe(data.hits);
 console.log(data.hits);
};
const updateSearch = e =>
{
     setSearch(e.target.value);
     console.log(search);
}


   return (
    <div className="App">
      <header className="App-header">
        <h3 style={{color:"red",backgroundColor: "blue"}}>tasty</h3>
        <form onSubmit={setSearch} className="search-form">
          <input type="text" value={search} onChnage={updateSearch} className="box" style={{padding:10,fontSize:20,color:"black",border: " 50 solid grey"}}/> 
          <button type="submit" className="search" style={{color:"pink",width:100,padding:10,font:17,cursor:"pointer",backgroundColor:"grey"}} >Q</button>
          
        </form>
        </header>
       {recipes.map(recipe =>(
        
         < Menu 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}/>
         
         
         
         
       )) }
     
    </div>
  );
};

export default App;
