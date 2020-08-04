import React from 'react'
import TeacherForm from '../../pages/TeacherForm'

import whatsappIconImg from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/96811?s=460&u=225f6355b0941745395edc71c65afd3b156999e2&v=4" alt="Elias Junior" />
        <div>
          <strong>Elias Junior</strong>
          <span>Universo Star Trek</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        Numquam eveniet est accusantium dolorem tempore quasi ab.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIconImg} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
