import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
`

export const HomeContent = styled.div`
  width: 100%;
  max-width: 54rem;
  margin-top: 2.5rem;
  margin-bottom: 10rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
