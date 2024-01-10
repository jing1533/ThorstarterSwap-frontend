import type { SvgIconProps } from '../SvgIcon';

import React from 'react';

import { SvgWithColor } from '../SvgIcon/SvgIcon.style';

export function Logo(props: SvgIconProps) {
  const { size = '1em', color } = props;
  const commonProps = {
    width: size,
    height: size,
    color: color,
    className: '_icon',
  };
  return (
    <SvgWithColor
      {...commonProps}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      className="c-lekKBq">
      <g fill="currentColor">
        <path d="m7.641 6.333.89.492 6.982-2.896a8.471 8.471 0 0 0-.825-.939c-.05.028-.09.044-.09.044L7.315 6.097c.083.084.19.164.33.236H7.64ZM3.134 14.967l7.067-2.947-1.315-.743-5.393 2.291-1.366.578c.251.325.526.63.82.914l.187-.095v.002Z" />
        <path d="m16.253 5.1-1.287.498c-1.03.377-5.082 1.975-5.082 1.975.662.365 1.378.759 2.008 1.102 1.612.88.592 2.812.379 3.18l-.01.014a5.873 5.873 0 0 0-.027.046s.151-1.443-.866-1.977a648.55 648.55 0 0 1-4.365-2.313c-.466-.248-.804-.7-.868-1.223-.048-.392.051-.843.521-1.238.274-.254.569-.39.569-.39l5.253-2.156s.033-.013.081-.038l1.093-.454A8.421 8.421 0 0 0 1.447 13.12l2.032-.886 4.046-1.697c-.698-.383-1.342-.739-1.648-.903-.152-.081-.344-.21-.496-.292-.82-.433-1.357-1.656-.113-3.107 0 0-.13 1.377.641 1.845.734.446 3.582 1.905 4.428 2.358.216.116.416.264.576.453.329.39.454.87.316 1.38-.006.025-.015.049-.023.073l-.016.048a1.018 1.018 0 0 1-.037.095c-.29.7-1.062.91-1.062.91L10 13.43l-4.917 2.018-1.084.476A8.42 8.42 0 0 0 16.253 5.099v.002Z" />
      </g>
      <path
        fill="currentColor"
        d="m7.53 10.53 1.36.74-.68.29-1.426-.717.745-.314ZM10.09 13.392s1.13-.8.108-1.378l-.643.268s1.072.287.535 1.11ZM9.889 7.567l-1.361-.74.695-.29 1.437.731-.771.3ZM7.41 4.705s-1.131.801-.108 1.378l.642-.268s-1.072-.287-.535-1.11Z"
        opacity={0.4}
        style={{
          mixBlendMode: 'multiply',
        }}
      />
    </SvgWithColor>
  );
}
