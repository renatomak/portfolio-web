import React from 'react';
import { CardContainer, CardLeft, CardRight } from './styled';

const Experience = ({content}) => {
    const { period, company, occupation, abstract: { resume, activities } } = content;

    return (
        <CardContainer>
          <CardLeft>
            <h3>{period}</h3>
            <p>(Goiânia-GO)</p>
          </CardLeft>
          <CardRight>
            <h3>{company}</h3>
            <p className="occupation">
              {occupation}
            </p>
            <section>
              { resume }
            <ul>
                {activities.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            </section>
          </CardRight>
        </CardContainer>
    );
}

export default Experience;