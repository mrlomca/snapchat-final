import React from 'react';
import { MessageSquarePlus } from 'lucide-react';

export const FloatingActionButton: React.FC = () => {
  return (
    <div className="fixed bottom-24 right-5 z-40 shadow-lg shadow-blue-400/40 rounded-full">
      <button className="w-14 h-14 bg-[#3AAEF8] rounded-full flex items-center justify-center text-white transition-transform active:scale-95">
        <MessageSquarePlus size={26} strokeWidth={2} />
      </button>
    </div>
  );
};