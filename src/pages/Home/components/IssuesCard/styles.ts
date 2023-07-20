import styled from 'styled-components'

export const IssuesCardContainer = styled.div`
  width: 100%;
  max-width: 26rem;
  height: 16rem;
  background: ${({ theme }) => theme.colors['base-post']};
  padding: 2rem;
  border-radius: 8px;
  cursor: pointer;

  p {
    width: 100%;
    max-height: 6rem;
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    overflow: hidden;
  }
`

export const IssuesTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  h2 {
    max-width: 17rem;
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: ${({ theme }) => theme.textSizes.xlarge};
    font-weight: 700;
    line-height: 160%;
  }

  span {
    color: ${({ theme }) => theme.colors['base-span']};
    font-size: ${({ theme }) => theme.textSizes.xsmall};
    font-weight: 400;
    line-height: 160%;
  }
`
