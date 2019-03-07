import React from 'react';
import { LIGHT, DARK } from '../../colors.js';

const Twist = props => {
  const colors = {
    light: LIGHT,
    dark: DARK,
  };

  return (
    <svg id="twist" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.27 57">
      <path
        d="M1 57H0c0-.69.67-1.23 1.32-1.75.33-.26 1-.75 1-1s-.62-.71-.95-1C.67 52.8 0 52.26 0 51.57s.67-1.23 1.32-1.75c.33-.26 1-.75 1-1s-.62-.71-.95-1C.67 47.37 0 46.84 0 46.14s.67-1.23 1.32-1.75c.33-.26 1-.75 1-1s-.62-.7-.95-1C.67 41.94 0 41.41 0 40.71S.67 39.48 1.32 39c.33-.27 1-.76 1-1s-.62-.7-.95-1C.67 36.52 0 36 0 35.29s.67-1.23 1.32-1.75c.33-.27 1-.76 1-1s-.62-.7-.95-1C.67 31.09 0 30.55 0 29.86s.67-1.23 1.32-1.75c.33-.26 1-.76 1-1s-.62-.7-.95-1C.67 25.66 0 25.12 0 24.43s.67-1.23 1.32-1.75c.33-.26 1-.75 1-1s-.62-.7-.95-1C.67 20.23 0 19.69 0 19s.67-1.23 1.32-1.75c.33-.26 1-.75 1-1s-.62-.71-.95-1C.67 14.8 0 14.26 0 13.57s.67-1.23 1.32-1.75c.33-.26 1-.75 1-1s-.62-.71-.95-1C.67 9.37 0 8.84 0 8.14S.67 6.91 1.32 6.4c.33-.27 1-.76 1-1s-.62-.7-.95-1C.67 3.94 0 3.41 0 2.71S.67 1.48 1.32 1c.33-.27 1-.76 1-1h1C3.27.69 2.6 1.23 2 1.75c-.38.25-1 .75-1 .96s.62.71 1 1c.65.52 1.32 1.06 1.32 1.75S2.6 6.66 2 7.18c-.33.26-.95.75-.95 1s.62.71 1 1c.65.52 1.32 1.05 1.32 1.75S2.6 12.09 2 12.6c-.33.27-.95.76-.95 1s.62.7 1 1c.65.52 1.32 1.05 1.32 1.75S2.6 17.52 2 18c-.33.27-.95.76-.95 1s.62.7 1 1c.65.51 1.32 1.05 1.32 1.74S2.6 22.94 2 23.46c-.33.27-.95.76-.95 1s.62.7 1 1c.65.51 1.32 1.05 1.32 1.74S2.6 28.37 2 28.89c-.33.26-.95.76-.95 1s.62.7 1 1c.65.52 1.32 1.06 1.32 1.75S2.6 33.8 2 34.32c-.33.26-.95.75-.95 1s.62.7 1 1c.65.52 1.32 1.06 1.32 1.75S2.6 39.23 2 39.75c-.33.26-.95.75-.95 1s.62.71 1 1c.65.52 1.32 1.06 1.32 1.75S2.6 44.66 2 45.18c-.33.26-.95.75-.95 1s.62.71 1 1c.65.52 1.32 1 1.32 1.75S2.6 50.09 2 50.61c-.33.26-.95.75-.95 1s.62.7 1 1c.65.52 1.32 1.05 1.32 1.75S2.6 55.52 2 56c-.38.3-1 .79-1 1z"
        fill={colors[props.color]}
      />
    </svg>
  );
};

export default Twist;
