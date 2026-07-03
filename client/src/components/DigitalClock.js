import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

const DigitalClock = () => {
  const [time, setTime] = useState({});

  const timeZones = [
    { name: 'New York (EST)', offset: 'America/New_York' },
    { name: 'London (GMT)', offset: 'Europe/London' },
    { name: 'Tokyo (JST)', offset: 'Asia/Tokyo' },
    { name: 'Dubai (GST)', offset: 'Asia/Dubai' },
    { name: 'Sydney (AEDT)', offset: 'Australia/Sydney' },
    { name: 'Los Angeles (PST)', offset: 'America/Los_Angeles' },
  ];

  useEffect(() => {
    const updateClock = () => {
      const newTime = {};

      timeZones.forEach((tz) => {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: tz.offset,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });

        newTime[tz.offset] = formatter.format(new Date());
      });

      setTime(newTime);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      <h1>🕐 Digital World Clock</h1>
      <div className="clock-grid">
        {timeZones.map((tz) => (
          <div key={tz.offset} className="clock-card">
            <div className="timezone-name">{tz.name}</div>
            <div className="digital-time">{time[tz.offset] || '--:--:--'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalClock;
