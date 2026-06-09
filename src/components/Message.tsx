import {faker} from "@faker-js/faker";
    faker.seed(5);
    const name1 = faker.person.fullName();
    const name2 = faker.person.fullName();
    const chatters = [name1, name2];

const Message = ({text}: {text:string} , {index}: {index:number}) => {
    const currentSender = chatters[index % 2];
    return <>
        <p className='message'>
            <p className='message-text'>{text}</p> - <strong className='sender'> {currentSender} </strong>
        </p>
        </>;
}

export default Message;