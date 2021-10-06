import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, CardLeft, CardRight } from './styled';

const Experience = ({ content }) => {
  const {
    period,
    company,
    occupation,
    abstract: { resume, activities },
  } = content;

  return (
    <CardContainer>
      <CardLeft>
        <h3>{period}</h3>
        <p>(Goiânia-GO)</p>
      </CardLeft>
      <CardRight>
        <h3>{company}</h3>
        <p className="occupation">{occupation}</p>
        <section>
          {resume}
          <ul>
            {activities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </CardRight>
    </CardContainer>
  );
};

export default Experience;

Experience.propTypes = {
  content: PropTypes.shape({
    period: PropTypes.string.isRequired,
    local: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    abstract: PropTypes.shape.isRequired,
  }).isRequired,
};
