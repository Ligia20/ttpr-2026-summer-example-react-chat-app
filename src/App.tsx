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
                //
                (text, index) => <Message key={index} text={text} index={index} />
                )
        }
        <form onSubmit={(event) => {
            event.preventDefault();
            const new_message = event.target.incoming_text.value;
            
            setMessages([...messages, new_message]);
            //note: this is not best practice in react but it works for now
           
            document.getElementById('incoming_text').value = '';
    }}>
    <input name='incoming_text' id='incoming_text' />
    <button type='submit' className='send_button'>
        Send
    </button>
    </form>
    {/*Working on this to create a send button for each user, but it is not working yet.
         <form onSubmit={(event) => {
            event.preventDefault();
            const new_message = event.target.incoming_text2.value;
            
            setMessages([...messages, new_message]);
            //note: this is not best practice in react but it works for now
           
            document.getElementById('incoming_text2').value = '';
    }}>
    <input name='incoming_text2' id='incoming_text2' />
    <button type='submit' className='send_button2'>
        Send
    </button>
    </form>
    */}
    
</>;
}

export default App;