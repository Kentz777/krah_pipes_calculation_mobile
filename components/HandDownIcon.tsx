import React from 'react';
import { SvgXml } from 'react-native-svg';

const HandDownIcon: React.FC<{ color: string }> = ({ color = 'black' }) => {
  // SVG data as a string, with the fill attribute set to use the color prop
  const svgData = `
 <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="100" height="100" fill="url(#pattern0_55_29)"/>
<defs>
<pattern id="pattern0_55_29" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_55_29" transform="scale(0.01)"/>
</pattern>
<image id="image0_55_29" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAElEQVR4nO3dO6gdRRjA8VETMU0giIIhpkgURLEUfEUQIVgkpFoRW0HUwspC0igoVyws7ATxgYKghfiINmlC0omNomBjoYIoiiBaGHz8ZHQjx0I5N95zzzcz3w9ue85e/uzscGZ2t5SUUkoppZRSSimllFJKKaW0crgQV+ImHMO04r87cQv2Zt5/hjiM5/CN9fke7+Eh7Bsy0HwmnBbPr3gLh8oIcAGO4zfxncBVpfPrxMva8hPuLz3CU9r1PHaWXuAu7Xu7iyi4BF/ow6t16C0tw8P68mRpGT7Vn3tLi3C1Pp3FbaU1eEC/vsb+0hJs6Nsn2F1agRf1711cVFqA141ho7RgoCBtzLwGC3I2/MxrsCDVtzhQohowSPVx2JnXoEHizrwGDlI9XRfkSiSDB6newaUligzypy/rDpcSQQb52y94bO1rKRkk2BCWQYINYRkk2BCWQYINYR0F2cAHK/rsz3FzBtmcad7odx9+0OoQ1tEZMi38T/vwxoq+580MsskgC2GO4jNb66MMcp5BFjYBHp/3AG+FRzPI/wiyEGbvvJH8d+fvR1yeQbYgyEKYG3HS5tWQ96w0Rq8X9WXUpVycWvKzf66zt7IdRg1yDm7HK/8yVa7XnRdwfdkuowc5Bxfj2vlm0yO4AbvKdssgwWSQYDJIMPMFzejXkDDwhD5MpQe4VR+m0guc0b6p9KLudZ33vLZsKj3BNfhQu6bSG+zA3XhtvhXsO+2YyiiwB9fNE4Cj8zJpXc58Zv5J++Qc8Kv5aT0ZJBLrCTjOGbJK2Ikr6i+quKOuOcwPKnscz86b1jJIgz/tTOs+1iHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILHIILH469EWyzi87mMdAh5cIka9peGydR/rELB7iXe5v7Tu4xwKDv3Hgy3fD/sukJ7h4PxGuXrXVX11Ub0D65H6CL/tPpg/ABPaCceYZnZtAAAAAElFTkSuQmCC"/>
</defs>
</svg>
  `;

  return <SvgXml xml={svgData} width="100" height="100" />;
};

export default HandDownIcon;


