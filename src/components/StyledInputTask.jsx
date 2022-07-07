import React from "react";
import styled from 'styled-components';

const StyledInput = styled.input`
    margin-left: 20px;
    color: blue;
    background-color: rgb(195, 253, 255);
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