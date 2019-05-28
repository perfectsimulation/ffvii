import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const LabelContainer = styled.label`
`;

const Icon = styled.svg`
  fill: none;
  stroke: #070766;
  stroke-width: 2px;
`

const CheckboxContainer = styled.div`
  padding-right: 0.6rem;
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? 'ghostwhite' : '#070766'}
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:hover + & {
    box-shadow: 0 0 0 3px #070766;
  }
  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`;

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

class ChapterCheckbox extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    };
  };

  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked });

  render() {
    return (
      <Fragment>
        <LabelContainer>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <span>{this.props.name}</span>
        </LabelContainer>
      </Fragment>
    );
  }
}

export default ChapterCheckbox;