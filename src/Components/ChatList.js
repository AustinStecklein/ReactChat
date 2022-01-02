import styled from 'styled-components'
import Logo from '../assets/Logo.png'

const conversationData = [
{
    name: 'chat',
    avatar: Logo,
    lastMessage: 'Hello'
},
{
    name: 'chat',
    avatar: Logo,
    lastMessage: 'Hello'
}

]

const ChatList = () => {
    return <Wrapper>
        <Title>Chats</Title>
        <Subtitle>Latest Converstaions</Subtitle>
        <Conversations>
            {conversationData.map((conversation, index) =>(
                <ConversationCard key={index}>
                    <Avatar>
                        <img src={conversation.avatar} alt={conversation.name} />
                    </Avatar>
                    <ConverstationInfo>
                        <Name>{conversation.name}</Name>
                        <LastMessage>{conversation.lastMessage}</LastMessage>
                    </ConverstationInfo>
                </ConversationCard>
            ))}

        </Conversations>
    </Wrapper>
}

export default ChatList

const Wrapper = styled.div `
width:300px;
height:calc(100vh-100px);
padding: 50px 32px
`

const Title = styled.div `
font-size:48px;
fotn-weight:700;
margin-bottom:60px`

const Subtitle = styled.div `
    color: #767789;
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Conversations = styled.div `

`
const ConversationCard = styled.div `
    display: flex;
    margin: 12px -12px;    
    padding: 12px;
    border-radius: 12px;

    &:hover {
        background-color: #184773 !important;
        cursor: pointer;
    }

`
const Avatar = styled.div `
    width: 60px;
    margin-right: 12px;
    display: grid;
    place-items: center;
    & >img {
        width: 80%;
        object-fit: contain;
    }
`
const ConverstationInfo = styled.div ``
const Name = styled.div `
    font-size: 24px;
    font-weight: 700;
`
const LastMessage = styled.div `
    font-weight: 500
`

