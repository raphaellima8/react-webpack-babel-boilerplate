import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const SectionHeaderContainer = styled.div`
  display: flex;
  background-color: #dcdcdc;
  padding-left: 0.3rem;
`;

const SectionHeaderText = styled.h2`
  margin: 1rem;
  font-size: 1.8rem;
  font-weight: 300;

  @media (min-width: 600px) {
    font-size: 3rem;
    font-weight: 300;
  }
`;

const SectionHeader = ({ title }) => (
  <SectionHeaderContainer>
    <SectionHeaderText>{title}</SectionHeaderText>
  </SectionHeaderContainer>
);

const mapStateToProps = state => {
  return {
    title: state.searchTerm || 'Lista de produtos'
  };
};

export default connect(mapStateToProps)(SectionHeader);
