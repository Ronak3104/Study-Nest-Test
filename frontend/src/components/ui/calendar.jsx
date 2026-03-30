// Simplified Calendar for due date picker
import { useState } from 'react';

const Calendar = ({ className, ...props }) => {
  const [date, setDate] = useState(new Date());
  
  return (
    <div className={className}>
      <input 
        type="date" 
        value={date.toISOString().split('T')[0]}
        onChange={(e) => setDate(new Date(e.target.value))}
        {...props}
      />
    </div>
  );
};

export { Calendar };
