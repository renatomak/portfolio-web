import React from 'react';
import Caminho from '../components/Caminho';
import LinkVoltar from '../components/LinkVoltar';
import { AiOutlineMail } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';

import {
  CContainer,
  CurrHeader,
  AboutMe,
  Text,
  Contact,
  Software,
  ProgrammingLanguages,
  ExperienciaProfissional,
  Education,
  CardContainer,
  CardLeft,
  CardRight,
  HardSkills,
} from './styled';
import { MainTitle } from '../components/MainTitle';

function Curriculum() {
  return (
    <CContainer className="main">
      <CurrHeader>
        <img
          className="cv-pic"
          src="/images/renato-quadrado.jpg"
          alt="Foto de Renato Marques"
          width="300px"
        />
        <MainTitle />
      </CurrHeader>

      <AboutMe>
        <Contact>
          <p>
            {' '}
            <AiOutlineMail /> renato.mark.silva@gmail.com
          </p>
          <p>
            <FaPhoneAlt /> (062) 9 9464-4482
          </p>
          <a
            href="https://goo.gl/maps/cYzaYk4qyutiyym26"
            alt="Minha localização"
          >
            {' '}
            <ImLocation2 /> Goiânia-GO, Brasil
          </a>
          <p>Idiomas: Português (Nativo)</p>
          <p>DN: 24/05/1981</p>
        </Contact>

        <Text>
          <h2 className="title">Sobre Mim</h2>
          <hr />
          <p>
            Com experiências anteriores, descobri que gosto de lidar com pessoas
            e ajudá-las a resolver problemas. Descobri na programação essa
            oportunidade e hoje, como Desenvolvedor Web, tenho o objetivo de
            produzir códigos cada vez melhores e com maior velocidade. Nos
            últimos meses executei projetos utilizando: HTML, CSS, JavaScript,
            React, NodeJS, MySQL, MongoDB, socketIO, Python, entre outras.
          </p>
        </Text>
      </AboutMe>

      <HardSkills>
        <Software>
          <h2 className="title">Habilidades </h2>
          <hr />
          <ul>
            <li>Excel</li>
            <li>Word</li>
            <li>PowerPoint</li>
            <li>Workbench</li>
            <li>Gimp</li>
            <li>Linux</li>
            <li>Git</li>
            <li>Trello</li>
            <li>pgAdmin4</li>
          </ul>
        </Software>

        <ProgrammingLanguages>
          <h2 className="title">Linguagens </h2>
          <hr />
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>PostgreSQL</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </ProgrammingLanguages>
      </HardSkills>

      <ExperienciaProfissional>
        <h2 className="title">Experiência de Trabalho</h2>
        <hr />
        <CardContainer>
          <CardLeft>
            <h3>De Janeiro/2008 a Setembro/2015</h3>
            <p>(Goiânia-GO)</p>
          </CardLeft>
          <CardRight>
            <h3>Maternidade Nascer Cidadão/SMS </h3>
            <p className="funcao">
              Assistente Administrativo/Aux. de Departamento Pessoal
            </p>
            <article>
              Prestando auxílio direto à Diretoria Administrativa da
              instituição. Sendo responsável, principalmente por:
            </article>

            <ul>
              <li>Atendimento ao público interno da unidade;</li>
              <li>Fechamento de frequência mensal;</li>
              <li>Controle de frequência diária;</li>
              <li>
                Criação de documentos, tais como: memorandos, circulares,
                pareceres em processos, entre outros.
              </li>
            </ul>
          </CardRight>
        </CardContainer>

        <CardContainer>
          <CardLeft>
            <h3>De Setembro/2008 - até a presente data </h3>
            <p>(Goiânia-GO)</p>
          </CardLeft>

          <CardRight>
            <h3>Maternidade Nascer Cidadão/SMS </h3>
            <p className="funcao">
              {' '}
              Assistente Administrativo/Auxiliar de Farmácia{' '}
            </p>

            <p>
              Responsável por receber e distribuir medicamentos e insumos. Sendo
              responsável, principalmente por:
            </p>
            <ul>
              <li>Atendimento aos pacientes internos e externos;</li>
              <li>Controle de estoque;</li>
              <li>Recebimento de medicamentos e insumos.</li>
            </ul>
          </CardRight>
        </CardContainer>

        <CardContainer>
          <CardLeft>
            <h3>De Agosto/2008 a Junho/2009 </h3>
            <p>(Goiânia-GO)</p>
          </CardLeft>

          <CardRight>
            <h3>Atento Brasil </h3>

            <p className="funcao">Call Center </p>

            <p>Atendimento receptivo ao Cliente da operadora Vivo.</p>
            <ul>
              <li>
                Resolução de problemas diversos nas linhas de telefone dos
                clientes;
              </li>
              <li>Oferta de produtos sugeridos para as linhas.</li>
            </ul>
          </CardRight>
        </CardContainer>

        <CardContainer>
          <CardLeft></CardLeft>

          <CardRight></CardRight>
        </CardContainer>
      </ExperienciaProfissional>

      <Education>
        <h2>Formação acadêmica</h2>
        <hr />

        <CardContainer>
          <CardLeft>
            <h3>De Agosto/2020 a Agosto/2021 </h3>
            <p>(Remoto)</p>
          </CardLeft>

          <CardRight>
            <h3>Trybe</h3>
            <h4 className="funcao">Desenvolvimento Web Full Stack</h4>

            <article>
              A Trybe é uma escola de desenvolvimento web que tem
              comprometimento genuíno com o sucesso profissional das pessoas
              estudantes. Com o Modelo de Sucesso Compartilhado, quem estuda na
              Trybe tem a opção de pagar apenas quando já estiver trabalhando.
              São mais de 1500 horas de formação que aborda fundamentos de
              desenvolvimento web, desenvolvimento Front-end, Back-end, ciência
              da computação, engenharia de software, metodologias ágeis e
              habilidades comportamentais.
            </article>
          </CardRight>
        </CardContainer>

        <CardContainer>
          <CardLeft>
            <h3>De Janeiro/2005 a Novembro/2009 </h3>
            <p>(Goiânia-GO)</p>
          </CardLeft>

          <CardRight>
            <h3>FASAN - Faculdade Sul-Americana</h3>
            <h4 className="funcao">Administração em Análise de Sistemas</h4>

            <article>
              Duração de 4 anos. Os estudos incluem matérias introdutórias como:
              português, filosofia, matemática, ética, economia, sociologia
              entre outros. E matérias específicas como: empreendedorismo,
              administração de recursos humanos, organização, sistemas e
              métodos, gestão da qualidade, marketing etc. É um curso que exige
              leitura e atualização constante, além de atenção às notícias do
              Brasil e do mundo, para um estudo correto de cenários econômicos,
              políticos e sociais.
            </article>
          </CardRight>
        </CardContainer>

        <CardContainer>
          <CardLeft>
            <h3>De Março/2016 a Abril/2016 </h3>
            <p>(Goiânia-GO)</p>
          </CardLeft>

          <CardRight>
            <h3>Coursera/ITA</h3>
            <h4 className="funcao">Orientação a Objetos com Java</h4>

            <article>
              O objetivo deste curso é enriquecer sua experiência com conceitos
              avançados de Java, programação de aplicações Web e acesso a banco
              de dados no contexto de modelagem ágil. Os conceitos apresentados
              neste curso no contexto da programação Java incluem o seguinte:
              APIs fundamentais do Java: tipos genéricos, reflexão e anotações;
              expressões lambda do Java 8; aplicação Web com Java: Java
              Servlets, páginas JSP, padrão MVC e teste de aplicação Web com
              Selenium; e acesso a banco de dados em Java: JDBC, desenvolvimento
              de aplicação empresarial e testes com DBUnit.
            </article>
          </CardRight>
        </CardContainer>
      </Education>

      <LinkVoltar />
    </CContainer>
  );
}

export default Curriculum;
