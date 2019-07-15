import React from 'react';
import { connect } from 'react-redux';

import BoxWithText from './BoxWithText';

const SectionHeader = ({ title }) => <BoxWithText text={title} />;

const mapStateToProps = ({ searchTerm }) => {
  return {
    title: searchTerm || 'Lista de produtos'
  };
};

export default connect(mapStateToProps)(SectionHeader);
