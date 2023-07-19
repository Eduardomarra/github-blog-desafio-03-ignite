import logo from '../../assets/logo.svg'
import effectLeft from '../../assets/effectLeft.svg'
import effectRight from '../../assets/effectRight.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="left">
        <img src={effectLeft} alt="" />
      </div>
      <img src={logo} alt="" />
      <div className="right">
        <img src={effectRight} alt="" />
      </div>
    </HeaderContainer>
  )
}
