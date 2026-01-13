import React from 'react';
import { Camera, MessageSquare, X } from 'lucide-react';
import { ChatSession, ChatStatusType } from '../types';

// Custom Icons for Snap Status
const SolidSquare = ({ color }: { color: string }) => (
  <div className={`w-3 h-3 rounded-[2px] ${color} mr-2`} />
);

const OutlineArrow = ({ color }: { color: string }) => (
  <div className={`w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] ${color} transform -rotate-90 mr-2`} />
); 

// Better arrow SVG
const StatusIcon = ({ type }: { type: ChatStatusType }) => {
  switch (type) {
    case 'new_snap_purple':
      return <div className="w-3 h-3 bg-purple-600 rounded-[2px] mr-2 shadow-sm" />;
    case 'new_snap_red':
      return <div className="w-3 h-3 bg-red-500 rounded-[2px] mr-2 shadow-sm" />;
    case 'new_chat_blue':
      return (
         <svg width="14" height="14" viewBox="0 0 24 24" fill="#3b82f6" className="mr-2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
         </svg>
      );
    case 'screen_recording_blue':
       return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-2 rotate-90 fill-none">
             <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
       );
    case 'screen_recording_purple':
       return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-2 rotate-90 fill-none">
             <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
       );
    case 'tap_to_chat':
    case 'sent_gray':
      return (
        <div className="mr-2">
             <MessageSquare size={12} className="text-gray-300" strokeWidth={3} />
        </div>
      );
    case 'none':
        return (
             <div className="mr-2">
                 <MessageSquare size={12} className="text-gray-300" strokeWidth={3} />
            </div>
        );
    default:
      return null;
  }
};

const StatusText = ({ type, timestamp, lastMessage }: { type: ChatStatusType; timestamp?: string; lastMessage?: string }) => {
  let text = '';
  let colorClass = 'text-gray-400';
  let weightClass = 'font-normal';

  switch (type) {
    case 'new_snap_purple':
      text = `New Snap • ${timestamp}`;
      colorClass = 'text-purple-600';
      weightClass = 'font-bold';
      break;
    case 'new_snap_red':
      text = `New Snap • ${timestamp}`;
      colorClass = 'text-red-500';
      weightClass = 'font-bold';
      break;
    case 'new_chat_blue':
      text = `New Chat • ${timestamp}`;
      colorClass = 'text-blue-500';
      weightClass = 'font-bold';
      break;
    case 'screen_recording_blue':
    case 'screen_recording_purple':
      text = `Screen recording • ${timestamp}`;
      colorClass = 'text-gray-500';
      break;
    case 'tap_to_chat':
      text = 'Tap to chat';
      colorClass = 'text-gray-400';
      break;
     case 'none':
        text = lastMessage || 'Tap to chat';
        colorClass = 'text-gray-400';
        break;
    default:
      text = 'Tap to chat';
  }

  return <span className={`text-[13px] ${colorClass} ${weightClass} ml-0.5`}>{text}</span>;
};

// Component for the real-time typing simulation
const TypingSimulator = () => {
  const [display, setDisplay] = React.useState('Typing...');
  
  React.useEffect(() => {
    let isCancelled = false;
    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    
    const runLoop = async () => {
      while (!isCancelled) {
        // Initial State
        setDisplay('Typing...');
        await wait(2000);
        if (isCancelled) break;
        
        // Type "damn u r ugly"
        const text1 = "damn u r ugly";
        let currentText = "";
        for (let i = 0; i < text1.length; i++) {
            currentText += text1[i];
            setDisplay(currentText + "|");
            await wait(100 + Math.random() * 50);
            if (isCancelled) return;
        }
        setDisplay(text1);
        await wait(1000); // thinks a bit
        
        if (isCancelled) break;
        
        // Backspace
        for (let i = text1.length; i >= 0; i--) {
            setDisplay(text1.substring(0, i) + "|");
            await wait(50);
            if (isCancelled) return;
        }
        
        // Type "your so cute 😍"
        const text2 = "your so cute 😍";
        currentText = "";
        for (let i = 0; i < text2.length; i++) {
            currentText += text2[i];
            setDisplay(currentText + "|");
            await wait(100 + Math.random() * 50);
            if (isCancelled) return;
        }
        setDisplay(text2);
        
        await wait(3000); // show final message
      }
    };
    
    runLoop();
    return () => { isCancelled = true; };
  }, []);

  return (
    <div className="flex items-center">
        {/* Simulate the 'typing' icon bubble */}
        <div className="mr-2">
             <MessageSquare size={12} className="text-blue-500 fill-blue-500" strokeWidth={0} />
        </div>
        <span className="text-[13px] text-blue-500 font-medium ml-0.5">
            {display.replace('|', '')}<span className="animate-ping opacity-75 inline-block w-[1px] h-3 bg-blue-500 ml-0.5"></span>
        </span>
    </div>
  );
};

interface ChatItemProps {
  data: ChatSession;
}

export const ChatItem: React.FC<ChatItemProps> = ({ data }) => {
  const isEdvard = data.name === 'Edvard' || data.id === '1'; // Safety check for ID

  return (
    <div className="flex items-center justify-between px-4 py-2.5 active:bg-gray-50 bg-white border-b border-transparent hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex items-center flex-1">
        {/* Avatar */}
        <div className="relative mr-3">
          <img
            src={data.user.avatarUrl}
            alt={data.user.name}
            className={`w-[52px] h-[52px] object-cover rounded-full ${isEdvard ? 'p-0.5 border-2 border-transparent bg-gradient-to-tr from-blue-200 to-purple-200' : ''}`}
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h3 className={`text-[17px] leading-tight mb-0.5 ${isEdvard ? 'font-bold' : 'font-medium'} text-gray-900`}>
            {data.user.name}
          </h3>
          <div className="flex items-center">
            {isEdvard ? (
                <TypingSimulator />
            ) : (
                <>
                    <StatusIcon type={data.status} />
                    <StatusText type={data.status} timestamp={data.timestamp} lastMessage={data.lastMessage} />
                </>
            )}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex items-center pl-2">
        {data.actionType === 'snap_button' ? (
           <button className="bg-gray-100 flex items-center px-3 py-1.5 rounded-full space-x-1">
             <Camera size={16} fill="black" strokeWidth={0} />
             <span className="text-[13px] font-bold text-black">Snap</span>
           </button>
        ) : (
            <div className="text-gray-300 px-2 py-2 border-l border-gray-100/50">
               {data.actionType === 'camera' ? (
                   <Camera size={24} strokeWidth={1.5} className="text-gray-400" />
               ) : data.actionType === 'chat' ? (
                   <MessageSquare size={24} strokeWidth={1.5} className="text-gray-400" />
               ) : (
                   <X size={20} className="text-gray-300" />
               )}
            </div>
        )}
      </div>
    </div>
  );
};