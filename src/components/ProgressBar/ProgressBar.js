/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size, color, ariaLabel }) => {
  return (
    <Wrapper>
      <Bar
        role='progressbar'
        size={size}
        value={value}
        aria-valuenow={value}
        aria-label={ariaLabel}
        style={{
          '--color': COLORS[color],
          '--width': `${value}% - 8px`,
          '--height':
            size === 'large' ? '16px' : size === 'medium' ? '12px' : '8px',
        }}
      />
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: var(--color);
  width: var(--width);
  height: var(--height);
  border-radius: ${props => (props.value >= 98 ? '4px' : '4px 0px 0px 4px')};
  margin: ${props => (props.size === 'large' ? '4px' : '0px')};
`;
