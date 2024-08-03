import React, { useState } from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendMail(e){
    e.preventDefault(); 
  
  const templateParams = {
    from_name: name,
    email: email,
    message: message
  }  
  
  emailjs.send("service_ob912kg","template_ouhnyhz", templateParams, "dzilrEM80K7TZHIET")
  .then((response) => {
    alert("Email enviado com sucesso")
    setName('')
    setEmail('')
    setMessage('')
  }, (err) => {
    alert("Deu ruim mlk")
  })
  }

  return(


<section className='py-16 lg:section ' id='contact'>

<div className='container mx-auto'>
<div className='flex flex-col  lg:flex-row
'>
    {/*text */}
    <motion.div 
       variants={fadeIn('right',0.2)}
       initial='hidden'
       whileInView={'show'}
       viewport={{ once:false, amount:0}}
    
    
    className='flex-1 flex justify-start items-center'>
      <div>
        <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>Entre em contato</h4>
        <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
          Vamos trabalhar <br/> juntos? 
        
        </h2>
      </div>
    </motion.div>

    {/*Form */}
    <motion.form 
      variants={fadeIn('left',0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once:false, amount:0}}
      onSubmit={sendMail}
    
      className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-24 p-6 items-start ' >

    <input className=' bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
    type='text'
    placeholder='Your name'
    onChange={(e) => setName(e.target.value)}
    value={name}
    required
    />

    <input className=' bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
    type='text'
    placeholder='Your e-mail'
    onChange={(e) => setEmail(e.target.value)}
    value={email}
    required
    />


    <textarea className=' bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
    
    placeholder='Your message'
    onChange={(e) => setMessage(e.target.value)}
    value={message}
    required
    ></textarea>

    <input className='btn btn-lg' value="Send Message" type='submit'/>
    </motion.form>

</div>

</div>


</section>


  ) 
  
  
  
};

export default Contact;
