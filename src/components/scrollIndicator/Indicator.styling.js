import styled from 'styled-components';

export const ProgressMainWrapper = styled.div`
    position: fixed;
  display: flex;
  background-color: #fff;
  height: 14rem;
  width: 0.1rem;
  margin: 36vh 0 0 95%;
  z-index: 2;
`;

export const ProgressMainStyle = styled.div`
   position: absolute;
  right: -0.15rem;
  height: 0.1rem;
  width: 0.3rem;
  background: #fff;
`;

export const ProgressCounter = styled.h2`
    margin-left: 0.7rem;
  margin-top: 0.5rem;
  color: #fff;
  font-size: 1rem;
`;