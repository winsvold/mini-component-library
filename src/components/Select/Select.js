import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';
import {ChevronDown} from "react-feather";

const Wrapper = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
`;

const Style = styled.select`
  width: fit-content;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  border: none;
  padding: 12px 52px 12px 12px;
  color: ${COLORS.gray700};
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledChevronDown = styled(ChevronDown)`
  position: absolute;
  right: 8px;
  pointer-events: none;
  width: 16px;
  stroke: ${COLORS.gray700};

  ${Style}:hover + & {
    stroke: ${COLORS.black};
  }
`;

const Select = ({label, value, onChange, children}) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper>
            <Style value={value} onChange={onChange}>
                {children}
            </Style>
            <StyledChevronDown/>
        </Wrapper>
    );
};

export default Select;
