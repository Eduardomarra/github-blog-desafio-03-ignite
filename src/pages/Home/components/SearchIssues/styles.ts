import { styled } from 'styled-components'

export const SearchIssuesContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 6rem 0 1rem 0;

  form {
    width: 100%;

    input {
      width: 100%;
      color: ${({ theme }) => theme.colors['base-label']};
      background: ${({ theme }) => theme.colors['base-input']};
      border: 1px solid ${({ theme }) => theme.colors['base-border']};
      border-radius: 6px;
      padding: 0.75rem 1rem;

      &::placeholder {
        color: ${({ theme }) => theme.colors['base-label']};
      }
    }
  }
`

export const SearchTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.875rem;

  h3 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: ${({ theme }) => theme.textSizes.large};
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
