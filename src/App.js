import AOS from 'aos';
import 'aos/dist/aos.css';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import router from './Router/Routes/Routes';

function App() {

  AOS.init();

  return (
    <div data-theme="light" className='max-w-7xl mx-auto'>
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
