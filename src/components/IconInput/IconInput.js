import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 26,
  },
};

export default function IconInput({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon ? icon : 'search'} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        type='text'
        gap={size === 'small' ? '8px' : '16px'}
        style={{
          '--width': width + 'px',
          '--height': styles.height + 'px',
          '--border-thickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
        }}
        // passing rest of prop values to input including placeholder
        {...delegated}
      />
    </Wrapper>
  );
}

const Wrapper = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap);
  min-width: max-content;
  padding: 4px 0;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  color: inherit;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  padding-left: var(--height);
  outline-offset: 3px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;
