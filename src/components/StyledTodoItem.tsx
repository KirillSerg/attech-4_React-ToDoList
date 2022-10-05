import styled from "styled-components";

interface style {
  isCompleted?: boolean;
  color?: string;
  type?: string;
  disabled?: boolean;
  defaultValue?: string;
  onChange?: any;
}

const StyledTask = styled.textarea<style>`
  background-color: ${(props) => (props.isCompleted ? "green" : props.color)};
  color: black;
  width: 40vw;
  resize: none;
  border-radius: 15px;
  padding: 0 5px 0 5px;
  font-family: inherit;
  font-size: medium;
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
  opacity: ${({ isCompleted }) => (isCompleted ? "0.8" : "none")};
`;

const StyledTodoItem = (props: style) => {
  return <StyledTask {...props} />;
};

export default StyledTodoItem;
