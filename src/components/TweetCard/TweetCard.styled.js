import styled from 'styled-components';

export const CardWrapper = styled.li`
  position: relative;
  max-width: 380px;
  max-height: 460px;
  padding: 28px 36px 36px;
  background: var(--gradient);
  box-shadow: var(--box-shadow);
  border-radius: 20px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const HorizontalLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 8px;
  background-color: var(--light-text-cl);
  box-shadow: var(--horizontal-line-box-shadow);
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 88px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;
  color: var(--light-text-cl);
`;

export const Button = styled.button`
  margin-top: 26px;
  width: 196px;
  height: 50px;
  background-color: ${({ isFollowing }) =>
    isFollowing ? '#5CD3A8' : '#ebd8ff'};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
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
    background-color: ${({ isFollowing }) =>
      isFollowing ? '#2C6274' : '#4b2a99'};
    color: var(--light-text-cl);
    border-color: var(--light-text-cl);
  }
`;
