import styled from 'styled-components';

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardSet = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  margin: 0 auto;
  width: 196px;
  height: 50px;
  background-color: var(--light-text-cl);
  box-shadow: var(--horizontal-line-box-shadow);
  border-radius: 11px;
  border-color: transparent;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: var(--black-text-cl);
  cursor: pointer;
  transition: color var(--transition), background-color var(--transition),
    border-color var(--transition);

  &:hover {
    background-color: var(--blue-cl);
    color: var(--light-text-cl);
    border-color: var(--light-text-cl);
    box-shadow: 0px 0px 0px 3px rgba(235, 216, 255, 0.5);
  }
`;
