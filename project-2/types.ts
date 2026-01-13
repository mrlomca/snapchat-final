export type ChatStatusType = 
  | 'new_snap_purple' 
  | 'new_snap_red'
  | 'new_chat_blue'
  | 'opened_chat_gray'
  | 'screen_recording_blue'
  | 'screen_recording_purple'
  | 'tap_to_chat'
  | 'sent_gray'
  | 'none';

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  isBitmoji?: boolean;
}

export interface ChatSession {
  id: string;
  user: User;
  lastMessage?: string;
  status: ChatStatusType;
  timestamp: string;
  streak?: string;
  hasStory?: boolean;
  actionType: 'camera' | 'chat' | 'snap_button';
}