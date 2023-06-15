import styled from 'styled-components';

export const CardSet = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  margin: 0 auto;
  width: 196px;
  height: 50px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  border-color: transparent;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;

  &:hover {
    background-color: #4b2a99;
    color: #ebd8ff;
    border-color: #ebd8ff;
    box-shadow: 0px 0px 0px 3px rgba(235, 216, 255, 0.5);
  }
`;
