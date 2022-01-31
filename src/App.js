import { useState } from 'react';
import './App.css';
import {Banks} from './Components/Banks';
import {Dropdown} from './Components/Dropdown';
import { Footer } from './Components/Footer';
import {Header} from './Components/Header';
import { Search } from './Components/Search';

function App() {

  const [banks, setBanks] = useState([]);
  const [city, setCity] = useState("");
  const [filteredbanks, setFilteredbanks] = useState([]);
  const [keyword, setKeyword] = useState("")
  
  return (
    <div className="App">
      <Header />
      <div className="container p-4 mt-3 d-flex justify-content-between">
        <div className=""><Dropdown setCity={setCity} /></div>
        <div className="" ><Search banks={banks} keyword={keyword} setKeyword={setKeyword}
                filteredbanks={filteredbanks} setFilteredbanks={setFilteredbanks}/></div>
      </div>
      <Banks city={city} banks={banks} setBanks={setBanks} setKeyword={setKeyword}
              filteredbanks={filteredbanks} setFilteredbanks={setFilteredbanks} />
      <Footer />
    </div>
  );
}

export default App;
