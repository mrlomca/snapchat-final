import React from 'react';
import { Users, MessageSquare, ThumbsDown, Smile, UserPlus, Plus } from 'lucide-react';

const ActionPill: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <div className="min-w-[44px] h-[30px] bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mr-2">
    {icon}
  </div>
);

export const QuickActions: React.FC = () => {
  return (
    <div className="flex overflow-x-auto no-scrollbar px-4 py-2 bg-white">
      <ActionPill icon={<Users size={18} fill="currentColor" />} />
      <ActionPill icon={<MessageSquare size={18} fill="currentColor" />} />
      <ActionPill icon={<ThumbsDown size={18} />} />
      <ActionPill icon={<Smile size={18} />} />
      <ActionPill icon={<UserPlus size={18} />} />
      <ActionPill icon={<Plus size={18} />} />
    </div>
  );
};