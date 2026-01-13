import React from 'react';
import { Wifi, Signal, Battery } from 'lucide-react';

export const StatusBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-6 pt-3 pb-2 w-full text-black z-50 bg-white">
      <div className="text-[15px] font-semibold tracking-wide w-12 text-center">
        8:38
      </div>
      
      {/* Dynamic Island Simulation */}
      <div className="bg-black rounded-full h-[28px] w-[100px] absolute left-1/2 -translate-x-1/2 top-2 z-50 flex items-center justify-end px-2">
         <div className="w-2 h-2 rounded-full bg-green-500/30 animate-pulse"></div>
      </div>

      <div className="flex items-center space-x-2 w-16 justify-end">
        <Signal size={16} fill="black" className="text-black" />
        <Wifi size={16} className="text-black font-bold" strokeWidth={2.5} />
        <div className="relative">
          <Battery size={20} className="text-black" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-black rounded-[1px]"></div>
        </div>
      </div>
    </div>
  );
};