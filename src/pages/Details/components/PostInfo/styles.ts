import { styled } from 'styled-components'

export const PostInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
`

export const PostInfoContent = styled.div`
  width: 100%;
  max-width: 54rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  margin-top: -6rem;

  h1 {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: ${({ theme }) => theme.textSizes.xxlarge};
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.5rem;
  }
`

export const PostInfoLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.textSizes.small};
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
  }
`

export const PostInfoSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  color: ${({ theme }) => theme.colors['base-span']};

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
