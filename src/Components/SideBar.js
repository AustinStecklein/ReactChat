import sytled from 'styled-components'

const SideBar = ()=>{
  return 
  <Wrapper>
  <LogoContainer></LogoContainer>
  <SidebarIcons>
    <i class="fas fa-inbox"></i>
  </SidebarIcons>
  
  <SidebarIcons>
    <i class="fas fa-inbox"></i>
  </SidebarIcons>
  
  <SidebarIcons>
    <i class="fas fa-inbox"></i>
  </SidebarIcons>
  
  <SidebarIcons>
    <i class="fas fa-inbox"></i>
  </SidebarIcons>
  <ProfileIcon></ProfileIcon>
  </Wrapper>
}

export default SideBar

const wrapper = Styled.div`
  height:calc(100vh-100px);
  padding:50px;
  width:100px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`

const LogoContainer = styled.div`

`
const SidebarIcons = styled.div`

`

const ProfileIcon = styled.div`
`