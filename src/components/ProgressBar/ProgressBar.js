/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Base = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  &:after {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background-color: ${COLORS.primary};
    border-radius: 4px;
    clip-path: polygon(0 0, ${p => p.value}% 0, ${p => p.value}% 100%, 0 100%);
  }
`;

const Large = styled(Base)`
  height: 24px;
  padding: 4px;
  border-radius: 8px;
`;

const Medium = styled(Base)`
  height: 12px;
  border-radius: 4px;
`;

const Small = styled(Base)`
  height: 8px;
  border-radius: 4px;
`;

const ProgressBar = ({ value, size }) => {

  let Variant;
  switch (size) {
    case 'small':
      Variant = Small;
      break;
    case 'large':
      Variant = Large;
      break;
    default:
      Variant = Medium;
  }

  return <>
    <Variant value={value} />
    <VisuallyHidden><progress value={value / 100}/></VisuallyHidden>
  </>;
};

export default ProgressBar;
