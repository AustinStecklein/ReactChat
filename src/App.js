import styled from 'styled-components'
import SideBar from './Components/SideBar'
import ChatList from './Components/ChatList'
import ChatView from './Components/ChatView'

function App(){
  return(
    <Wrapper>
      <SideBar />
      <ChatList />
      <Main>
        <ChatView />
      </Main>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div `
  background-color:#282a37;
  min-height:100vh;
  max-height:100vh;
  min-width:100vw;
  max-width:100vw;  
  display:flex;
`

const Main = styled.div`
  flex:1;
  display:flex;
  justify-content:center;
`