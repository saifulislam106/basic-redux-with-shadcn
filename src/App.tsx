

// import { Button } from './components/ui/button';
import { Outlet } from 'react-router-dom';
import Navbar from './components/ui/layout/Navbar';


// import { decrement, increment } from './redux/feature/counter/counterSlice';
// import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {
  // const dispatch = useAppDispatch();
  // const {count}= useAppSelector((state) => state.counter);

  // const handleIncrement = (amount:number) => {
  //   dispatch(increment(amount));
  // };
  // const handleDecrement = (amount:number) => {
  //   dispatch(decrement(amount));
  // };

  return (
    <>
      {/* <h1 className='font-bold text-4xl'>Redux counter</h1>
      <div className="flex gap-10 items-center justify-center mt-12">
        <Button onClick={()=>handleDecrement(1)}>decrement</Button>
        <p>{count}</p>
        <Button onClick={()=>handleIncrement(2)}>increment</Button>
      </div> */}
      <div className='container mx-auto'>
        <Navbar/>
        <Outlet/>
      </div>
    </>
  );
}

export default App
