import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIconImg from '../../assets/images/icons/back.svg'

import './styles.css'

interface PageHeaderProps {
  title: string,
  // title?: string não é obrigatório
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIconImg} alt="Voltar"/>
        </Link>
        <img src={logoImg} alt="Logo Proffy"/>
      </div>

      <div className="header-content">
        <strong>
          {props.title}
        </strong>
        {props.children}
      </div>
    </header>
  )
}

export default PageHeader