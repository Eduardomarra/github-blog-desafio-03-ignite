import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 296px;
  background: linear-gradient(
    ${({ theme }) => theme.colors['base-profile']},
    #0d253d
  );
  position: relative;
  z-index: -1;

  .left {
    position: absolute;
    left: 0;
  }

  .right {
    position: absolute;
    right: 0;
  }
  > img {
    margin-top: -4rem;
  }
`
