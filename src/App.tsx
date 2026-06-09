import {useState} from 'react';
import Message from './components/Message';
import './App.css';


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
        <h1 className='chat_title'>
            Chatroom
        </h1>

        {
        // map messages to <p> elements
        
            messages.map(
                // @ts-expect-error
                (text, index) => <Message key={index} text={text} index={index} />
                )
        }
        <form onSubmit={(event) => {
            event.preventDefault();
            const new_message = event.target.incoming_text.value;
            // @ts-expect-error
            setMessages([...messages, new_message]);
            //note: this is not best practice in react but it works for now
            //@ts-expect-error
            document.getElementById('incoming_text').value = '';
    }}>
    <input name='incoming_text' id='incoming_text' />
    <button type='submit' className='send_button'>
        Send
        
    </button>
    </form>
</>;
}

export default App;