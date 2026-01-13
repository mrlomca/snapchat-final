import React from 'react';
import { StatusBar } from './components/StatusBar';
import { TopHeader } from './components/TopHeader';
import { QuickActions } from './components/QuickActions';
import { NotificationBanner } from './components/NotificationBanner';
import { ChatList } from './components/ChatList';
import { BottomNavigation } from './components/BottomNavigation';
import { FloatingActionButton } from './components/FloatingActionButton';

const App: React.FC = () => {
  return (
    // Background container - black on desktop to frame the app
    <div className="min-h-screen w-full flex justify-center bg-black">
      
      {/* Mobile Frame Container */}
      <div className="w-full max-w-md h-screen bg-white relative overflow-y-auto no-scrollbar sm:rounded-[30px] sm:my-4 sm:h-[95vh] border-0 sm:border-[8px] sm:border-gray-900 shadow-2xl flex flex-col">
        
        {/* Top Status Bar */}
        <StatusBar />
        
        {/* Main Header */}
        <TopHeader />
        
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto no-scrollbar relative">
          
          {/* Quick Filter Pills */}
          <div className="pt-2 pb-2 sticky top-0 bg-white z-30">
            <QuickActions />
          </div>

          {/* Notification Area */}
          <NotificationBanner />

          {/* Chat List */}
          <ChatList />

        </div>

        {/* Floating Action Button (New Chat) */}
        <FloatingActionButton />

        {/* Bottom Navigation */}
        <BottomNavigation />
        
      </div>
    </div>
  );
};

export default App;