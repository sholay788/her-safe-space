import React, { useState, useEffect } from 'react';
import { Heart, Coffee, CloudRain, Smile, Music, Gift, ChevronRight, X, Wind, Utensils } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [redeemedCoupons, setRedeemedCoupons] = useState({});

  // Coupon Data
  const coupons = [
    { id: 1, title: "Unconditional Back Rub", desc: "20 minutes. No questions asked.", icon: <Heart className="w-5 h-5 text-rose-500" /> },
    { id: 2, title: "Snack Dash", desc: "I go get exactly what you're craving.", icon: <Utensils className="w-5 h-5 text-orange-500" /> },
    { id: 3, title: "Movie Control", desc: "We watch whatever YOU want.", icon: <Music className="w-5 h-5 text-purple-500" /> },
    { id: 4, title: "Big Warm Hug", desc: "Redeemable immediately.", icon: <Smile className="w-5 h-5 text-yellow-500" /> },
  ];

  // Handle Coupon Redemption
  const toggleCoupon = (id) => {
    setRedeemedCoupons(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Render content based on mood selection
  const renderMoodContent = () => {
    switch (activeSection) {
      case 'pain':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-rose-100 text-center">
              <div className="mb-4 flex justify-center">
                <div className="bg-rose-100 p-3 rounded-full">
                  <Wind className="w-8 h-8 text-rose-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Just Breathe, My Love</h3>
              <p className="text-gray-600 mb-6">Match your breathing to the circle below. I'm right here with you.</p>
              
              {/* Breathing Animation */}
              <div className="relative h-32 w-32 mx-auto mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-rose-200 rounded-full animate-ping opacity-20"></div>
                <div className="h-24 w-24 bg-rose-300 rounded-full flex items-center justify-center animate-pulse text-white font-medium shadow-inner">
                  Breathe
                </div>
              </div>

              <div className="bg-rose-50 p-4 rounded-xl text-left">
                <h4 className="font-semibold text-rose-800 mb-2">My checklist for you:</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-center">✨ Have you drunk water recently?</li>
                  <li className="flex items-center">✨ Do you need the heating pad?</li>
                  <li className="flex items-center">✨ Can I get you a painkiller?</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'sad':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-purple-100">
              <div className="text-center mb-6">
                <CloudRain className="w-10 h-10 text-purple-400 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-800">It's Okay Not To Be Okay</h3>
                <p className="text-gray-600 text-sm">Your emotions are valid. Here are 3 things I love about you:</p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-300">
                  <p className="text-purple-900 font-medium">1. Your Smile</p>
                  <p className="text-purple-700 text-sm">Even on hard days, it lights up my entire world.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-300">
                  <p className="text-purple-900 font-medium">2. Your Strength</p>
                  <p className="text-purple-700 text-sm">You handle so much. I am so proud of you.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-300">
                  <p className="text-purple-900 font-medium">3. Just You</p>
                  <p className="text-purple-700 text-sm">I love you not for what you do, but for who you are.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'craving':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-orange-100 text-center">
              <Utensils className="w-10 h-10 text-orange-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">The Menu</h3>
              <p className="text-gray-600 mb-6">Select what you need and screenshot it to me.</p>
              
              <div className="grid grid-cols-2 gap-3">
                {['Chocolate', 'Ice Cream', 'Salty Snacks', 'Fast Food', 'Tea/Coffee', 'Surprise Me'].map((item) => (
                  <button key={item} className="bg-orange-50 hover:bg-orange-100 text-orange-800 py-3 px-2 rounded-xl text-sm font-medium transition-colors">
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50 font-sans selection:bg-rose-200">
      
      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-rose-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-md mx-auto px-4 py-8 pb-20">
        
        {/* Header */}
        <header className="text-center mb-8">
          <div className="inline-block bg-white/50 backdrop-blur-md px-4 py-1 rounded-full text-xs font-semibold tracking-wider text-rose-500 mb-3 border border-rose-100">
            FOR MY LOVE
          </div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2 tracking-tight">
            I've Got You.
          </h1>
          <p className="text-gray-500 text-lg">
            No matter the mood.<br/>No matter the pain.
          </p>
        </header>

        {/* Mood Selectors */}
        <div className="mb-8">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 ml-2">How are we feeling?</h2>
          <div className="grid grid-cols-3 gap-3">
            <button 
              onClick={() => setActiveSection(activeSection === 'pain' ? null : 'pain')}
              className={`p-4 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 border-2 ${activeSection === 'pain' ? 'bg-rose-500 border-rose-500 text-white shadow-lg scale-105' : 'bg-white border-transparent hover:border-rose-200 text-gray-600 shadow-sm'}`}
            >
              <Heart className={`w-6 h-6 mb-2 ${activeSection === 'pain' ? 'fill-current' : ''}`} />
              <span className="text-xs font-bold">In Pain</span>
            </button>
            
            <button 
              onClick={() => setActiveSection(activeSection === 'sad' ? null : 'sad')}
              className={`p-4 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 border-2 ${activeSection === 'sad' ? 'bg-purple-500 border-purple-500 text-white shadow-lg scale-105' : 'bg-white border-transparent hover:border-purple-200 text-gray-600 shadow-sm'}`}
            >
              <CloudRain className="w-6 h-6 mb-2" />
              <span className="text-xs font-bold">Emotional</span>
            </button>

            <button 
              onClick={() => setActiveSection(activeSection === 'craving' ? null : 'craving')}
              className={`p-4 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 border-2 ${activeSection === 'craving' ? 'bg-orange-500 border-orange-500 text-white shadow-lg scale-105' : 'bg-white border-transparent hover:border-orange-200 text-gray-600 shadow-sm'}`}
            >
              <Coffee className="w-6 h-6 mb-2" />
              <span className="text-xs font-bold">Cravings</span>
            </button>
          </div>
        </div>

        {/* Dynamic Mood Content */}
        <div className="mb-10 min-h-[100px]">
          {renderMoodContent()}
          {!activeSection && (
            <div className="bg-white/40 border border-white p-6 rounded-3xl text-center text-gray-400 italic">
              Tap a button above to let me know what you need...
            </div>
          )}
        </div>

        {/* Care Coupons */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4 px-2">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Love Coupons</h2>
            <Gift className="w-4 h-4 text-gray-400" />
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {coupons.map((coupon) => (
              <button
                key={coupon.id}
                onClick={() => toggleCoupon(coupon.id)}
                className={`relative overflow-hidden p-4 rounded-2xl text-left transition-all duration-300 border-2 group ${redeemedCoupons[coupon.id] ? 'bg-gray-100 border-dashed border-gray-300 opacity-60' : 'bg-white border-white shadow-sm hover:shadow-md hover:border-rose-100'}`}
              >
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex gap-4">
                    <div className={`p-3 rounded-xl ${redeemedCoupons[coupon.id] ? 'bg-gray-200' : 'bg-rose-50'}`}>
                      {coupon.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold ${redeemedCoupons[coupon.id] ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                        {coupon.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">{coupon.desc}</p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${redeemedCoupons[coupon.id] ? 'border-gray-400 bg-gray-400' : 'border-rose-200'}`}>
                    {redeemedCoupons[coupon.id] && <X className="w-3 h-3 text-white" />}
                  </div>
                </div>
                {redeemedCoupons[coupon.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50 backdrop-blur-[1px] z-20">
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-500 border border-gray-200 shadow-sm transform -rotate-6">REDEEMED</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* The Open Letter */}
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-rose-100/50 border border-rose-50">
          <h2 className="font-serif text-2xl text-gray-800 mb-4">No Matter What.</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
            <p>
              I know these days can be heavy. I know you might feel tired, sore, or just not like yourself.
            </p>
            <p>
              But I want you to know something important: 
              <span className="bg-rose-100 px-1 mx-1 rounded text-rose-800 font-medium">You don't have to carry it alone.</span>
            </p>
            <p>
              My promise to you isn't just for the sunny days when everything is easy. It's for the rainy days, the painful days, and the days you just want to curl up in a ball.
            </p>
            <p className="font-medium text-gray-800 pt-2">
              I love you. Period. (Pun intended 😉)
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-mono">EST. FOREVER</span>
            <Heart className="w-5 h-5 text-rose-500 fill-current animate-pulse" />
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-400 text-xs pb-4">
          <p>Made with ❤️ just for you</p>
        </footer>

      </div>
    </div>
  );
}