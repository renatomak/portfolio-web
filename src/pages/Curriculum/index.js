import React from 'react';
import LinkVoltar from '../components/LinkVoltar';
import image from '../../img/renato02.jpg';

import {
  Container,
  ExperienciaProfissional,
  Education,
  CardContainer,
  CardLeft,
  CardRight,
} from './styled';
import { MainTitle } from '../components/MainTitle';
import AboutMe from './AboutMe';
import HardSkills from './HardSkills';

function Curriculum() {
  return (
    <Container className="main">
      <MainTitle image={image} />
      <AboutMe />
      <HardSkills />

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
            

            <ul>
              <li>Atendimento ao público interno da unidade;</li>
              <li>Fechamento de frequência mensal;</li>
              <li>Controle de frequência diária;</li>
              <li>
                Criação de documentos, tais como: memorandos, circulares,
                pareceres em processos, entre outros.
              </li>
            </ul>
            </article>
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
            <article>
              <p>
                Responsável por receber e distribuir medicamentos e insumos.
                Sendo responsável, principalmente por:
              </p>
              <ul>
                <li>Atendimento aos pacientes internos e externos;</li>
                <li>Controle de estoque;</li>
                <li>Recebimento de medicamentos e insumos.</li>
              </ul>
            </article>
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
            <article>
              <p>Atendimento receptivo ao Cliente da operadora Vivo.</p>
              <ul>
                <li>
                  Resolução de problemas diversos nas linhas de telefone dos
                  clientes;
                </li>
                <li>Oferta de produtos sugeridos para as linhas.</li>
              </ul>
            </article>
          </CardRight>
        </CardContainer>

      </ExperienciaProfissional>

      <Education>
        <h2 className="title">Formação acadêmica</h2>
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
    </Container>
  );
}

export default Curriculum;
