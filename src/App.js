import sytled from 'styled-components'
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

const Wrapper = Styled.div `
  background-color:#282a37;
  min-height:100vh;
  max-height:100vh;
  min-width:100vw;
  max-width:100vw;  
`

const Main = Styled.div`
  flex:1;
  display:flex;
  justify-content:center;
`