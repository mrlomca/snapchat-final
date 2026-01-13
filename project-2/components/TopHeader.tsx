import React from 'react';
import { Search, UserPlus, MoreHorizontal } from 'lucide-react';

export const TopHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white sticky top-0 z-40 border-b border-transparent">
      <div className="flex items-center space-x-3">
        {/* User Avatar */}
        <div className="relative w-10 h-10">
           <img 
            src="https://img.freepik.com/premium-photo/cartoon-avatar-blonde-girl-with-blue-eyes_1057389-8438.jpg" 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover border border-gray-100"
          />
        </div>
        
        {/* Search Icon */}
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
          <Search size={22} strokeWidth={2.5} />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-[20px] font-bold text-gray-800 tracking-tight">Chat</h1>

      <div className="flex items-center space-x-2">
        {/* Add Friend */}
        <div className="relative w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
          <UserPlus size={22} className="ml-0.5" strokeWidth={2.5} fill="#f3f4f6" />
          {/* Notification Badge */}
          <div className="absolute top-0 right-0 bg-[#FFFC00] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white transform translate-x-1 -translate-y-1">
            15
          </div>
        </div>

        {/* More Options */}
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
          <MoreHorizontal size={22} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};