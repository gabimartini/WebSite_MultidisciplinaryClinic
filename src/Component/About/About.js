import React from 'react';
import './About.scss';
import {Link} from 'react-router-dom';
import FotoEquipe from '../../Asset/foto-equipe.jpg'
import FotoNutri from '../../Asset/bia.jpg'
import FotoFisio from '../../Asset/oswaldo.jpg'
import FotoMedica from '../../Asset/Iana.jpg'
import FotoPsico from '../../Asset/marina.jpg'

const About = () => {
 
  return (
<div className='Main-About'>
    <div className='Quem-Somos-Main'>
<div className='Background-Quem-Somos'></div>
<p className='title-Quem-Somos'>Quem Somos</p>
<Link to="/Contato" className='btn btnOne'>Fale Conosco</Link>
<button className='btn btnTwo'>Saiba Mais</button>
<div className='background-img-Quem-Somos'>
    <p className='title-img'>Sobre a Equipe</p>
    <img className='img-equipe' src={FotoEquipe} alt=''></img>
    </div>
<div className='background-Sobre-Equipe-Text'>
    <p className='text-sobre-equipe'>Somos uma equipe multidisciplinar que trabalha de forma humanizada. 
    Nosso foco é seu bem estar e qualidade de vida,por isso trabalhamos de forma coletiva, integrada e acolhedora.<br></br> 
    Temos grande experiencia em atendimento humanizado.<br></br>
    <br></br>
Atendemos na Clínica Projeto Coluna Reta, <br></br>na agronômica, de segunda à sexta, das 8:00 até as 18:00.<br></br>
<br></br>
Ficaremos felizes em te atender.</p>

</div>
    </div>

    <div className='Sobre-Nos-Main'>
        <div className='background-title-Sobre-Nos'>
        <h2 className='title-Sobre-Nos'>Nossa Equipe</h2>
        </div>
        <div className='Row-Equipe'>
            <div className='Main-apresentacao'>

            
<div className='background-individual '></div>
<div className='background-apresentacao'>
        <h3 className='title-apresentacao'>Nutricionista</h3>
        <p className='apresentacao-historico'>"Nutricionista formada pela UFSC em 2011, pós-graduada em Nutrição funcional e Comportamento Alimentar.
                Vasta experiencia em atendimento inantil é também Nutricionista da prefeitura de Palhoça. "</p>
        <div className='apresentacao-social'>
        <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank" className="fa fa-linkedin lkdin-sobre-nos"> </a>
        <a  href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank" className="fa fa-facebook fb-sobre-nos"> </a>
        <a  href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank" className="fa fa-instagram ig-sobre-nos"> </a>
        </div>
        <div className='name-apresentacao'>
        <span >Bianca di Bortoli</span>
        </div>
       

     
  
</div>
<img className='img-apresentacao' src={FotoNutri} alt=''></img> 
</div>

<div className='Main-apresentacao'>

            
<div className='background-individual second-color'></div> 
<div className='background-apresentacao'>
        <h3 className='title-apresentacao'>Fisioterapeuta</h3>
        <p className='apresentacao-historico'>"Nutricionista formada pela UFSC em 2011, pós-graduada em Nutrição funcional e Comportamento Alimentar.
                Vasta experiencia em atendimento inantil é também Nutricionista da prefeitura de Palhoça. "</p>
        <div className='apresentacao-social'>
        <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank" className="fa fa-linkedin lkdin-sobre-nos"> </a>
        <a  href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank" className="fa fa-facebook fb-sobre-nos"> </a>
        <a  href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank" className="fa fa-instagram ig-sobre-nos"> </a>
        </div>
        <div className='name-apresentacao'>
        <span>Oswaldo Campos</span>
        </div>
       

    
  
</div>
<img className='img-apresentacao' src={FotoFisio} alt=''></img> 
</div>

<div className='Main-apresentacao'>

            
<div className='background-individual'></div> 
<div className='background-apresentacao'>
        <h3 className='title-apresentacao'>Médica</h3>
        <p className='apresentacao-historico'>"Nutricionista formada pela UFSC em 2011, pós-graduada em Nutrição funcional e Comportamento Alimentar.
                Vasta experiencia em atendimento inantil é também Nutricionista da prefeitura de Palhoça. "</p>
        <div className='apresentacao-social'>
        <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank" className="fa fa-linkedin lkdin-sobre-nos"> </a>
        <a  href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank" className="fa fa-facebook fb-sobre-nos"> </a>
        <a  href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank" className="fa fa-instagram ig-sobre-nos"> </a>
        </div>
        <div className='name-apresentacao'>
        <span>Iana Fazzioni</span>
        </div>
        

    
  
</div>
<img className='img-apresentacao' src={FotoMedica} alt=''></img> 
</div>

<div className='Main-apresentacao'>

            
<div className='background-individual second-color'></div> 
<div className='background-apresentacao'>
        <h3 className='title-apresentacao'>Psicóloga</h3>
        <p className='apresentacao-historico'>"Nutricionista formada pela UFSC em 2011, pós-graduada em Nutrição funcional e Comportamento Alimentar.
                Vasta experiencia em atendimento inantil é também Nutricionista da prefeitura de Palhoça. "</p>
        <div className='apresentacao-social'>
        <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank" className="fa fa-linkedin lkdin-sobre-nos"> </a>
        <a  href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank" className="fa fa-facebook fb-sobre-nos"> </a>
        <a  href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank" className="fa fa-instagram ig-sobre-nos"> </a>
        </div>
        <div className='name-apresentacao'>
        <span>Marina Mano</span>
        </div>
        

    
  
</div>
<img className='img-apresentacao' src={FotoPsico} alt=''></img> 
</div>











</div>

</div>

          


</div>

  );
};

export default About;
