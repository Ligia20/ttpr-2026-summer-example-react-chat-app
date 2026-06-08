import {useState} from 'react';


const Message = ({ text }) => {
    return <>
        <p>
            {text}
        </p>
    </>;
}


const [messages, setMessages] = useState([]);
const App = () => {
    //
    // business logic
    //

    /*
    const messages = [ 
        "hi",
        "how are you?",
        "lol?",
    ];
    */
   const [messages, setMessages] = useState([]);

    return <>
    <h1>
        Chatroom
    </h1>
    // <img src="" />
    {
        // map messages to <p> elements
        messages.map(
            (text) => <Message text={text}/ >
        )
    }
    <input />
    <button>
        Send
    </button>
    </>
}

export default App;