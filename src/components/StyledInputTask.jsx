import React from "react";
import styled from 'styled-components';

const StyledInput = styled.input`
    margin-left: 13px;
    color: blue;
    background-color: lightgray;
    border: 1px solid red;
    width: 40vw;

    &:focus-visible {
    border: 2px solid pink;
    outline: none;
    };
`

const StyledInputTask = (props) => {
    return (<StyledInput {...props} />)
};

export default StyledInputTask;