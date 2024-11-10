import styled from 'styled-components';

export const InputContainer = styled.input`
  width: 100%;
  height: 75px;
  background-color: #f0f8ff; 
  border: 2px solid #007bff; 
  border-radius: 10px; 
  padding: 0 15px; 
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  color: #333;
  text-align: right;
  
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  transition: all 0.3s ease; 
  
  &:focus {
    border-color: #0056b3; 
    outline: none;
    box-shadow: 0 4px 15px rgba(0, 91, 255, 0.2); 
  }

  &::placeholder {
    color: #888; 
    font-size: 18px;
  }

 
  &:not(:placeholder-shown) {
    background-color: #e6f7ff; 
  }
`;
