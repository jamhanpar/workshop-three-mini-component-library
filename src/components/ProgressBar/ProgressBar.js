/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};

export default function ProgressBar({ value, size, color, ariaLabel }) {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px',
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          role='progressbar'
          size={size}
          value={value}
          aria-valuemin='0'
          aria-valuenow={value}
          aria-valuemax='100'
          aria-label={ariaLabel}
          style={{
            '--color': COLORS[color],
            '--width': value + '%',
            '--height': styles.height + 'px',
            '--padding': styles.padding + 'px',
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  border-radius: 4px;

  /* Trim off corners when progress bar in near 100% */
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: var(--color);
  width: var(--width);
  height: var(--height);
  /* border-radius: ${props =>
    props.value >= 98 ? '4px' : '4px 0px 0px 4px'}; */
`;
