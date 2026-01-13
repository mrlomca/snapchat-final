import { ChatSession } from './types';

export const MOCK_CHATS: ChatSession[] = [
  {
    id: '1',
    user: { 
      id: 'u1', 
      name: 'Edvard', 
      avatarUrl: 'https://img.freepik.com/premium-photo/3d-rendering-cartoon-character-boy-hoodie_1165683-14300.jpg', 
      isBitmoji: true 
    },
    status: 'none', // Handled by custom component
    timestamp: 'now',
    actionType: 'camera'
  },
  {
    id: '2',
    user: { 
      id: 'u2', 
      name: 'Ann Tiana', 
      avatarUrl: 'https://picsum.photos/100/100?random=2',
      isBitmoji: true
    },
    status: 'new_snap_purple',
    timestamp: '4w',
    actionType: 'chat'
  },
  {
    id: '3',
    user: { 
      id: 'u3', 
      name: 'Yasmin Chiquita', 
      avatarUrl: 'https://picsum.photos/100/100?random=3',
      isBitmoji: true 
    },
    status: 'screen_recording_purple',
    timestamp: '12m',
    actionType: 'camera'
  },
  {
    id: '4',
    user: { 
      id: 'u4', 
      name: '🛍️💅🫶Vivian💅🫶🛍️', 
      avatarUrl: 'https://picsum.photos/100/100?random=4',
      isBitmoji: true
    },
    status: 'new_chat_blue',
    timestamp: '1d',
    actionType: 'camera' // Actually shows X in screenshot, simulating variable actions
  },
  {
    id: '5',
    user: { 
      id: 'u5', 
      name: 'G59', 
      avatarUrl: 'https://picsum.photos/100/100?random=5',
      isBitmoji: false
    },
    lastMessage: 'Say Hi!',
    status: 'none',
    timestamp: '',
    actionType: 'snap_button'
  },
  {
    id: '6',
    user: { 
      id: 'u6', 
      name: 'Mr_vinay07', 
      avatarUrl: 'https://picsum.photos/100/100?random=6',
      isBitmoji: true
    },
    status: 'new_snap_red',
    timestamp: '2w',
    actionType: 'chat'
  },
  {
    id: '7',
    user: { 
      id: 'u7', 
      name: 'Jolynn Green', 
      avatarUrl: 'https://picsum.photos/100/100?random=7',
      isBitmoji: true
    },
    status: 'tap_to_chat',
    timestamp: '',
    actionType: 'camera'
  },
  {
    id: '8',
    user: { 
      id: 'u8', 
      name: 'Karie Debrah', 
      avatarUrl: 'https://picsum.photos/100/100?random=8',
      isBitmoji: true
    },
    status: 'tap_to_chat',
    timestamp: '',
    actionType: 'camera'
  }
];