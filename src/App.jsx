
import AddWorker from './Components/Workers/AddWorker';
import WorkerList from './Components/Workers/WorkerList';
import { useState } from 'react';
function App() {
  const [workers, setWorkers] = useState([])
  return (
    <div className="App">
      <h1 className='text-center mt-6 text-3xl text-red-400 font-bold'>MAAŞ OTOMASYONU</h1>
    <AddWorker setWorkers= {setWorkers}/>
    <WorkerList workers = {workers} setWorkers= {setWorkers}/>
    </div>
  );
}

export default App;
