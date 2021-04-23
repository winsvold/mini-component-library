import React from 'react';
import styled, {css} from 'styled-components';

import {COLORS} from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import {AtSign, Search} from "react-feather";

const largeStyles = css`
  font-size: 18px;
  border-bottom: solid 2px;
`;

const smallStyles = css`
  font-size: 14px;
  border-bottom: solid 1px;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${COLORS.gray700};

  ${p => {
    switch (p.size) {
      case 'large':
        return largeStyles;
      default:
        return smallStyles
    }
  }}
`;

const Input = styled.input`
  font-size: inherit;
  border: none;
  font-weight: 700;
  padding: 4px;
  padding-left: 1.5em;
  width: ${p => p.width}px;
  color: inherit;

  &::placeholder {
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  pointer-events: none;
  

  svg {
    width: 1em;
    color: ${COLORS.gray700};
  }
  
  ${Input}:hover + & svg {
    color: ${COLORS.black};
  }
`;

const IconInput = ({
                       label,
                       icon,
                       width = 250,
                       size,
                       placeholder,
                   }) => {

    var Icon;
    switch (icon) {
        case 'search':
            Icon = Search;
            break;
        case 'at-sign':
            Icon = AtSign;
            break;
    }

    return (
        <Wrapper size={size}>
            <VisuallyHidden><label htmlFor="input">{label}</label></VisuallyHidden>
            <Input width={width} id="input" size={size} placeholder={placeholder} type="text"/>
            {Icon && <IconWrapper><Icon/></IconWrapper>}
        </Wrapper>
    );
};

export default IconInput;
