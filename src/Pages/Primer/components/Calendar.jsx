import React, { useState } from 'react'


const CalendarLabels = ({selectedMonth}) => {

  if (selectedMonth === "march"){
    return (
      <>
        {/* Bar spanning from day 05 to 08 (positions 0-3 in grid, first row) */}
        <div 
          className="absolute bg-retro-lightblue font-helvetica text-bold italic text-center px-2 rounded-full text-white z-2 text-[8px] sm:text-[10px] md:text-[12px]"
          style={{
            top: '40.5%',
            right: "2%",
            width: '54%', // Spans 4 cells out of 5 columns
            transform: 'translateY(-50%)'
          }}
        >Yuchengco Cave</div>

        {/* Bar spanning from day 10 to 14 (positions 0-3 in grid, first row) */}

        <div 
          className="absolute bg-retro-lightblue font-helvetica text-bold italic text-center px-2 rounded-full text-white z-2 text-[8px] sm:text-[10px] md:text-[12px]"
          style={{
            top: '57.5%',
            right: '2%',
            width: '82%', // Spans 4 cells out of 5 columns
            transform: 'translateY(-50%)'
          }}
        >Yuchengco Cave</div>

      <div 
          className="absolute bg-retro-purple font-helvetica text-bold italic text-center px-2 rounded-full text-white z-2 text-[8px] sm:text-[10px] md:text-[12px]"
          style={{
            top: '74%',
            right: '2%',
            width: '82%', // Spans 4 cells out of 5 columns
            transform: 'translateY(-50%)'
          }}
        >6F Henry Sy Sr. Hall</div>
        
        {/* Text spanning from day 11 to 13 (positions 6-8, second row) */}
        <div 
          className="absolute text-white text-center z-10 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] leading-tight"
          style={{
            top: '28%',
            left: '21%',
            width: '58%', // Spans 3 cells (11-13)
            transform: 'translateY(-50%)',
            color: '#FFFFFF',
            WebkitTextStrokeColor: '#000',
            WebkitTextStrokeWidth: '2px',
            paintOrder: 'stroke fill'
          }}
        >
          <div>Weekdays from 10AM to 5PM</div>
          <div>Saturdays from 10AM to 12PM</div>
        </div>


    </>    
  )
  }else if (selectedMonth === "april"){
    return(
      <>
      {/* Bar spanning from day 05 to 08 (positions 0-3 in grid, first row) */}
      <div 
        className="absolute bg-retro-lightblue font-helvetica text-bold italic text-center px-2 rounded-full text-white z-2 text-[8px] sm:text-[10px] md:text-[12px]"
        style={{
          top: '40.5%',
          right: "2%",
          width: '54%', // Spans 4 cells out of 5 columns
          transform: 'translateY(-50%)'
        }}
      >Rm. 502, 5F Br. Connon Hall</div>
      {/* Bar spanning from day 05 to 08 (positions 0-3 in grid, first row) */}
      <div 
        className="absolute bg-retro-lightblue font-helvetica text-bold italic text-center px-2 rounded-full text-retro-lightblue z-2 text-[8px] sm:text-[10px] md:text-[12px]"
        style={{
          top: '59%',
          left: "15%",
          width: '13%', // Spans 4 cells out of 5 columns
          transform: 'translateY(-50%)'
        }}
      >.</div>
      </>
    )
  }
}

export default function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState('march');

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthConfig = {
    march: {
      label: 'March 2026',
      daysInMonth: 31,
      startsOn: 0,
    },
    april: {
      label: 'April 2026',
      daysInMonth: 30,
      startsOn: 3,
    },
  };

  const activeMonth = monthConfig[selectedMonth];

  const monthDayData = {
    march: {
      //event -> text on calendar cell 
      events: {
        '11': 'Start of registration!',
        '28': 'See you in the locations indicated!',
      },
      //higlight -> icon on date number
      highlights: {
        '11': 'fill-retro-orange',
        '28': 'fill-retro-green',
      },
    },
    april: {
      events: {},
      highlights: {
        '08': 'fill-retro-orange',
        '13': 'fill-retro-green',
      },
    },
  };

  const activeDayData = monthDayData[selectedMonth] || { events: {}, highlights: {} };

  // Generate day numbers for selected month
  const days = Array.from({ length: activeMonth.daysInMonth }, (_, i) => {
    const dayNum = i +1;
    return {
      day: dayNum.toString().padStart(2, '0'),
      content: null
    };
  });

  // Add custom content for specific days based on selected month
  const calendarData = days.map(item => {
    const eventText = activeDayData.events[item.day];
    if (eventText) {
      return {
        ...item,
        content: <>{eventText}</>,
      };
    }
    return item;
  });

  const leadingEmptyCells = Array.from({ length: activeMonth.startsOn }, (_, index) => ({
    key: `empty-start-${index}`,
    isEmpty: true,
  }));

  const filledDayCells = calendarData.map((item) => ({
    ...item,
    isEmpty: false,
  }));

  const cellsWithLeading = [...leadingEmptyCells, ...filledDayCells];
  const trailingCellCount = (7 - (cellsWithLeading.length % 7)) % 7;
  const trailingEmptyCells = Array.from({ length: trailingCellCount }, (_, index) => ({
    key: `empty-end-${index}`,
    isEmpty: true,
  }));

  const alignedCalendarCells = [...cellsWithLeading, ...trailingEmptyCells];

  return (
    <div className="relative font-helvetica italic font-bold">
      <div className="text-white text-center mb-2 sm:mb-3 md:mb-4">
        <div className="mb-2 flex items-center justify-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setSelectedMonth('march')}
            className={`px-3 py-1 rounded-full border border-white text-xs sm:text-sm md:text-base ${
              selectedMonth === 'march' ? 'bg-retro-green text-white' : 'bg-transparent text-white'
            }`}
          >
            March
          </button>
          <button
            type="button"
            onClick={() => setSelectedMonth('april')}
            className={`px-3 py-1 rounded-full border border-white text-xs sm:text-sm md:text-base ${
              selectedMonth === 'april' ? 'bg-retro-green text-white' : 'bg-transparent text-white'
            }`}
          >
            April
          </button>
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl uppercase tracking-wide">{activeMonth.label}</h3>
      </div>

      <div className="grid grid-cols-7 w-full border border-white border-b-0">
        {weekDays.map((day) => (
          <div
            key={day} 
            className="border border-white border-t-0 p-1 sm:p-2 text-center text-white text-[10px] sm:text-xs md:text-sm lg:text-base"
          >
            {day}
          </div>
        ))}
      </div>
      
      <CalendarLabels selectedMonth = {selectedMonth}/>
      
      <div className="grid grid-cols-7 w-full">
        {alignedCalendarCells.map((item, index) => (
          <div
            key={item.isEmpty ? item.key : `${selectedMonth}-${item.day}-${index}`}
            className="border border-white py-2 min-h-[120px] w-auto h-full relative bg-transparent overflow-visible flex flex-row justify-center items-end"
          >
            {!item.isEmpty && (
            <span className={`text-xs sm:text-sm md:text-lg text-white absolute top-1 left-1 sm:top-2 sm:left-2 font-helvetica italic font-bold ${
              activeDayData.highlights[item.day] ? 'z-2' : ''
            }`}>
              {activeDayData.highlights[item.day] ? (
                <span className="relative inline-block">
                  <svg 
                    viewBox="0 0 100 100" 
                    className={`absolute -left-0.5 -top-0 w-[3em] h-[3em] ${activeDayData.highlights[item.day]}`}
                    style={{ 
                      transform: 'translate(-25%, -25%)',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                    }}
                  >
                    <path d="M50 0 L61 25 L85 15 L75 39 L100 50 L75 61 L85 85 L61 75 L50 100 L39 75 L15 85 L25 61 L0 50 L25 39 L15 15 L39 25 Z" />
                  </svg>
                  <span className="relative z-1">{item.day}</span>
                </span>
              ) : (
                item.day
              )}
            </span>
            )}
            {!item.isEmpty && item.content && (
              <div className=" text-white pb-3 text-center text-[12px] sm:text-[12px] overflow-visible z-100 flex flex-col items-end justify-end"
                  style={{
                    color: '#FFFFFF',
                    WebkitTextStrokeColor: '#000',
                    WebkitTextStrokeWidth: '2px',
                    paintOrder: 'stroke fill'
                  }}>
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
