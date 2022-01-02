import styled from 'styled-components'
import Logo from '../assets/Logo.png'

const SideBar = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <img src={Logo} alt='cp logo' />
      </LogoContainer>
      <SidebarIcons>
        <SidebarIcon>
          <i className="fas fa-inbox"></i>
        </SidebarIcon>

        <SidebarIcon>
          <i className="fas fa-cog"></i>
        </SidebarIcon>

        <SidebarIcon>
          <i className="fas fa-user-circle"></i>
        </SidebarIcon>

        <SidebarIcon>
          <i className="fas fa-bolt"></i>
        </SidebarIcon>
      </SidebarIcons>
      <ProfileIcon>
        <img src={Logo} alt='cp logo' />
      </ProfileIcon>
    </Wrapper>
  )
}

export default SideBar

const Wrapper = styled.div`
        height:calc(100vh-100px);
        padding:50px 0;
        width:100px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
`

const LogoContainer = styled.div`
        height:70px;
    
        object-fit:contain;
  & >img{
          height:100%
  }`

const SidebarIcons = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`

const SidebarIcon = styled.div`
  & > i {
        color: #767789;
        font-size: 28px;
        padding: 28px;
        border-radius: 50%;
        &:hover {
          color: #184773;
          cursor: pointer;  
    }
  }
`

const ProfileIcon = styled.div`
        height: 70px;
        object-fit: contain;
        display: flex;
        & > img {
          height: 80%;
          border-radius: 50%;
          object-fit: contain;
        }
        &:hover {
          -webkit-box-shadow: 0px 5px 24px -3px #000;
          box-shadow: 0px 5px 24px -3px #000;
        }
        &:hover {
          cursor: pointer;
          transform: scale(1.01);
        }
`