import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import States from './States'
import { useState } from 'react';

const initialCounters=[
  {
    id:1,
    value:0
  },
  {
      id:2,
      value:0
  }
]
function App() {
  const [counters,setCounters]=useState(initialCounters);
  const totalCount=counters.reduce((sum,current)=>sum+current.value,0);
  const handleIncrement=(counterId)=>{
     const updatedCounter= counters.map(counter=>{
        if(counter.id===counterId){
          return{...counter,value:counter.value+1}
        }
        return counter;
      });
    setCounters(updatedCounter);
  }
  const handleDeccrement=(counterId)=>{
    const updatedCounter=counters.map(counter=>{
      if(counter.id===counterId){
        return{...counter,value:counter.value-1}
      }
      return counter;
    });
    setCounters(updatedCounter);
  }
  return (
    <div className="w-full h-screen p-10 bg-gray-500 text-slate-700 flex items-center flex-col">
          <div className=' max-w-md max-auto text-center text-white text-3xl font-bold'>
            Simple Counter Application
          </div>
          <div className='max-w-md max-auto mt-10 space-y-5'>
            {
              counters.map((counter)=>(
                <Counter count={counter.value} key={counter.id} onIncrement={()=>handleIncrement(counter.id)} onDecrement={()=>handleDeccrement(counter.id)}/>
              ))
            }       
              <States totalCount={totalCount}/>
          </div>
    </div>
  );
}

export default App;
