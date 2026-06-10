import {faker} from "@faker-js/faker";
    faker.seed(5);
    const name1 = faker.person.fullName();
    const name2 = faker.person.fullName();
    const chatters = [name1, name2];
   /* const currentSender = chatters[senderIndex];
    const alignment = senderIndex === 0 ? 'left' : 'right'; */

    const Message = ({text, index}: {text: string, index: number}) => {
    const currentSender = chatters[index % 2];
    return <>
        <p className='message'>
            <strong className='message_text'>{text} </strong> 
            <p className='sender'> {currentSender} </p>
        </p>
        </>;
}
    
/*  Working on this to create a send button for each user, but it is not working yet. 
    const Message = ({text, senderIndex}: {text: string, senderIndex: number}) => {
    return <>
        
        <p className='message'>
            <strong className='message_text'>{text} </strong> 
            <p className='sender'> {currentSender} </p>
        </p>
        </>;
    }
*/
export default Message;