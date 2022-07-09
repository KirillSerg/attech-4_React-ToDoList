import React from "react";
import styled from 'styled-components';

import StyledInputTask from "./StyledInputTask";

const StyledTask = styled(StyledInputTask)`
    margin: 0;
    background-color: ${({isCompleted}) => isCompleted ? 'green' : 'yellow'};
    color: ${({isCompleted}) => isCompleted ? 'black' : 'blue'};
    text-decoration: ${({isCompleted}) => isCompleted ? 'line-through' : 'none'};
    opacity: ${props => props.isCompleted ? '0.5' : 'none'};
`

const StyledTodoItem = (props) => {
    return (<StyledTask {...props} />)
};

export default StyledTodoItem;