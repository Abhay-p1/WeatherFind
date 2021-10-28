import React,{useState,useEffect} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Quote from "../src/Images/quote5.jpg";
const App = () =>{
  const [citydetail,setCitydetail] = useState(null);
  const [search,setSearch] = useState("Mumbai");
  useEffect(()=>{
     const fetchapi = async ()=>{
       const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bda127084b13eb8772e8ba4f37afedfb`
      const resp = await fetch(url);
       const respjson = await resp.json();
       console.log(respjson);
       setCitydetail(respjson.main);
    }
    fetchapi();
    },[search]);
  return (
      <>
       <div className = "main_div" > 
       <div id="center-div" className="center_div" >
       <br/>
       <h1 className="ms-2 me-2 wth">⛈<span className="emoji">🌦</span> Weather App <span className="emoji">🌦</span>🌧</h1>  
       <img className="mt-2" id="imgid" src = {Quote} alt="none"
       /> 
       <br/>
            <div className="inputc mx-auto mt-4 d-flex">
              <input type="search" className="search" onChange={(event)=>{
                 setSearch(event.target.value);
              }} value={search} placeholder="City"/>
              <i className="fas fa-search my-auto ms-1"></i>
           </div> 
           
           {!citydetail ? (<h1 className="mt-10">No Data Found</h1>) :
           (  
             <div>
           <div className="info mt-3">
          <h2 className="location">
          <i className="fas fa-cloud-sun-rain"></i>
           <span> </span>
           {search}<span>  </span> {citydetail.temp} &deg;C🌡 
           <span> </span> <i className="fas fa-clouds-moon"></i>
          </h2>
          {/* <h1 className="temp">
          </h1> */}
    
            <h2 className="mb-3"> 🌥Min Temp : {citydetail.temp_min} &deg;C </h2>
            <h2 className="mb-3"> 🌤Max Temp : {citydetail.temp_max} &deg;C </h2>
          
          <h2 className="mb-3">  <i className="fas fa-fog"></i> Humidity : {citydetail.humidity}  </h2>
          <h2 className="mb-3"> <i className="fas fa-wind"></i> Pressure : {citydetail.pressure} </h2>
        </div>
        </div>
           )
           }
         <section>
        <div className="wave one"></div>
        <div className="wave two"></div>
        <div className="wave three"></div>
        <div className="wave four"></div>
        </section>
        </div>
       
        </div > 
       </>
  );
}
export default App;
