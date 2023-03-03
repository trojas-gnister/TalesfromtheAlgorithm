import { Route, Routes } from 'react-router-dom'
import {
  Layout,
  Home,
} from './components'
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
