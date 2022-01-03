import styled from 'styled-components'
import {collection, serverTimestamp, addDoc} from 'firebase/firestore'
import {db} from '../firebase'


const ChatList = ({conversationData, currentConversation, setCurrentConversation }) => {

    const addNewChat = async () => {
        await addDoc(collection(db, 'message'), {
            name: 'new chat',
            avatar: `https://avatars.dicebear.com/api/adventurer/${Math.radom}.svg` ,
            lastMessage: '',
            lastUpdated: serverTimestamp(),
        })
    }
    return <Wrapper>
        <Title>Chats</Title>
        <Subtitle>Latest Converstaions</Subtitle>
        <Conversations>
            {conversationData.map((conversation, index) =>(
                <ConversationCard key={index}
                    style={{
                        backgroundColor: currentConversation.id === conversation.id ?'#1d90f4' : '#282a37'
                    }}
                    onClick={() => setCurrentConversation(conversation)}
                >
                    <Avatar>
                        <img src={conversation.avatar} alt={conversation.name} />
                    </Avatar>
                    <ConverstationInfo>
                        <Name>{conversation.name}</Name>
                        <LastMessage>{conversation.lastMessage}</LastMessage>
                    </ConverstationInfo>
                </ConversationCard>
            ))}
        <AddNewConversation onClick={addNewChat}>
            <Avatar>
                <i className='fas fa-plus'/>
    
            </Avatar>
            <ConverstationInfo>
                <Name>New Chat</Name>
            </ConverstationInfo>
        </AddNewConversation>
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

const AddNewConversation = styled.div `
    display: flex;
    margin: 12px -12px;
    padding: 12px;
    border-radius: 12px;

    & div, i {
        color: #757688;

    }

    &: hover {
        background-color: #184773 !important
        cursor: pointer;

        & div, i {
            color: #eee
        }
    }
`