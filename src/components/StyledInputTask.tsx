import styled from "styled-components";

type Xxx = {
    //props?: any,
    onKeyPress?: any,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    type?: string,
    placeholder?: string,
    value?: string,
}

const StyledInput = styled.input`
  color: blue;
  background-color: lightgray;
  border: 1px solid red;
  width: 40vw;

  &:focus-visible {
    border: 2px solid pink;
    outline: none;
  }
`;

const StyledInputTask = (props: Xxx) => {
  return <StyledInput {...props} />;
};

export default StyledInputTask;
