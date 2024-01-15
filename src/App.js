import React, { useEffect } from 'react'
import Home from './components/Home'
import { useDispatch,useSelector } from 'react-redux'
import { booked } from './redux/actions/actionFunc'
const App = () => {
  const data=useSelector(state=>state)
  console.log("data",data)
  const dispatch=useDispatch()
  useEffect(()=>{
    // dispatch(booked({"nag":"nag"}))
  },[])
  return (
    <div>
      <Home/>
      {/* <button onClick={()=>dispatch(booked())}>Cliked</button> */}
    </div>
  )
}

export default App