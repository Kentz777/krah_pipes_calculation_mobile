import React from 'react';
import { SvgXml } from 'react-native-svg';

const HomeSearchIcon: React.FC<{ color: string }> = ({ color = 'black' }) => {
  // SVG data as a string, with the fill attribute set to use the color prop
  const svgData = `
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="100" height="100" fill="url(#pattern0_198_916)"/>
<defs>
<pattern id="pattern0_198_916" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_198_916" transform="scale(0.01)"/>
</pattern>
<image id="image0_198_916" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFDElEQVR4nO2dTahVVRTHj6a+ZkmPMkGcCNnEgVqDxhk6LCiiNDQR4Q2KuhoNQhR0EEgW5KCaNLFPS20sak0inoRRVqAYVmZFvQIVRMn3i0XrgT7O3vfce/fe55x91g/u8Oy1zvrf/b3O3kVhGIZhGIZhGIZhGIZhGB0FmAvcD6wHesBLmf16+m6r5V2LpgLcA7wOXKQ7/Aq8BiwqmgIwB3gRuEJ3uQxsk1jULcbtwPt1R6NBvCcxqbNmvFt3BBrIwVpqijZTRjnb6ujApd30cQmYBI5m9pus+O7pOnodTbn4C9gILCgyBRgDNgFTnjjsSznPuOgR496iIwDLPaJcSNKXAA94/hUbi44BPOOJx+oUDjzlaTezbab6NF+uPuXJIjbAdofxyaKjACdrG20BuxzGTxQdBTjhiMmuFMZNkFmYIA2jM4IAS3S8/zbwGXAO+A04D3wPHAH2AGukcw1tfwA/8xWE/+c5j+lL3qA6Mh/YDywL4ceAPucpCPAQ8B2j8a/WqPEwb9xBQXQZ/03C8gewNuzbd0AQ4C5dsIuBNHm98FHIVBAVQzrn2OyIE42MBNFmqmrNOAu8oasEG4CtwE7gkwG2jrdEjEkWgvTrM6aBD4AVFYRdr0NiH1eBlSMHIEdBdDTl4xfgwQH9WqBzEhHSxSlg3lAvnqsgOs/wDW2/AhaP4N8TwHVP+RPDlp2rIDLp89WMxQF8nPDY+AmYP6qNnAQ57nh+etBmqo+dAx5RHg1lp9WC6NqUaznkw8B+LtWOvIyDgW21VhBZKHSxIoKvbzls/QPcFtBOawVxBehsJF/XpfgDtFmQzx3P7o+4333NYfPxgHZaK4jMuMvYHtHf8w6bzwW00VpBXPlcT0f090uHzZcD2mitID87nt0a0d9vHDafD2ijtYJ863h2Z0R//4xdK9ssyKeOZw9F8nWJZ21rTUA7rRVEFv/KuBLjQxfcSygyOV0Y0E5rBZHsEBcbEnbopwLbaa0gY55s8XMhc4OBRzzi7w5lp9WC6POSquNiTyAfx4EfPVkpS0PYyUWQZRqUMqZlP2NE/+YDxzyiHx6l/OwE0TIkb8rF9WE3kbRm+MSQZZTlw5SduyDjmjfl48AgTYvscXiaqRn2Dv3iOQui5aytkCp6VWvTurLcXZ1nTHhGU7M5DdwdNCC5CKJlybkhVbmmSy9f6IzfNQNPLko2gmh5O0jP6ZCiZCWIlrnFs93aeFGyE0TLXQl8HSjY0rzt1aBHFyVLQbTsedpJS6rOMMj85tDMt/IS7BSiZCvIrCxEGcZ+rAkJPm5oRuLusmFyClGyF+RmJDtEEhJkD1y2XfVUtxdkPwN4GLij6ENsUTolSCj00wfX7uEMPwyTOWmCNEwUE6RhopggDRPFBAnAAB39nRXKsk49oSjvVCjHBEkoyu8VyjBBEopypsLzJkhCUfrmAJsgkZAOXPoMPeDmDPBslXMTTZCGYYI0DBOkYdQtiB2C2bBDMH3HxNZ2qluXj4n1HaS8qegYwOa6D1KeqzfLlDEVIzOwqQD31X7UuDoi1/y4mNLjt8cyb6Y2A3974vBqSocWVbiy4bJ2dkcz+52seF1F8AzJfqLInUtG5A9KBxHErjwq56PaLgfT09zsHqpbM/bruRRsVk3pVWhXc+ZSLc1UhY5+nw73usIFGU0l78CHqDGrdEYvNeeVzH49fbdVtV8kaRiGYRiGYRiGYRiGYRhFffwHUO9d4GwEsjIAAAAASUVORK5CYII="/>
</defs>
</svg>
  `;

  return <SvgXml xml={svgData} width="100" height="100" />;
};

export default HomeSearchIcon;


