import React, { useState } from 'react';

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

const isSameDay = (d1, d2) => {
  if (!d1 || !d2) return false;
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
};

const isAfter = (d1, d2) => {
  if (!d1 || !d2) return false;
  return d1.getTime() > d2.getTime();
};

const isBefore = (d1, d2) => {
  if (!d1 || !d2) return false;
  return d1.getTime() < d2.getTime();
};

const isBetween = (date, start, end) => {
  if (!date || !start || !end) return false;
  return isAfter(date, start) && isBefore(date, end);
};

const CalendarSection = () => {
  // Use October 2026 as initial view to match the mock data
  const [baseDate, setBaseDate] = useState(new Date(2026, 9, 1)); 
  const [checkIn, setCheckIn] = useState(new Date(2026, 9, 18));
  const [checkOut, setCheckOut] = useState(new Date(2026, 9, 23));
  const [hoverDate, setHoverDate] = useState(null);

  const nextMonth = () => {
    setBaseDate(new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setBaseDate(new Date(baseDate.getFullYear(), baseDate.getMonth() - 1, 1));
  };

  const handleDateClick = (date) => {
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(date);
      setCheckOut(null);
    } else if (checkIn && !checkOut) {
      if (isBefore(date, checkIn)) {
        setCheckIn(date);
      } else {
        setCheckOut(date);
      }
    }
  };

  const handleClear = () => {
    setCheckIn(null);
    setCheckOut(null);
  };

  const renderMonth = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return (
      <div className="flex-1 w-full max-w-[320px]">
        <h3 className="text-[16px] font-semibold text-center mb-6">
          {MONTHS[month]} {year}
        </h3>
        
        <div className="grid grid-cols-7 mb-2">
          {DAYS.map((day, i) => (
            <div key={i} className="text-[12px] text-gray-500 font-medium text-center pb-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-y-1">
          {days.map((date, i) => {
            if (!date) return <div key={i} className="h-12 w-12" />;

            const isStart = isSameDay(date, checkIn);
            const isEnd = isSameDay(date, checkOut);
            const isSelected = isStart || isEnd;
            const inRange = isBetween(date, checkIn, checkOut) || 
                            (checkIn && !checkOut && hoverDate && isBetween(date, checkIn, hoverDate)) ||
                            (checkIn && !checkOut && hoverDate && isBefore(hoverDate, checkIn) && isBetween(date, hoverDate, checkIn));

            // Calculate background rounding for in-range dates connecting to start/end
            let bgClass = '';
            if (inRange) bgClass = 'bg-[#f7f7f7]';
            if (isStart && checkOut) bgClass = 'bg-gradient-to-r from-transparent via-[#f7f7f7] to-[#f7f7f7] from-50%';
            if (isEnd && checkIn) bgClass = 'bg-gradient-to-l from-transparent via-[#f7f7f7] to-[#f7f7f7] from-50%';
            if (isStart && !checkOut && hoverDate && isAfter(hoverDate, checkIn)) bgClass = 'bg-gradient-to-r from-transparent via-[#f7f7f7] to-[#f7f7f7] from-50%';
            if (isStart && !checkOut && hoverDate && isBefore(hoverDate, checkIn)) bgClass = 'bg-gradient-to-l from-transparent via-[#f7f7f7] to-[#f7f7f7] from-50%';

            // Text and circle styling
            let circleClass = 'hover:border hover:border-black rounded-full';
            let textClass = 'text-[#222222] font-medium';
            
            if (isSelected) {
              circleClass = 'bg-[#222222] rounded-full text-white';
              textClass = 'text-white font-medium';
              bgClass = checkOut ? bgClass : ''; // Only apply range gradient if end date is selected or hovering
            }

            return (
              <div 
                key={i} 
                className={`relative h-12 w-12 flex items-center justify-center cursor-pointer ${bgClass}`}
                onClick={() => handleDateClick(date)}
                onMouseEnter={() => setHoverDate(date)}
                onMouseLeave={() => setHoverDate(null)}
              >
                <div className={`absolute h-11 w-11 flex items-center justify-center ${circleClass}`}>
                  <span className={`text-[14px] ${textClass}`}>{date.getDate()}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const nextMonthDate = new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 1);

  // Formatting date subtitle
  const formatDate = (date) => {
    if (!date) return '';
    return `${date.getDate()} ${MONTHS[date.getMonth()].substring(0,3)} ${date.getFullYear()}`;
  };

  let subtitle = 'Select check-in date';
  let title = 'Select dates';
  
  if (checkIn && !checkOut) {
    title = 'Select checkout date';
    subtitle = 'Minimum stay: 1 night';
  } else if (checkIn && checkOut) {
    const diffTime = Math.abs(checkOut - checkIn);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    title = `${diffDays} nights in Candolim`;
    subtitle = `${formatDate(checkIn)} - ${formatDate(checkOut)}`;
  }

  return (
    <div className="py-12 border-b border-gray-200">
      <div>
        <h2 className="text-[22px] font-semibold text-airbnb-dark mb-1">{title}</h2>
        <p className="text-[14px] text-gray-500 mb-6">{subtitle}</p>
      </div>

      <div className="relative">
        <button 
          onClick={prevMonth}
          className="absolute left-2 top-0 z-10 p-2 rounded-full hover:bg-gray-100 transition"
        >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current block" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 3, overflow: 'visible' }}>
            <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
          </svg>
        </button>

        <button 
          onClick={nextMonth}
          className="absolute right-2 top-0 z-10 p-2 rounded-full hover:bg-gray-100 transition"
        >
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current block" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 3, overflow: 'visible' }}>
            <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
          </svg>
        </button>

        <div className="flex flex-col md:flex-row justify-between gap-8 pt-4">
          {renderMonth(baseDate.getFullYear(), baseDate.getMonth())}
          {renderMonth(nextMonthDate.getFullYear(), nextMonthDate.getMonth())}
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '24px', width: '24px', stroke: 'currentColor', strokeWidth: 2, overflow: 'visible' }}>
            <path d="M29 20H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zM9 20v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6M13 14v-2M9 14v-2M5 14v-2M13 10V8M9 10V8M5 10V8M21 14v-2M17 14v-2M27 10V8M23 10V8M17 10V8M27 14v-2M23 14v-2M19 18h8M5 18h8"></path>
          </svg>
        </button>
        <button 
          onClick={handleClear}
          className="text-[14px] font-semibold text-[#222222] underline hover:text-black transition"
        >
          Clear dates
        </button>
      </div>
    </div>
  );
};

export default CalendarSection;
