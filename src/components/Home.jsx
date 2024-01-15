import '../App.css';
import * as React from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { booked } from '../redux/actions/actionFunc';
import {  useState,createContext} from "react";
import TotalTicket from "./TotalTicket"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { TabContext } from '@material-ui/lab';
import TabList from '@mui/lab/TabList';
import DirectionsSubwayFilledIcon from '@mui/icons-material/DirectionsSubwayFilled';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Button, Container,TextField, Divider, IconButton, Toolbar, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from "@mui/icons-material/Refresh";
import Data from "./Data"
// import TotalTicket from "./components/TotalTicket"
import Model from './Model';
import FlightIcon from '@mui/icons-material/Flight';
//..............Autocomplete........
import { Autocomplete } from '@mui/material';

//...............................

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
//.......................store.........
export const store=createContext()


//....................

function Home() {
    // .....redux...........
    const data=useSelector(state=>state)
    console.log("data",data)
    const dispatch=useDispatch()
  //......................search.......................
  const [startCity, setStartCity] = React.useState('');
  const [endCity, setEndCity] = React.useState('');
  const [dateOfJourney, setDateOfJourney] = React.useState('');
  const handleStartCityChange = (event, value) => {
    setStartCity(value);
  };

  const handleEndCityChange = (event, value) => {
    setEndCity(value);
  };

  const handleDateOfJourneyChange = (event) => {
    setDateOfJourney(event.target.value);
    console.log(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // search()
    console.log({
      startCity,
      endCity,
      dateOfJourney,
    });
    // handle form submission here
    if(value==0){
      if(event){
        let sc= startCity
        let ec=endCity
        let dt=dateOfJourney.slice(0,10).split("-").reverse().join("-")
        var t=dateOfJourney.slice(-5,-3)
        if(t>=12){
          t=t-12
        }

        console.log(t)
        console.log(dt,"dtttt")
        let data = tata
        console.log(sc)
        let filterData = data.filter((item)=>{
          return item.destination.toLowerCase().includes(ec.toLowerCase()) && item.source.toLowerCase().includes(sc.toLowerCase()) || item.date==dt && item.sourcetime.includes(t)
        })
        setSearchData([...filterData])
        return filterData
      }
      else{
        setSearchData([...tata])
        return tata
      }
    }
    else{
      if(event){
        let sc= startCity
        let ec=endCity
        let dt=dateOfJourney.slice(0,10).split("-").reverse().join("-")
        let filterData = bookedData.filter((item)=>{
          return item.destination.toLowerCase().includes(ec.toLowerCase()) && item.source.toLowerCase().includes(sc.toLowerCase()) && item.date==dt&& item.date==dt && item.sourcetime.includes(t)
        })
        setSearchData([...filterData])
        return filterData
      }
      else{
        setSearchData([...bookedData])
        return bookedData
      }
    }
  };
  //.................................................
  const inputRef = React.useRef(null);
  const [search,setSearch]=useState("")
  const [tata,setTata]=useState(Data?.rows)
  const [bookedData,setBookedData] = useState([])
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    inputRef.current.value = ""
    setValue(newValue);
  };
  const stored=(data)=>{
    setBookedData(data)
    setValue(1)
  }
  const [searchData,setSearchData] = useState([]);
  const [searchValue,setSearchValue] = useState();
  const Search=(event)=>{
    event?.preventDefault()
    if(value==0){
      if(event){
        let inputFilterData = event.target.value
        let data = tata
        let filterData = data.filter((item)=>{
          return item.endingtime.toLowerCase().includes(inputFilterData.toLowerCase()) || item.sourcetime.toLowerCase().includes(inputFilterData.toLowerCase()) || item.trainName.toLowerCase().includes(inputFilterData.toLowerCase()) || item.date.toLowerCase().includes(inputFilterData.toLowerCase()) ||item.source.toLowerCase().includes(inputFilterData.toLowerCase()) || item.destination.toLowerCase().includes(inputFilterData.toLowerCase()) || item.price.toString().includes(inputFilterData)
        })
        setSearchData([...filterData])
        return filterData
      }
      else{
        setSearchData([...tata])
        return tata
      }
    }
    else{
      if(event){
        let inputFilterData = event.target.value
        let filterData = bookedData.filter((item)=>{
          return item.phoneNumber.toLowerCase().includes(inputFilterData.toLowerCase()) || item.email.toLowerCase().includes(inputFilterData.toLowerCase()) || item.name.toLowerCase().includes(inputFilterData.toLowerCase()) || item.endingtime.toLowerCase().includes(inputFilterData.toLowerCase()) || item.sourcetime.toLowerCase().includes(inputFilterData.toLowerCase()) || item.trainName.toLowerCase().includes(inputFilterData.toLowerCase()) || item.date.toLowerCase().includes(inputFilterData.toLowerCase()) ||item.source.toLowerCase().includes(inputFilterData.toLowerCase()) || item.destination.toLowerCase().includes(inputFilterData.toLowerCase()) || item.price.toString().includes(inputFilterData)
        })
        setSearchData([...filterData])
        return filterData
      }
      else{
        setSearchData([...bookedData])
        return bookedData
      }
    }
  }
  

  React.useEffect(()=>{
    setTata([...data])
    Search()
    setStartCity(" ")
    setEndCity(" ")
    setStartCity(" ")
  },[value])
  
  return (
   
      <div style={{hieght:'100vh',width:'85vw',marginLeft:"100px"}}>
              <div style={{display:"flex"}}>
                <IconButton>
                <FlightIcon/>
                {/* import FlightIcon from '@mui/icons-material/Flight'; */}
                </IconButton>
                <h2>
                  Flight Ticket Booking
                </h2>
              </div>
      {/* <Box sx={{ width: '100%' }}> */}
      {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
             <div style={{display:'flex',height:"35px",alignItems:'center'}}>
        {/* <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Available Trains" {...a11yProps(0)} />
                <Tab label="Booked Tickets" {...a11yProps(1)} />
        </Tabs> */}
               <button className={`${value}==0`?'navBar active':null} onClick={()=>setValue(0)}>Available Flights</button>&nbsp;
               <button className={`${value}==1`?'navBar active':null} onClick={()=>setValue(1)}>Booked Tickets</button>
               <span  style={{position:'absolute',right:200}}>
               <IconButton type="button" aria-label="search" onClick={() => Search()}>
                   {<RefreshIcon />}
               </IconButton>
                 <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                   <SearchIcon />
                 </IconButton>
                 <input
                   sx={{ ml: 1, flex: 1 ,paddingTop:2}}
                   placeholder="Search For Data"
                   value={searchValue} 
                   inputRef={inputRef}
                   style={{borderBottom:'1px solid black',width:'25vw',border:'none',
                   padding: '12px 20px',
                   margin: '8px 0',
                   border:'none',
                   border: '1px solid #ccc',
                   borderRadius: '4px'
                  }}
                   onChange={(e)=>e?Search(e):null}
                 /> 
       
               </span>
               </div>
               <hr></hr>
      {/* </Box> */}
      {/* </Box> */}
               <div style={{ width: '100%' }}> 
        
                 <form onSubmit={handleSubmit}>
                 {/* <form> */}
                   <span style={{display:'flex',alignItems:'center'}}>
                     <span >
                      <input list="hi" placeholder="Start City" style={{borderBottom:'1px solid black',width:'10vw',border:'none',
                   padding: '12px 20px',
                   margin: '8px 0',
                   border:'none',
                   border: '1px solid #ccc',
                   borderRadius: '4px'
                  }} onChange={(e)=>setStartCity(e.target.value)}/>
                      <datalist id="hi">
                        <option value="vayalpadu"></option>
                        <option value="madanapalle"></option>
                        <option value="anathapur"></option>
                        <option value="hyderabad"></option>
                        <option value="chennai"></option>
                        <option value="kalikiri"></option>
                        <option value="kakinada"></option>
                        <option value="Rajam"></option>
                        <option value="renigunta"></option>
                      </datalist>
                     {/* <Autocomplete
                 className="inputFieldSearch"
                 id="start-city"
                 options={['vayalpadu',
                 'hyderabad',
                 'Rajam',
                 'anathapur',
                 'kalikiri',
                 'renigunta',
                 'madanapall',
                 'kakinada',
                 'chennai', ]}
                 freeSolo
                 onChange={handleStartCityChange}
                 renderInput={(params) => (
                   <TextField {...params} label="Start City" variant="outlined" />
                 )}
                 ></Autocomplete> */}
                     </span>
                  &nbsp;
       {/* </span> */}
      {/* <span style={{position:'absolute',right:50}}> */}
                  <span >
                    <input list="hi" placeholder="End City" style={{borderBottom:'1px solid black',width:'10vw',border:'none',
                    padding: '12px 20px',
                    margin: '8px 0',
                    border:'none',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                    }}  onChange={(e)=> setEndCity(e.target.value)}/>
                        <datalist id="hi">
                          <option value="vayalpadu"></option>
                          <option value="madanapalle"></option>
                          <option value="anathapur"></option>
                          <option value="hyderabad"></option>
                          <option value="chennai"></option>
                          <option value="kalikiri"></option>
                          <option value="kakinada"></option>
                          <option value="Rajam"></option>
                          <option value="renigunta"></option>
                        </datalist>
                  </span>&nbsp;
                  {/* <span style={{position:'absolute',right:100}}> */}
                  <span >
                    <input
                      className="inputFieldSearch"
                      id="date-of-journey"
                      label="Date Of Journey"
                      type="datetime-local"
                      value={dateOfJourney}
                      onChange={handleDateOfJourneyChange}
                      style={{borderBottom:'1px solid black',width:'10vw',border:'none',
                      padding: '12px 20px',
                      margin: '8px 0',
                      border:'none',
                      border: '1px solid #ccc',
                      borderRadius: '4px'
                    }} 
                      // InputLabelProps={{
                      //   shrink: true,
                      // }}
                    />&nbsp;
                  </span>
                  {/* </span> */}
                  {/* <span style={{position:'absolute',right:150}}> */}
                  <button  style={{height:'6vh'}}>
                    Search
                  </button>
                  </span>
                 </form>
                 </div>
      <div>
      {/* <TabPanel value={value}  index={0}> */}
        {value==0&&<TotalTicket className='scroll' value={value} availableData={searchData} bookedData={bookedData} stored={stored}/>}
      {/* </TabPanel> */}
      {/* <TabPanel value={value}   index={1}> */}
        {value==1&&<TotalTicket className='scroll' value={value} bookedData={searchData} stored={stored} />}
      {/* </TabPanel> */}
    </div>
    {/* <span className="footer"> */}
    {/* <>  <Model/></>   */}
    {/* </span> */}
    </div>
  
  
  );
}

export default Home;
