import React from 'react';
import styled from "styled-components";


interface MessageProps{
  message?:any
}

const MessageComponent: React.FC<MessageProps> = ({message}) => {
  return (
    <Container>
      <TextMessage>{message}</TextMessage>
    </Container>
  );
}

function Message(message:any){
  return <MessageComponent message={message}/>
}

export default Message;

const Container = styled.div`
  border: 2px solid white;
  background-color: #3c7380;
  width: 60%;
  height: 30px;
  margin: 7px;
  max-width:600px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  z-index:99;
`;

const TextMessage = styled.p`
  color: white;
  font-family: "DesisrasNonCommercial";
  font-size: 16px;
`;