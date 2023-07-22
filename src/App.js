
import './App.css';
import Order from './components/Order';

function App() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-green-100'>
      <Order/>
      <footer className="absolute bottom-3">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className='text-blue-400'>Frontend Mentor</a>.Coded by <a href="#" className='text-blue-500'>Nassirou</a>.
      </footer>
    </div>
  );
}

export default App;
