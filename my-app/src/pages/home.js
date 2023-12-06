// Filename - pages/home.js
import React, { useState } from 'react';
import logo from '../bananki.jpg';


const Home = () => {
  
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  const openPopup = () => {
    const today = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('pl-PL', options).format(today);
    setCurrentDate(formattedDate);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };


	return (
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
        <div className='window'>
          <button type="submit" className="btn" onClick={openPopup}>Data</button>
          <div className={`popup ${isPopupOpen ? 'open-popup' : ''}`} id="popup">
            <img src="calendar.png" alt="calendar"></img>
            <h2>Dzisiejsza data to:</h2>
            <p>{currentDate}</p>
            <button type="submit" onClick={closePopup}>OK</button>
          </div>
        </div>
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
    </div>
	);
};


export default Home;
