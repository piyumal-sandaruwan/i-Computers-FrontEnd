import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage.jsx';
import LoginPage from './pages/loginPage.jsx';
import RegisterPage from './pages/registerPage.jsx';
import AdminPage from './pages/adminPage.jsx';
import { TestPage } from './pages/testPage.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Toaster position='top-right' />
      <div className="w-full h-screen bg-primary">
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          
          <Route path='/admin/*' element={<AdminPage />} />
          
          <Route path="/test" element={<TestPage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;