import React from 'react';
import { SvgXml } from 'react-native-svg';

// LinkedInIcon component
const LinkedInIcon: React.FC<{ color: string }> = ({ color = 'black' }) => {
  // SVG data as a string, with the fill attribute set to use the color prop
  const svgData = `
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="100" height="100" fill="url(#pattern0_42_451)"/>
<defs>
<pattern id="pattern0_42_451" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_42_451" transform="scale(0.01)"/>
</pattern>
<image id="image0_42_451" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADyUlEQVR4nO2du2sUURTGjxGfiA9E/QdUfHQ2PiobQSw0YqK2NqJooWBpbyKCVhYiIvGFrTa2goh2iq/4FrGxEJEEVFB/cmUCS9hk5949s3Ouc36w5Z7v++7H7szNZHZEHMdxHMdxHMdxMgCYDewDrgOjwDjOeLEWYU32hjXqVRl7gLe+/h15A+yusoiZwJnOPpxJnAb6qijEy0hnuIqvKac7+jUP4OH70OmOdyoH+uJsytFhUKOQG0pmHLiqUcgrX0k1RjUKGdPz03jGNApxFPFCjOGFGMMLMYYXYgwvxBgWCnkGHAZWAfOK12rgaBP3OFJzIeen+/sNMBcYoUFIjYXcAWaUvM7ygIYgNRayNUJjJw1BaixkQYTGEhqC1FjIogiNRTQEqbGQHREa22kIUmMh98MBu8T8PuAuDUFqLITif5TmTzN7DnCRBiE1FzJxLfk4sD6UU7zWAkeAlzQMMVCI04IXYgwvxBheiDG8EGN4IcaorRAtHdHz+wQ4C+wqTsFXFH9pXgasA7YBQ8AjKiQ2T0xAVeGK5vwpNqebImesAS4Dv1Pza+XpFLAy4QrmPAY2xr5/0qwtwIfUNdDIM13ASoWV51wKVyNj3zvFvKXAw9R16DbPVAErF1acc67MlcrImeHywNPkFrrI085MT4QV5/TFvqfk3JUaN7dqGOmJcGUBFAGOJTehladXwpUFUKS4m+x9chteiD7ACS9EgeI6zByFOWEj+cs/IQkAm4GbwNeWjeIn4ELYrXcx954XEglwssNO+2e4apk4+5QXEgFwoOSChU/M/oT5A15ISYDFwJeIBfsMLIzU2OCFlAQ4lLBYByM1lnshJQFuJyzWrYQztiRidKYS74mw4pyPCXY/RmrM6NW6tBPvibDinB8Jdr9bXZfahKue0wmrOuYCSmZ+tXXMBZTM/GrrmAsomfnV1jEXUDLzq61jLqBk5ldbx1xAycyvto65gJKZX20dcwElM7/aOuYCSmZ+tXXMBZTM/GrrmAsomfnV1jEXUDLzq61jLqBk5ldbx1xAycyvto65gJKZX20dcwElM7/aOuYCSmZ+tXXMBZTM/GrrmAsomfnV1lETdtrjhRjDCzGGF/IfFuIPdNHjm0YhjfvVtwp5oVHItSodNowRjULCg3YdHQY0CpkFvFYy1GTeqj1BOjz1uO40mRNundupUkZLKeGpx04ap1TLaPkF6uFEQ03+ZAxV9fsrE8X0+zGlFOHpQbsqK6LNgX4wPNs1nFv75vEfYQP9HLhS3DY9qydlOI7jOI7jOI7jSHf8BYwuTwfMtiVPAAAAAElFTkSuQmCC"/>
</defs>
</svg>
  `;

  return <SvgXml xml={svgData} width="100" height="100" />;
};

export default LinkedInIcon;


