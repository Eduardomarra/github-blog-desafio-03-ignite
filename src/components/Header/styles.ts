import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 296px;
  background: ${({ theme }) => theme.colors['base-profile']};
  position: relative;

  .left {
    position: absolute;
    left: 0;
  }

  .right {
    position: absolute;
    right: 0;
  }
  > img {
    margin-top: -6rem;
  }
`
