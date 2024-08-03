import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';



const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>

        <div className='flex flex-col gap-y-10 lg:flex-row lg: items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/*img*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}

            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>

          {/*text*/}
          <motion.div

            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}

            className='flex-1'>

            <h2 className='h2 text-accent'>About.me</h2>
            <h3 className='h3 mb-4'>Sou Miguel Amoedo, um desenvolvedor freelancer com mais 3 anos de experiência em desenvolvimento front-end e back-end.</h3>

            <p className='mb-6'>
              Concluí meu curso de graduação, o que me proporcionou uma base sólida na área.

              Minha paixão pelo desenvolvimento web me levou a aprimorar minhas habilidades em linguagens como HTML, CSS e JavaScript, bem como em frameworks populares como React e Angular. Como desenvolvedor front-end, me destaco na criação de interfaces visualmente atraentes e amigáveis para o usuário.


              Além disso, tenho experiência em desenvolvimento back-end, utilizando linguagens como Python e Node.js, e trabalhando com bancos de dados como MySQL e MongoDB. Sou um profissional dedicado, focado em entregar resultados, com excelentes habilidades analíticas e de resolução de problemas para enfrentar os desafios dos projetos.
            </p>

            {/*stats*/}

            <div className='flex gap-x-6  lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {

                    inView ?

                      <CountUp start={0} end={4} duration={3} />
                      : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Anos de <br />
                  Experiência </div>
              </div>


              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {

                    inView ?

                      <CountUp start={0} end={9} duration={3} />
                      : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'> Desenvolvidos<br />
                  Projetos
                </div>
              </div>



              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {

                    inView ?

                      <CountUp start={0} end={100} duration={3} />
                      : null}


                </div>
                <div className='font-primary text-sm tracking-[2px]'> Satisfeitos  <br />
                  Clientes  </div>
              </div>











            </div>














            <div className='flex gap-x-8 items center'>
              <a href='https://www.instagram.com/miguelbdev/'> <button className='btn btn-lg'>Contact  me</button></a>


              <a href='#' className='text-gradient btn-link'> My Portfolio</a>
            </div>

          </motion.div>

        </div>

      </div>

    </section>



  )









};

export default About;
