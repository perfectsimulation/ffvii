import styled from 'styled-components';

export const Card = styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  align-self: center;
  max-width: 48rem;
  width: 90%;
  box-shadow: 0 0 1px 2px #070766;
  background: white;
`;

export const CardTitle = styled.p`
  padding-bottom: 1rem;
  text-align: left;
  font-size: 1.1rem;
`;

export const PageContainer = styled.div`
  font-family: "Lucida Console", Monaco, monospace;
  padding: 4rem 0 1rem 0;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ghostwhite;
`;