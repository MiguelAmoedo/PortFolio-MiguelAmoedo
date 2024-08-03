import React from 'react';
import Image from "../assets/foto 1.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn, fadein } from '../variants'

const Banner = () => {
  return (

    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>

      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-10'>
          <div className='flex-1 text-center font secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[45px] font-bold leading-[0.8] lg:text-[100px]'>MIGUEL <span>AMOEDO</span>
            </motion.h1>

            <div>
              <div className='mb-6 text-[36px] lg;text-[60px] font-secondary
font-semibold uppercase lead-[1]'>

                <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }}>
                  <span className='  Text white mr-4'>I am a</span>
                  <TypeAnimation sequence={[
                    'Developer', 2000,
                    'TI', 2000,
                    'Designer', 2000,
                  ]}

                    speed={50}
                    className='text-accent'
                    wrapper='span'
                    repeat={Infinity} />

                </motion.div>


              </div>
              <motion.p variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 mx-w-lg mx-auto lg:mx-0'>Olá, Meu nome é Miguel Amoedo! Sou um Analista e Desenvolvedor de Sistemas formado pela Faculdade Martha Falcão - Wyden , técnico em informática formado pelo renomado SENAC e pós graduando Gerenciamento de Projetos - Práticas do PMI. Sou Desenvolvedor de Software com mais de Três anos de experiência pronto para atender qualquer demanda no desenvolvimento web, mobile e deskop!</motion.p>


              <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>

                <button className='btn btn-lg'>Contact me</button>

                <a href='#' src='' className='text-gradient btn-link'>Meu PortFolio</a>
              </motion.div>

              <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max  mx-auto lg:mx-0 '>
                <a href='https://github.com/MiguelAmoedo'>

                  <FaGithub />
                </a>


                <a href='https://www.instagram.com/miguelbdev'>

                  <FaInstagram />
                </a>

                <a href='https://www.linkedin.com/in/miguel-amoedo-08a184217/'>

                  <FaLinkedin />
                </a>



              </motion.div>
              <br />
              <br />
              <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>

                <img src={Image} alt='' />
              </motion.div>
            </div>
          </div>



        </div>
      </div>
    </section>



  )
};

export default Banner;
