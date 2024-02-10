import {Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './components/home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:imdbId' element={<MovieDetail/>}/>
        <Route path='/*' element={<PageNotFound/>}></Route>
      </Routes>
      </div>
     
      <Footer></Footer>
    </div>
  );
}

export default App;
