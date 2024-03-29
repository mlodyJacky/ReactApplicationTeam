import React from 'react';
import logo from './bananki.jpg';
import './style/App.css';
import Navbar from "./components/Navbar/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home";
import Krzywa from "./pages/curve";
import Gallery from "./pages/gallery";
import Komputery from "./pages/computers";

function App() {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/galeria" element={<Gallery />} />
                <Route path="/krzywa" element={<Krzywa />} />
                <Route path="/komputery" element={<Komputery />}
                />
            </Routes>
        </Router>
    
 /*       
    <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://asset.kompas.com/crops/-jM7LFoXlqryLUx345-RtbDxAsg=/0x0:1600x800/750x500/data/photo/2020/05/31/5ed3a33d6f95d.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <header className="App-text">
      <p>
        Plecak pełen cashu wypełniony aż po brzegi
        Auto pędzi, samo zmienia biegi
        IPhone ciągle kurwa brzęczy, już mnie męczy, wierz mi
        Nie chcę słuchać waszych nędznych bredni
        Chłopak twój to jakiś gangster, widzę jego profil
        Ale płacze, gdy masz ze mną fotki
        Twój ulubiony raper kłamie wciąż na trackach
        Gdzie to Lambo, co mu kupił tata?
        Gdzie to Lambo, co mu kupił tata?
        (Yo, ey) wyćpany tu lata, (yo, ey) co za żenada
        Ja czysty tu biegam i hajs mi wciąż spada
        Ja piję z ziomkami, jak kiedyś nie było mnie stać na nowe trampki
        Zasługuję na wieczne wakacje, a nie chodzenie do tej pracy
        Ey, przestań płakać, weź się napij
        Jebać wrogów chodź zatańczmy, bo w okół fajne są tu panny
        Nie chcę już płakać, to nie są te czasy
        Nie, nikt ze mną nie trzymał takie są fakty
        Dziś portfel mam pełen jak przedtem kontrakty
        Plecak pełen cashu wypełniony aż po brzegi
        Auto pędzi, samo zmienia biegi
        IPhone ciągle kurwa brzęczy, już mnie męczy, wierz mi
        Nie chcę słuchać waszych nędznych bredni
        Chłopak twój to jakiś gangster, widzę jego profil
        Ale płacze, gdy masz ze mną fotki
        Twój ulubiony raper kłamie wciąż na trackach
        Gdzie to Lambo co mu kupił tata?
        Piszą na mnie typy rzeczy niestworzone w necie
        Siedząc w swoim Golfie, albo w starej Becie
        Nie mam na to wpływu przecież, chłopak mnie blokuję w necie
        Mercem ja się woże wszędzie, taki jest mój styl
        Dziś tej nocy w głowie tylko kwit, kiedy w górę Beam'y, aż po świt
        Z młodości zapamiętasz parę chwil, więc zróbmy tak, żeby było wszystko git
        Ja wrzucę flotę w bar jak Charlie Sheen
        Ja wrzucę flotę w bar jak Charlie Sheen
        Ja wrzucę flotę w bar jak Charlie Sheen
        Ja wrzucę flotę w bar jak Charlie Sheen
        Plecak pełen cashu wypełniony aż po brzegi
        Auto pędzi, samo zmienia biegi
        IPhone ciągle kurwa brzęczy, już mnie męczy, wierz mi
        Nie chcę słuchać waszych nędznych bredni
        Chłopak twój to jakiś gangster, widzę jego profil
        Ale płacze, gdy masz ze mną fotki
        Twój ulubiony raper kłamie wciąż na trackach
        Gdzie to Lambo co mu kupił tata?</p>
      </header>
    </div>*/
  );
}

export default App;
