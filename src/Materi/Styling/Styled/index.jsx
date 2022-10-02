import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border: 2px solid #000;
  background-color: #fff;
  color: #000;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 1rem;
  border-color: #2196f3;
  color: dodgerblue;
  border-radius: 8px;

  &:hover {
    background: #2196f3;
    color: #fff;
  }
`

export default class Styled extends React.Component {
  render() {
    return (
      <div>
        <Button>Go Eduwork</Button>
      </div>
    )
  }
}
