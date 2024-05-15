import styled from '@emotion/styled';

export const CircleProgressWrapper = styled.svg`
  --size: 250px;
  --half-size: calc(var(--size) / 2);
  --stroke-width: 15px;
  --radius: calc((var(--size) - var(--stroke-width)) / 2);
  --circumference: calc(var(--radius) * pi * 2);
  --dash: calc(
    (
        var(
            ${({
              animationKey
            }: {
              progress: string;
              color: string;
              animationKey: string;
            }) => {
              return `--progress-${animationKey}`;
            }}
          ) * var(--circumference)
      ) / 100
  );
  animation: ${({
    progress,
    animationKey
  }: {
    progress: string;
    color: string;
    animationKey: string;
  }) => {
    return `progress-${animationKey}-animation`;
  }}
    2s linear 0s 1 forwards;
  ${({
    progress,
    animationKey
  }: {
    progress: string;
    color: string;
    animationKey: string;
  }) => {
    return `--progress-${animationKey}: ${progress}`;
  }};

  circle {
    cx: var(--half-size);
    cy: var(--half-size);
    r: var(--radius);
    stroke-width: var(--stroke-width);
    fill: #262956;
    stroke-linecap: round;
  }

  circle.bg {
    stroke: #fff;
  }

  circle.fg {
    transform: rotate(-90deg);
    transform-origin: var(--half-size) var(--half-size);
    stroke-dasharray: var(--dash) calc(var(--circumference) - var(--dash));
    transition: stroke-dasharray 0.3s linear 0s;
    ${({ color }: { color: string; progress: string }) => {
      return `stroke: ${color};`;
    }}
  }

  @property --progress {
    syntax: '<number>';
    inherits: false;
    initial-value: 0;
  }

  ${({
    progress,
    animationKey
  }: {
    progress: string;
    color: string;
    animationKey: string;
  }) => {
    return `@keyframes --progress-${animationKey}-animation from {
      ${({
        animationKey
      }: {
        progress: string;
        color: string;
        animationKey: string;
      }) => {
        return `--progress-${animationKey}`;
      }}: 0;
    }
    to {
      ${({
        animationKey
      }: {
        progress: string;
        color: string;
        animationKey: string;
      }) => {
        return `--progress-${animationKey}`;
      }}: ${({ progress }: { progress: string; color: string }) => {
      return progress;
    }};
    }
  }`;
  }} {
    
`;
