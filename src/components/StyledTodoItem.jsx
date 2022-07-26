import React from "react";
import styled from 'styled-components';
import StyledInputTask from "./StyledInputTask";

const StyledTask = styled(StyledInputTask)`
    margin: 0;
    background-color: ${props => props.isCompleted ? 'green' : props.color};
    color: black;
    text-decoration: ${({isCompleted}) => isCompleted ? 'line-through' : 'none'};
    opacity: ${({isCompleted}) => isCompleted ? '0.5' : 'none'};
`

const StyledTodoItem = (props) => {
    return (<StyledTask {...props} />)
};

export default StyledTodoItem;