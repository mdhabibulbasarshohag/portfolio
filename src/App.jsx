import { RouterProvider } from 'react-router-dom';
import { router } from './components/Routes/Routes';

function App() {

  return (
    <main>
      <RouterProvider router={router} ></RouterProvider>
    </main>
  )
}

export default App