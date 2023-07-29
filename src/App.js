// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage.jsx';
import BooksList from './components/BooksList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

function App() {
  return (

    <div>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage username={'harsg'} />}></Route>
          <Route path='/BookList' element={<BooksList />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
