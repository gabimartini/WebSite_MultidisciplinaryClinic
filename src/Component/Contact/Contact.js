import React, {useState} from 'react';
import * as emailjs from 'emailjs-com';
import './Contact.scss'

function Contact() {
 
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [subject, setsubject] = useState('')
  const [message, setmessage] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    let templateParams = {
      from_name: email,
      to_name: '',    //  personal email,
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      // personal emailjs,
       templateParams,
      // personal tokem emailjs
     )
     .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
      resetForm()
 }

       const resetForm =() => {
 setname('') // Assignment instead of unused expression
 setemail('') // Assignment instead of unused expression
 setsubject('') // Assignment instead of unused expression
 setmessage('') // Assignment instead of unused expression
         
           }


  return (
<div className='Main-Contato'>
               
          
               <h1 className='title-contato'>Entre em contato</h1>

               <form className='form-contato' onSubmit={handleSubmit}>
                 <div className='contato-form'>
                 <div className='contato'>
                <input 
                value={subject}
                onChange={ (e) => {
                  setsubject(e.target.value) 
                }}
                className='input' type='text' name='assunto' placeholder='Assunto'></input><br></br>
                
                <input 
                 value={name}
                 onChange={ (e) => {
                  setname(e.target.value) 
                }}
                className='input' type='text' name='Nome' placeholder='Nome'></input><br></br>
               
                <input 
                 value={email}
                  onChange={ (e) => {
                  setemail(e.target.value) 
                }}
                className='input' type='email' name='email' placeholder='Email'></input><br></br>
                </div>

                 <input 
                  value={message}
                   onChange={ (e) => {
                  setmessage(e.target.value) 
                }}
                 className='message' type='text' name='menssagem' placeholder='Digite sua mensagem'></input>
                 </div>
                
            
                <button type='submit' className='btnenviar'>Enviar</button>
                </form>

                <div className='background-contato left'></div>
                <div className='background-preferencia'>
                    <p>Se preferir você pode entrar em contato por aqui:</p>
                    <p>Email: nossoemail@gmail.com</p>
                    <p>Telefone: 4812345678</p>
                </div>
                
                <div className='background-contato right'></div>
                <div className='background-visita'>
                    <p>Venha nos visitar!</p>
                    <p>R. Alm. Carlos da Silveira Carneiro, 182 - Agronômica, Florianópolis - SC, 88025-350, Brasil</p>
                    <p>Nosso horário de atendimento é:</p>
                    <p>Segunda à Sexta: 8:00 às 18:00</p>
                </div>

                <div className='map-home'>
<iframe width='99.7%' height='100%' id='mapcanvas' title='maps' src='https://maps.google.com/maps?q=R.%20Alm.%20Carlos%20da%20Silveira%20Carneiro,%20182%20-%20Agron%C3%B4mica,%20Florian%C3%B3polis%20-%20SC,%2088025-350,%20Brasil&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed'></iframe>
</div>
</div>

  );
};

export default Contact;