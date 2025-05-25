'use client'
import React from 'react';

interface CircularProgressProps {
  percentage: number;
  size?: number;
  testid?: string;
  showPercentage?: boolean;
  strokeColor?: string;
  strokeBackgroundColor?: string;
}

interface CalculateStrokeDashOffset {
  strokeDashoffset: number;
  stroke: number;
  radius: number;
  circumference: number;
}

export const calculateStrokeDashOffset = (percentage: number, size: number): CalculateStrokeDashOffset => {
  const stroke = 5;
  const radius = (size - stroke) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  return { strokeDashoffset, stroke, radius, circumference };
}

const ProgressCircle: React.FC<CircularProgressProps> = ({ percentage, size = 74, testid = 'progress-bar-circular', showPercentage = false, strokeColor = '#3b82f6', strokeBackgroundColor = 'rgba(22, 22, 22, 0.12)' }) => {
  const { strokeDashoffset, stroke, radius, circumference } = calculateStrokeDashOffset(percentage, size);
  return (
    <div className="flex justify-center items-center w-fit relative" data-testid={testid}>
      <svg
        height={size}
        width={size}
        className="transform rotate-[-90deg]"
      >
        {/* Background Circle (Trail) */}
        <circle
          stroke={strokeBackgroundColor}
          fill="transparent"
          strokeWidth={stroke}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        {/* Foreground Circle (Progress) */}
        <circle
          data-testid="progress-bar-filled"
          stroke={strokeColor}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className="transition-stroke duration-300"
        />
      </svg>
      {showPercentage &&
        <div className="absolute text-center text-aqua-75 font-akkurat-bold">
          <div id="percentage" className="text-lg font-bold leading-4">{percentage}%</div>
          <div className="text-xs font-akkurat">done</div>
        </div>
      }
    </div>
  );
};

export default ProgressCircle