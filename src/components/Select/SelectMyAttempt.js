import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

export default function Select({ label, value, onChange, children }) {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Menu value={value} onChange={onChange}>
        {children}
      </Menu>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 8px;
  background: var(--transparent-gray-15, rgba(128, 128, 128, 0.15));
  padding: 12px 16px;
  width: fit-content;
`;

const Menu = styled.select`
  border: none;
  background: transparent;
  display: flex;
  padding-right: 24px;
  width: fit-content;

  &:hover {
    cursor: pointer;
    color: var(--black);
  }
`;
