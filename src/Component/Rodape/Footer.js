import React from 'react';
import './Footer.scss'

const Footer = () => {
 
  return (

<footer className='footer'>

<p className='Adress' ><span>Sabe onde nos encontrar?</span> <br></br>
    R. Alm. Carlos da Silveira Carneiro, 182 - <br></br>Agronômica, Florianópolis - SC, 88025-350, Brasil</p>
<p className='Apointment' ><span>Nosso horário de atendimento:</span> <br></br>
    Segunda á sexta: <br></br> das 8:00 às 18:00</p>
<p className='Phone' ><span>Quer marcar um horário por telefone?</span> <br></br>
    048 12345678</p>

<div className='social'>
   <a  href="https://www.linkedin.com/" target="_blank" rel='noopener noreferrer' className="fa fa-linkedin lkdin"> </a>
   <a  href="https://www.linkedin.com/" target="_blank" rel='noopener noreferrer'  className="fa fa-facebook fb"> </a>
   <a  href="https://www.linkedin.com/" target="_blank" rel='noopener noreferrer' className="fa fa-instagram ig"> </a></div>

<div className='copy'>
<p>Copyright ©2020 All rights reserved by Gabriela Martini</p></div>
</footer>


  );
};

export default Footer;