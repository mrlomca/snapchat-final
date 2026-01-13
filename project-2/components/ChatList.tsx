import React from 'react';
import { MOCK_CHATS } from '../data';
import { ChatItem } from './ChatItem';

export const ChatList: React.FC = () => {
  return (
    <div className="flex flex-col pb-24 bg-white">
      {MOCK_CHATS.map((chat) => (
        <ChatItem key={chat.id} data={chat} />
      ))}
    </div>
  );
};