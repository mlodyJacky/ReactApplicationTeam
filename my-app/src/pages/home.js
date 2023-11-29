// Filename - pages/home.js
import React from 'react';
import logo from '../bananki.jpg';

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

const Home = () => {
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
        <button data-modal-target="#modal">Open Modal</button>
          <div class="modal" id="modal">
            <div class="modal-header">
              <div class="title">Example Modal</div>
              <button data-close-button class="close-button">&times;</button>
            </div>
            <div class="modal-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod alias ut illo doloremque eum ipsum obcaecati distinctio debitis reiciendis quae quia soluta totam doloribus quos nesciunt necessitatibus, consectetur quisquam accusamus ex, dolorum, dicta vel? Nostrum voluptatem totam, molestiae rem at ad autem dolor ex aperiam. Amet assumenda eos architecto, dolor placeat deserunt voluptatibus tenetur sint officiis perferendis atque! Voluptatem maxime eius eum dolorem dolor exercitationem quis iusto totam! Repudiandae nobis nesciunt sequi iure! Eligendi, eius libero. Ex, repellat sapiente!
            </div>
          </div>
          <div id="overlay"></div>
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
