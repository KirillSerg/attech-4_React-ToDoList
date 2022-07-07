import React from "react";
import styled from 'styled-components';

import StyledInputTask from "./StyledInputTask";

const StyledTask = styled(StyledInputTask)`
    margin: 0;
    background-color: ${props => props.className === 'complete' ? 'rgb(7, 243, 77)' : 'yellow'};
    color: ${props => props.className === 'complete' ? 'black' : 'blue'};
    text-decoration: ${props => props.className === 'complete' ? 'line-through' : 'none'};
    opacity: ${props => props.className === 'complete' ? '0.5' : 'none'};

    // &:complete {
    //     background-color: rgb(133, 247, 167);
    // };
`

const StyledTodoItem = (props) => {
    return (<StyledTask {...props} />)
};

export default StyledTodoItem;