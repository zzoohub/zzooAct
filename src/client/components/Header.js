import { styled } from '../zzooAct/styled.js'

const HeaderTag = styled('header')`
  width: 100%;
  height: 50px;
  background-color: #333;
  color: white;
  font-size: 22px;
`

const Header = () => {
  return `
      ${HeaderTag('헤더')}      
    `
}

export default Header
