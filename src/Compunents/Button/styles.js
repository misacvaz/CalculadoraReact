import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 15px;
  border: 2px solid #00AFAA; 
  background-color: #00AFAA;
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  border-radius: 8px; 
  cursor: pointer; 
  transition: all 0.3s ease; 
  

  min-width: 60px;
  max-width: 100%; 
  

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 175, 170, 0.5); 
  }


  &:hover {
    background-color: #009F94; 
    border-color: #009F94; 
    opacity: 0.8; 
  }


  &:active {
    background-color: #007C6C; 
    border-color: #007C6C;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
  }

 
  span {
    font-size: 20px;
    font-weight: 600;
  }
`;
