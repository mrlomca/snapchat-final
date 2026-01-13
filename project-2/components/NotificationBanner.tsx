import React from 'react';
import { X } from 'lucide-react';

export const NotificationBanner: React.FC = () => {
  return (
    <div className="mx-0 px-4 py-2 bg-white">
      <div className="flex items-start justify-between relative">
        <div className="flex items-center">
            {/* Mailbox Graphic Simulation */}
            <div className="mr-3 w-10 h-10 relative">
                <div className="text-3xl">📬</div>
            </div>
            
            <div className="flex flex-col">
                <span className="font-bold text-[15px] text-gray-900 leading-tight">Get notifications for new Snaps?</span>
                <span className="text-[13px] text-gray-500 leading-tight mt-0.5">Tap to enable notifications</span>
            </div>
        </div>
        
        <button className="text-gray-400 p-1">
            <X size={16} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};