import React from 'react';
import { Box } from './Box';
import { BackgroundImage } from './BackgroundImage';

export const ImageCard = ({
  tl,
  tr,
  br,
  bl,
  src,
  ratio,
  className = '',
  ...props
}) => (
  <Box className={`relative ${className}`} {...props}>
    <BackgroundImage ratio={ratio} src={src} />
    {tl && <Box className="absolute pin-t pin-l">{tl}</Box>}
    {tr && <Box className="absolute pin-t pin-r">{tr}</Box>}
    {br && <Box className="absolute pin-b pin-r">{br}</Box>}
    {bl && <Box className="absolute pin-b pin-l">{bl}</Box>}
  </Box>
);
