import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  max-width: 54rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  border: 0;
  border-radius: 10px;
  padding: 2rem;
  margin-top: -6rem;

  img {
    width: 9rem;
    height: 9rem;
    border-radius: 8px;
  }

  p {
    width: 100%;
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.textSizes.medium};
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    margin-top: 1rem;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: ${({ theme }) => theme.textSizes.xxlarge};
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.textSizes.small};
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
    cursor: pointer;
  }
`
export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  margin-top: 2rem;

  div {
    display: flex;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: ${({ theme }) => theme.textSizes.medium};
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    svg {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`
