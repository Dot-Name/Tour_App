import Tours from './components/Tours';
import React from "react";
import { useState } from 'react';
import data from './data';
function App() {
  const [tours, setTours] = useState(data);
  function btnHandler(id){
    const newTours = tours.filter(tour=>tour.id !== id);
    setTours(newTours);
  }
  if(tours.length === 0){
    return (
        <div className='flex flex-col items-center justify-center h-[100vh]'>
          <h2 className='text-2xl font-bold font-poppins'>No Tours Left</h2>
          <button className='mt-[18px] px-[80px] py-[10px] border-[#fff] cursor-pointer bg-[#f0f0f0] hover:bg-white hover:text-black font-poppins transition-all duration-200' onClick={()=>setTours(data)}>Refresh</button>
        </div>
    );
  }
  return (
    <div>
      <Tours tours = {tours} btnHandler = {btnHandler} className="*:m-0 *:p-0 *:box-border min-h-[100vh] font-poppins"></Tours>
    </div>
  );
}

export default App;
