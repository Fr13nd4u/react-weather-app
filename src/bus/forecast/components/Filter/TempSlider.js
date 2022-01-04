import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export const TempSlider = ({tempVal}) => {
  const marks = {
    '-65': {
      style: {
        color: '#96dbfa',
      },
      label: <strong>-65°C</strong>,
    },
    '-50': '-50°C',
    '-35': '-35°C',
    '-20': '-20°C',
    '-10': '-10°C',
    0: <strong>0°C</strong>,
    5: '5°C',
    10: '10°C',
    15: '15°C',
    25: '25°C',
    35: '35°C',
    45: '45°C',
    57: {
      style: {
        color: '#ff2400',
      },
      label: <strong>57°C</strong>,
    },
  };
  return (
    <div className="temp-slider"> 
        <Slider.Range
          draggableTrack
          vertical
          min={-65}
          max={57}
          marks={marks}
          onChange={tempVal}
          defaultValue={[-5, 25]}
        />
      </div>
  )
}
