import React from 'react';
import { MapPin, MessageSquare, Camera, Users, Play } from 'lucide-react';

export const BottomNavigation: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white/95 backdrop-blur-sm border-t border-gray-100 pb-6 pt-3 px-6 flex justify-between items-center z-50 text-gray-500 rounded-b-[30px] sm:rounded-none">
      <button className="flex flex-col items-center justify-center w-10">
        <MapPin size={26} strokeWidth={2} className="text-gray-500" />
      </button>
      
      <button className="flex flex-col items-center justify-center w-10 relative">
        <MessageSquare size={26} strokeWidth={0} fill="#3b82f6" className="text-blue-500" />
        {/* Active Dot */}
        <div className="absolute -bottom-2 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
      </button>
      
      <button className="flex flex-col items-center justify-center w-14">
        {/* Camera Icon needs to be bold and prominent */}
        <div className="w-16 h-10 flex items-center justify-center relative -top-1">
             <Camera size={30} strokeWidth={2} className="text-gray-800" />
        </div>
      </button>
      
      <button className="flex flex-col items-center justify-center w-10">
        <Users size={26} strokeWidth={2} className="text-gray-500" />
      </button>
      
      <button className="flex flex-col items-center justify-center w-10">
         {/* Using Play triangle rotated specifically */}
        <Play size={26} strokeWidth={2} className="text-gray-500 transform rotate-0" />
      </button>
    </div>
  );
};