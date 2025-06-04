import { CgProfile } from "react-icons/cg";

import './App.css'

function App() {


  return (
    <>
      <header>
        <a href="">
          Snack Attack
        </a>
        <CgProfile className="profile-icon"/>
      </header>
      <main>
        <div id="store-search-container">
          store search goes here
        </div>
        <div id="main-delivery-container">
          main delivery form goes here
        </div>
        <section id="store-list-container">
          <h2>
            Store list goes here
          </h2>
        </section>
      </main>
      <footer>
        footer goes here
      </footer>
    </>
  )
}

export default App
