/*import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props)=>{
    //const chatProps = useMultiChatLogic('a6aec773-32c4-4518-95e2-53948be607d6',props.user.username, props.user.secret)
    return( <div style={{height:'100vh'}}>
    <PrettyChatWindow
    projectId='a6aec773-32c4-4518-95e2-53948be607d6'
    username={props.user.username}
    secret={props.user.secret}
    style={{height:'100%'}}
    />
    </div>
    )
}

export default ChatsPage*/



import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'


const ChatsPage = (props)=>{
    const chatProps = useMultiChatLogic('a6aec773-32c4-4518-95e2-53948be607d6',props.user.username, props.user.secret)
    return( <div style={{height:'100vh'}}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} style={{height: '100vh'}}/>
    </div>
    )
}

export default ChatsPage