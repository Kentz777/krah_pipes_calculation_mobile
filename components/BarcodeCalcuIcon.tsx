import React from 'react';
import { SvgXml } from 'react-native-svg';

// BarcodeCalcuIcon component
const BarcodeCalcuIcon: React.FC<{ color: string }> = ({ color = 'black' }) => {
  // SVG data as a string, with the fill attribute set to use the color prop
  const svgData = `
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="100" height="100" fill="url(#pattern0_192_910)"/>
<defs>
<pattern id="pattern0_192_910" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_192_910" transform="scale(0.0208333)"/>
</pattern>
<image id="image0_192_910" width="48" height="48" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
  `;

  return <SvgXml xml={svgData} width="100" height="100" />;
};

export default BarcodeCalcuIcon;


