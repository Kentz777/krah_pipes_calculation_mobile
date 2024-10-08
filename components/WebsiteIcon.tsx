import React from 'react';
import { SvgXml } from 'react-native-svg';

// WebsiteIcon component
const WebsiteIcon: React.FC<{ color: string }> = ({ color = 'black' }) => {
  // SVG data as a string, with the fill attribute set to use the color prop
  const svgData = `
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="100" height="100" fill="url(#pattern0_42_449)"/>
<defs>
<pattern id="pattern0_42_449" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_42_449" transform="scale(0.01)"/>
</pattern>
<image id="image0_42_449" width="100" height="100" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>

  `;

  return <SvgXml xml={svgData} width="100" height="100" />;
};

export default WebsiteIcon;


