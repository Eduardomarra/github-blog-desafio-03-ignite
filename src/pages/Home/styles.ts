import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const IssuesContent = styled.div`
  width: 100%;
  max-width: 54rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  margin-top: 2.5rem;
  margin-bottom: 10rem;
`
