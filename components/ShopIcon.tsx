import React from 'react';
import { SvgXml } from 'react-native-svg';

// ShopIcon component
const ShopIcon: React.FC<{ color: string }> = ({ color = 'black' }) => {
  // SVG data as a string, with the fill attribute set to use the color prop
  const svgData = `
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="100" height="100" fill="url(#pattern0_42_448)"/>
<defs>
<pattern id="pattern0_42_448" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_42_448" transform="scale(0.01)"/>
</pattern>
<image id="image0_42_448" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEtUlEQVR4nO2dO4xVVRSGBzUoFmqUaDAabX0QjWIrNj6CxWgxxoqKjsJnJwy2oCSaaMH46GhOSKTRzvgIamZ8xBgSrbCYxBdqIwEHJnxmx0XuCZnHXuvse86+8H/J7ebstfb673/Wuefss2dqSgghhBBCCCGEEJcQwA3ALPAdcIrLj1PAt8DeVIuhxXgE+GPoilTE78D2ocR4CDg9dAUqJNVkW99iXAkcH3rmFfNDqlGfgjwx9IwngMf6FOS1oWc7AezvU5DDQ892AjjcpyDN0LOdABoJUhcS5LIUBLgdOJmR0L/AbZljLmROciaQ70zm2AuZ420BzmSM9zdwpzdf7+SuAo5lTvCtzDGvA5YrEGQZuD5zzLczx5wHNnpzHsflrscdT5LPzBgFSezIHPPWTJckDnhzzp3YDuB8SXfYuAcqEmS/Y9xcl6SaTXvzLtU3XO5w9o8+BJl3jOtxSbl+4uwbXnd4+kcfgmT3EadLyvUT520Srzs8/aMPQbL7SMAl3fuJs2+43BHoH30J4roH5XRJvJ84+4bbHYH+0Zcg887xvS7x95NA34i4w9s/+hLE1UcCLvH3k8Dt9SXgDuckvP2jL0FcfaR1NklnCIr3k0DfcLsj2D/6FMT9LCPgkvX7SaBvhNwR7B99CjIfiBNxydr9BJgLJH/Em7zFiiyQmA7EmQ7EOR2c05FArLnSj2ZDjyqBnwOxHgyujvFyIjinsvUDHg8M+Ggw+XedcU5GVnLYFeOfzljvBOdUtn62vCctYcnle+CKYPJbnZe9eyNxLNarjjgpp63BOOXrlxZ5ZZ7f0988EC2SxdqXmfgCcE2HOJuAbzJjzXacU/n6peWQtixyNX4DHu6SuMXZYKKs5ZSPgc0FYm0GPlkjznIXF469funXKrDHvln/2Odr4JX0K7tE4q1Y96bzNv83+iVL+EO7ZN1QME76AjwDfGQxUqwTFjt0mqqhfkIIIUQRIg0KuDpdigaOu7GnY65NOQaOG65ZA3cDb9r19BfAU+vd47dLz+eAReAX4CXg5nWO2WhjH7OrokPAfRn53W/35s7asdMZ+d0CvAz8ajmmXG/KyO9pq0GqxRvAXVPjBtgJPG+XiKu9rPMXcNTeOdwFPAvstns8n1lxLuYc8Ln9zW47ZpeNcdTGXIkfgfeAFyy39HkReB/4aZVj0i2UD1bI73XLIeVyMSnnT+1xQTu/fevkd9xqlWq2cxyCiA5IkMqQIJUhQSpDglSGBKkMCVIZEqQyJEhl1CLIl/YKdanPYiCHxcI5pDlNrCAzFbwf3xTOIbLwToK0kCAt5BCjpEsvWDWCBDEkyAidslrIIYYcMkIOaSGHGHLICDmkhRxiyCEj5JAWcoghh4yQQ1rIIYYcMkIOaSGHGHLICDmkhRxiyCEj5JAWB+2RZ6nPV/iRIJXRFH5QN9HP1GugKVwHCdIRCVIZjRxSF40EqYvmUhVkpRc2J4GmAkGWSubQZQe4GmgqECS0Q13pHeBqoalAkNX3VeyQiHcHuFpoCtchsjHzPSVziOwAVxPNwIJ02qGuxA5wtdEUroHnXyjNltyAzbMDXM00PQpyYYe6ubGdpoQQQgghhBBCCDHVH/8BP3sYqjUIB8gAAAAASUVORK5CYII="/>
</defs>
</svg>

  `;

  return <SvgXml xml={svgData} width="100" height="100" />;
};

export default ShopIcon;


