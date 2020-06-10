import styled from "styled-components"

export default styled.form`
  label {
    color: #444;
    font-size: 0.8rem;
    margin-bottom: 1em;
    display: block;
    margin-bottom: 0.8rem;
  }

  input,
  select,
  button {
    font: inherit;
    font-size: 1rem;
    padding: 0.25em 0.5em;
    border-radius: 5px;
    border: 1px solid #c3c3c3;
    display: block;
    background-color: #fff;
  }

  input {
    width: 100%;
    :hover,
    :focus {
      border: 1px solid #222;
    }
  }

  button {
    border: 1px solid #c3c3c3;
    cursor: pointer;
    :hover,
    :focus {
      border: 1px solid #222;
    }
  }

  p,
  span {
    font-size: 14px;
    line-height: 15px;
  }
`
