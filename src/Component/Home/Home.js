import React from 'react';
import './Home.scss'
import logo from '../../Asset/equipe-cinza.png'

const Home = () => {
 
  return (
      <div className='Main-Content'>

<div className='main-head'>

<div className='background-head'> </div>
     <div className='title-border'> </div> 
      <p className='title' >Equipe Multidisciplinar</p> 
     
      <div className='background-img'></div> 
     
      <img src={logo} className='img' alt=''></img>
</div>

<div className='Services-Main'>
  <div className='Title-Main'>
  <p className='Services-Title'>Nossos Serviços</p>
  <p className='Services-Sub-Title'>Nossa Equipe trabalha de forma humanizada</p>
  </div>


  <div className='Service-Box'>

  <div className='Service Mobile-One'>
  <span ><div className='Title-Area'>Nutrição</div>
  </span><p className='Info-Area'>&#x23f5;Funcional <br>
  </br>&#x23f5;Alimentação <br></br>Comportamental <br>
  </br>&#x23f5;Nutrição Infantil</p>
  </div>

  <div className='Service Second-Color Mobile-Two'>
  <span ><div className='Title-Area'>Psicologia</div>
  </span><p className='Info-Area'>&#x23f5;Funcional <br>
  </br>&#x23f5;Alimentação <br></br> Comportamental <br>
  </br>&#x23f5;Nutrição Infantil</p>
  </div>

  <div className='Service Mobile-Three'>
  <span ><div className='Title-Area'>Medicina</div>
  </span><p className='Info-Area'>&#x23f5;Funcional <br>
  </br>&#x23f5;Alimentação <br></br>Comportamental <br>
  </br>&#x23f5;Nutrição Infantil</p>
  </div>

  <div className='Service Second-Color Mobile-Four'>
  <span ><div className='Title-Area'>Fisioterapia</div>
  </span><p className='Info-Area'>&#x23f5;Funcional <br>
  </br>&#x23f5;Alimentação <br></br>Comportamental <br>
  </br>&#x23f5;Nutrição Infantil</p>
  </div>

  </div>
  
</div>
</div>

  );
};

export default Home;