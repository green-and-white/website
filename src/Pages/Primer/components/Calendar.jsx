import React from 'react'

export default function Calendar() {
  // Generate day numbers from 05 to 19 with custom content
  const days = Array.from({ length: 15 }, (_, i) => {
    const dayNum = i + 5;
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
      case '19': 
        return {
            ...item, 
            content: (
                <>
                See you in the locations inidicated!
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
        className="absolute bg-retro-lightblue font-helvetica text-bold italic text-center px-2 rounded-full text-white z-10 text-[8px] sm:text-[10px] md:text-[14px] lg:text-[16px]"
        style={{
          top: '30%',
          left: '2%',
          width: '77%', // Spans 4 cells out of 5 columns
          transform: 'translateY(-50%)'
        }}
      >6F Henry Sy Sr. Hall</div>

       {/* Bar spanning from day 05 to 08 (positions 0-3 in grid, first row) */}

      <div 
        className="absolute bg-retro-purple font-helvetica text-bold italic text-center px-2 rounded-full text-white z-10 text-[8px] sm:text-[10px] md:text-[14px] lg:text-[16px]"
        style={{
          top: '63%',
          left: '2%',
          width: '95%', // Spans 4 cells out of 5 columns
          transform: 'translateY(-50%)'
        }}
      >Br. Andrew Gonzalez Hall Lobby</div>

      <div 
        className="absolute bg-retro-purple font-helvetica text-bold italic text-center px-2 rounded-full text-white z-10 h-6"
        style={{
          bottom: '-1%',
          left: '2%',
          width: '15%', 
          transform: 'translateY(-50%)'
        }}
      ></div>

      {/* Bar spanning from day 05 to 08 (positions 0-3 in grid, first row) */}

      <div 
        className="absolute bg-retro-pink font-helvetica text-bold italic text-center px-2 rounded-full text-white z-10 text-[8px] sm:text-[10px] md:text-[14px] lg:text-[16px]"
        style={{
          bottom: '-1%',
          left: '42%',
          width: '54%', // Spans 4 cells out of 5 columns
          transform: 'translateY(-50%)'
        }}
      >6F Henry Sy Sr. Hall</div>
     

      

      {/* Text spanning from day 11 to 13 (positions 6-8, second row) */}
      <div 
        className="absolute text-white text-center z-10 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] leading-tight"
        style={{
          top: '50%',
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
      
      <div className="grid grid-cols-5 grid-rows-3 w-full">
        {calendarData.map((item, index) => (
          <div
            key={index}
            className="border border-white p-2 sm:p-3 md:p-4 w-auto h-full  relative bg-transparent overflow-visible flex flex-row justify-center items-center"
          >
            <span className="text-xs sm:text-sm md:text-lg text-white absolute top-1 left-1 sm:top-2 sm:left-2 font-helvetica italic font-bold">
              {item.day}
            </span>
            {item.content && (
              <div className="py-2 md:py-4 text-white text-center w-[140%] text-[12px] sm:text-[12px] md:text-[20px] -rotate-6 overflow-visible z-10"
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
