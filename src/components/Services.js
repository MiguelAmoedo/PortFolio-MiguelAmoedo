import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import  {motion } from 'framer-motion'
import { fadeIn } from '../variants';

const services = [
  {
    name: 'UI/UX Design ',
    descricao:
    'Ofereço serviços de design UI/UX para produtos digitais. Com uma abordagem centrada no usuário, crio interfaces envolventes, utilizando pesquisa, prototipagem e testes para garantir que o design final atenda aos objetivos do seu negócio.'
 ,
    link:'Learn more'
  } ,
  {
    name: 'Web Development ',
    descricao:
       'Ofereço serviços personalizados de desenvolvimento web, criando sites responsivos usando HTML, CSS, React.js e Node.js, laravel, C# e Python. Sites robusto e escaláveis para você!'
    ,
    link:'Learn more'
 
  } ,



  {
    name: 'Mobile Development ',
    descricao:
    'Ofereço desenvolvimento personalizado de aplicativos móveis para Android, com foco em funcionalidade, UI atraente e UX intuitiva. Do planejamento à implementação, utilizo React Native, Node.js.'
   , link:'Learn more'
  } ,

]


const Services = () => {
  return(  

    <section className='section' id='services'>
      <div className='container mx-auto'>

      <div className='flex flex-col lg:flex-row'>

      {/*text and image*/}
      <motion.div
        variants={fadeIn('right',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once:false, amount:0}}
      class="flex -1 lg: lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg: mb-0 ">
  <div>
    <h2 class="h2 text-accent mb-6">O que eu faço?</h2>
    <h3 class="h3 max-w-[455px] mb-16">
    Sou desenvolvedor de software com 4 anos de experiência em desenvolvimento front-end e back-end.
    </h3>
    <button class="btn btn-sm"> Veja meu trabalho</button>
  </div>
</motion.div>


 {/*services*/}
      <motion.div 
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once:false, amount:0}}
      className='flex-1'>
        {/*services list*/}     

        <div>
          {services.map((service,index)=>{
            const{name,descricao,link} = service
            return(
              <div  className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index} >
              <div className='max-w-[476px]'> 
                <h4 className='text-[20px] tracking-wider font-primary 
                font-semibold mb-6'>
                  {name}
                </h4> 
                <p className='font-secondary leading-tight'>
                  {descricao}</p>
                </div>
              <div className='flex flex-col flex-1 items-end'>  
              <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                <BsArrowUpRight/>
              </a>

              <a href='#' className='text-gradient text-sm'>
                {link}
              </a>

              </div>
              </div>
            )
          })}
        </div>
      </motion.div>


      </div>

      </div>
      
      </section>


  ) 
  

};

export default Services;
