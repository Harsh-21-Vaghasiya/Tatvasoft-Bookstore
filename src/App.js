import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage.jsx';
import BooksList from './components/BooksList';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import { globalStyles } from './styles/globalStyles';

function App() {
  return (

    <div>
      <BrowserRouter>
      <div>
        <img src={logo} alt='logo'></img>
      </div>
        <div

          // className='navbar'

          style={{ ...globalStyles.navbar, }}
        // style={{
        //   padding: 10,
        //   dispaly: "flex",
        //   justifyContent: "space-between",
        //   border: 'red',
        //   background: 'red',
        //   width: 120,

        // }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/BookList">Books</NavLink>
        </div>
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
