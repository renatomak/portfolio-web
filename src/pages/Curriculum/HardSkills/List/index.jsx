import React from 'react';
import PropTypes from 'prop-types';
import Container from './styled';

const List = ({ list, title }) => (
  <Container>
    <h2 className="title">{title}</h2>
    <hr />
    <ul>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </Container>
);

List.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.shape().isRequired,
};

export default List;
