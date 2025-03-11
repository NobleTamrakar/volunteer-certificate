import React, { useState } from 'react';
import { Download, Award, Trophy, Medal } from 'lucide-react';

function App() {
  const [volunteerName, setVolunteerName] = useState('John Doe');
  const [eventName] = useState('Flood Relief Camp 2025');
  const [date] = useState('March 15, 2025');
  const [certificateId] = useState('HELI-2025-001');

  const leaderboard = [
    { name: 'Sarah Johnson', hours: 120, rank: 1 },
    { name: 'Michael Chen', hours: 115, rank: 2 },
    { name: 'Emma Davis', hours: 110, rank: 3 },
    { name: 'James Wilson', hours: 105, rank: 4 },
    { name: 'Lisa Anderson', hours: 100, rank: 5 },
  ];

  return (
    <div className="min-h-screen bg-[#000F0B] flex">
      {/* Leaderboard Sidebar */}
      <div className="w-80 bg-[#112221] p-6 border-r border-[#094534]">
        <h2 className="text-[#00E8CF] text-2xl font-bold mb-6 flex items-center">
          <Trophy className="mr-2" /> Top Volunteers
        </h2>
        <div className="space-y-4">
          {leaderboard.map((volunteer) => (
            <div
              key={volunteer.name}
              className="bg-[#054938] p-4 rounded-lg border border-[#094534] hover:border-[#00BC4C] transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {volunteer.rank === 1 && <Trophy className="text-yellow-400 mr-2" size={20} />}
                  {volunteer.rank === 2 && <Medal className="text-gray-400 mr-2" size={20} />}
                  {volunteer.rank === 3 && <Award className="text-orange-400 mr-2" size={20} />}
                  <div>
                    <p className="text-[#F0F2F0] font-medium">{volunteer.name}</p>
                    <p className="text-[#3FEBD0] text-sm">{volunteer.hours} hours</p>
                  </div>
                </div>
                <span className="text-[#00E8CF] font-bold">#{volunteer.rank}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
          {/* Certificate Header */}
          <div className="text-center mb-8">
            <img
              src="https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=100&h=100"
              alt="HeliCo-Operator Logo"
              className="mx-auto mb-4 rounded-full"
            />
            <h1 className="text-4xl font-bold text-[#000F0B] mb-2">Certificate of Appreciation</h1>
            <p className="text-[#112221]">HeliCo-Operator Disaster Relief Program</p>
          </div>

          {/* Certificate Body */}
          <div className="text-center mb-8">
            <p className="text-lg text-[#054938] mb-4">This certificate is presented to</p>
            <h2 className="text-3xl font-bold text-[#000F0B] mb-4">{volunteerName}</h2>
            <p className="text-lg text-[#054938] mb-6">
              for their outstanding contribution and dedicated service during the
            </p>
            <h3 className="text-2xl font-bold text-[#112221] mb-4">{eventName}</h3>
            <p className="text-[#054938] mb-8">on {date}</p>
            <p className="text-md text-[#054938] max-w-2xl mx-auto">
              Your selfless dedication and commitment to helping those in need have made a significant
              impact in our community's disaster relief efforts. We deeply appreciate your valuable
              contribution.
            </p>
          </div>

          {/* Certificate Footer */}
          <div className="flex justify-between items-center mt-12 border-t border-[#094534] pt-6">
            <div>
              <p className="text-[#054938] font-bold">Certificate ID: {certificateId}</p>
              <p className="text-sm text-[#054938]">Verify at helico-operator.com/verify</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1592576291200-c6bf4d097578?auto=format&fit=crop&w=150"
                alt="Digital Signature"
                className="mb-2"
              />
              <p className="text-[#054938] font-bold">Sarah Matthews</p>
              <p className="text-sm text-[#054938]">Program Director</p>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center mt-8">
            <button
              className="bg-[#22C55E] hover:bg-[#00BC4C] text-white px-6 py-3 rounded-lg font-bold flex items-center mx-auto transition-colors"
            >
              <Download className="mr-2" /> Download Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;