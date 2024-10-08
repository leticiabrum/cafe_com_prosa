import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from "react";
import Input from "../../Input";
import Section from '../../SectionLayout';
import brasileiroEmKaty from "/assets/images/brasileiro_katy.png";
import cafezinho from "/assets/images/cafezinho.png";


const Section3 = () => {
      const element = React.useRef();
      const tl = React.useRef();

      React.useLayoutEffect(() => {
            gsap.registerPlugin(useGSAP, ScrollTrigger);

            const ctx = gsap.context(() => {
                  tl.current = gsap.timeline({
                        scrollTrigger: {
                              trigger: ".animation-timeline",
                              scrub: true,
                              // markers: true,
                              start: "top bottom",
                              end: "70% 90%",
                        }
                  })
                        .fromTo("#animation-to-right", {
                              opacity: 0,
                              x: -160,
                        }, {
                              opacity: 1,
                              x: 0,
                        })
                        .fromTo("#animation-to-left", {
                              opacity: 0,
                              x: 160,
                        }, {
                              opacity: 1,
                              x: 0,
                        })
            }, element)

            return () => {
                  gsap.killTweensOf('.animation-timeline');
            }
      }, [])

      return (
            <Section id="section-3" className="bg-yellow-50">
                  <div ref={element} className="flex flex-col sm:flex-row gap-12 items-center justify-center">
                        <div id="animation-to-right" className="animation-timeline flex flex-col gap-12 items-center text-blue-800 sm:w-1/2 ease duration-200">
                              <img
                                    src={brasileiroEmKaty}
                                    alt="Brasileiro morando em Katy?"
                                    className="w-3/5"
                              />
                              <p>
                                    Buscamos criar um <b>ambiente acolhedor onde brasileiros se sintam em casa, possam compartilhar suas jornadas e encontrar apoio na comunidade.</b> Queremos fortalecer laços, promover o aprendizado e a partilha, reconhecendo a importância de cada história e experiência. Não temos a intenção de ser isolados ou de vender alguma coisa – você não vai ouvir falar de Herbalife ou Telexfree aqui. Nosso foco é fortalecer a comunidade, sem custo e sem pegadinhas. A troca de experiências é central para nosso crescimento coletivo. <b>Preencha o formulário ao lado e obtenha mais informações sobre o projeto!</b>
                              </p>
                        </div>
                        <form id="animation-to-left" className="animation-timeline text-yellow-400 flex flex-col items-center gap-8 w-full sm:w-1/2 ease duration-200">
                              <div className="bg-green-main sm:flex sm:flex-col sm:gap-y-[0.8rem] p-8 sm:px-[2.3rem] sm:pb-[2rem] sm:pt-[3.8rem] w-full shrink-0 rounded-2xl relative">
                                    <Input label="NOME" />
                                    <Input label="EMAIL" />
                                    <Input label="TELEFONE" />
                                    <Input label="INSTAGRAM" />
                                    <img
                                          src={cafezinho}
                                          alt="xicara de café"
                                          className="absolute w-[5.8rem] sm:w-[7rem] top-0 left-[50%] -translate-x-1/2 -translate-y-1/2"
                                    />
                              </div>

                              <button className=" bg-blue-700 hover:bg-blue-800 rounded-full sm:w-2/3 py-4 px-6 shadow-2xl hover:scale-105 ease-in-out duration-200">
                                    QUERO PARTICIPAR!
                              </button>
                        </form>
                  </div>
            </Section>
      )
}

export default Section3