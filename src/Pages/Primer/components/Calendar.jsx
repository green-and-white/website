import React from 'react'

export default function Calendar() {
  // Generate day numbers from 05 to 29 with custom content
  const days = Array.from({ length: 28 }, (_, i) => {
    const dayNum = i + 2;
    return {
      day: dayNum.toString().padStart(2, '0'),
      content: null
    };
  });

  // Add custom content for specific days
  const calendarData = days.map(item => {
    switch(item.day) {
      case '05':
        return { 
          ...item, 
          content: (
            <>
              Registration starts on this day until <span style={{ color: 'var(--color-retro-orange)' }}>Nov 19</span>!
            </>
          )
        };
      case '29': 
        return {
            ...item,
            content: (
              <>
                See you in the locations indicated
              </>
            )
        }
      // Add more cases for other days as needed
      default:
        return item;
    }
  });

  return (
    <div className="relative font-helvetica italic font-bold">

      {/* Bar spanning from day 05 to 08 (positions 0-3 in grid, first row) */}

      <div 
        className="absolute bg-retro-lightblue font-helvetica text-bold italic text-center px-2 rounded-full text-white z-10 text-[8px] sm:text-[10px] md:text-[12px]"
        style={{
          top: '22.5%',
          right: "2%",
          width: '54%', // Spans 4 cells out of 5 columns
          transform: 'translateY(-50%)'
        }}
      >6F Henry Sy Sr. Hall</div>

       {/* Bar spanning from day 10 to 14 (positions 0-3 in grid, first row) */}

      <div 
        className="absolute bg-retro-purple font-helvetica text-bold italic text-center px-2 rounded-full text-white z-10 text-[8px] sm:text-[10px] md:text-[12px]"
        style={{
          top: '47.5%',
          right: '2%',
          width: '82%', // Spans 4 cells out of 5 columns
          transform: 'translateY(-50%)'
        }}
      >Br. Andrew Gonzalez Hall Lobby</div>

      {/* Bar spanning from day 17 to 122 (positions 0-3 in grid, first row) */}

      <div 
        className="absolute bg-retro-lightblue font-helvetica text-bold italic text-center px-2 rounded-full text-white z-10 text-[8px] sm:text-[10px] md:text-[12px]"
        style={{
          bottom: '25%',
          right: '2%',
          width: '82%', // Spans 4 cells out of 5 columns
          transform: 'translateY(-50%)'
        }}
      >6F Henry Sy Sr. Hall</div>

      {/* Bar spanning from day 24 to 29 (positions 0-3 in grid, first row) */}

      <div 
        className="absolute bg-retro-pink font-helvetica text-bold italic text-center px-2 rounded-full text-white z-10 text-[8px] sm:text-[10px] md:text-[12px]"
        style={{
          bottom: '0%',
          right: '2%',
          width: '82%', // Spans 4 cells out of 5 columns
          transform: 'translateY(-50%)'
        }}
      >5F Br. Connon Hall</div>
     
      
      {/* Text spanning from day 11 to 13 (positions 6-8, second row) */}
      <div 
        className="absolute text-white text-center z-10 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] leading-tight"
        style={{
          top: '35%',
          left: '21%',
          width: '58%', // Spans 3 cells (11-13)
          transform: 'translateY(-50%)',
          color: '#FFFFFF',
          WebkitTextStrokeColor: '#000',
          WebkitTextStrokeWidth: '2px',
          paintOrder: 'stroke fill'
        }}
      >
        <div>Mondays to Fridays from 10AM to 5PM</div>
        <div>Saturdays from 9AM to 12PM</div>
      </div>
      
      <div className="grid grid-cols-7 grid-rows-4 w-full">
        {calendarData.map((item, index) => (
          <div
            key={index}
            className="border border-white p-2 sm:p-3 md:p-4 w-auto h-full relative bg-transparent overflow-visible flex flex-row justify-center items-center"
          >
            <span className={`text-xs sm:text-sm md:text-lg text-white absolute top-1 left-1 sm:top-2 sm:left-2 font-helvetica italic font-bold ${
              item.day === '05' || item.day === '29' ? 'z-2' : ''
            }`}>
              {item.day === '05' || item.day === '29' ? (
                <span className="relative inline-block">
                  <svg 
                    viewBox="0 0 100 100" 
                    className={`absolute -left-0.5 -top-0 w-[3em] h-[3em] ${
                      item.day === '05' ? 'fill-retro-orange' : 'fill-retro-green'
                    }`}
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
            {item.content && (
              <div className="py-2 md:py-4 text-white text-center w-[240%] sm:w-[140%] text-[12px] sm:text-[12px]  -rotate-6 overflow-visible z-100"
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
