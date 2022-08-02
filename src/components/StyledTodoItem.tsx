import React from "react";
import styled from "styled-components";
import StyledInputTask from "./StyledInputTask";

interface style {
  isCompleted?: boolean;
  color?: string;
  type?: string;
  disabled?: boolean;
  defaultValue?: string;
  onChange?: any;
}

const StyledTask = styled(StyledInputTask)<style>`
  margin: 0;
  background-color: ${(props) => (props.isCompleted ? "green" : props.color)};
  color: black;
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
  opacity: ${({ isCompleted }) => (isCompleted ? "0.5" : "none")};
`;

const StyledTodoItem = (props: style) => {
  return <StyledTask {...props} />;
};

export default StyledTodoItem;
