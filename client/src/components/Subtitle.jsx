/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { LeftDiv } from '../elements/Div';
import { TitleSpan } from '../elements/Span';


function Subtitle({ onHistoryClick }) {
  return (
    <LeftDiv>
      <TitleSpan large black onClick={onHistoryClick}><strong>Zestimate history</strong></TitleSpan>
    </LeftDiv>
  );
}

Subtitle.defaultProps = {
  onHistoryClick: undefined,
};

Subtitle.propTypes = {
  onHistoryClick: PropTypes.func,
};

export default Subtitle;
