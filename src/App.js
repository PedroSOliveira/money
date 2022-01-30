
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

import 'antd/dist/antd.less';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
