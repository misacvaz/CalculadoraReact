import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e0f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
`;


export const Content = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width: 400px; 
  min-height: 250px;
  padding: 20px; 
  border-radius: 12px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  /* Responsividade */
  @media (max-width: 768px) {
    width: 90%;
    min-height: 300px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    min-height: 200px;
  }
`;


export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%; 
  margin-bottom: 15px; 
  
  /* Responsividade */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;


export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%; 
  margin-top: 15px; 

  /* Responsividade */
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;
