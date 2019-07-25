import React from "react";
import { withTheme } from "emotion-theming";

import { StyledSVG } from "./style";

export default withTheme(({ theme }) => {
  return (
    <StyledSVG width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeOpacity="0"
      >
        <g
          id="Desktop-HD"
          transform="translate(-720.000000, -357.000000)"
          fill={theme.icon.fill}
          fillRule="nonzero"
          stroke="#FFFFFF"
          strokeWidth="8"
        >
          <path
            d="M725.745117,373.5 L725.745117,361.331055 L730.310547,361.331055 C731.240239,361.331055 731.985918,361.454182 732.547607,361.700439 C733.109296,361.946697 733.549233,362.325762 733.867432,362.837646 C734.18563,363.349531 734.344727,363.884926 734.344727,364.443848 C734.344727,364.964033 734.203615,365.453774 733.921387,365.913086 C733.639159,366.372398 733.213056,366.743163 732.643066,367.025391 C733.379073,367.241212 733.944904,367.60921 734.340576,368.129395 C734.736249,368.649579 734.934082,369.263831 734.934082,369.972168 C734.934082,370.542158 734.813722,371.072019 734.572998,371.561768 C734.332274,372.051516 734.034832,372.429198 733.680664,372.694824 C733.326496,372.960451 732.882408,373.161051 732.348389,373.296631 C731.814369,373.432211 731.159997,373.5 730.385254,373.5 L725.745117,373.5 Z M727.355469,366.444336 L729.986816,366.444336 C730.700687,366.444336 731.212564,366.397299 731.522461,366.303223 C731.931968,366.181477 732.240477,365.979494 732.447998,365.697266 C732.655519,365.415038 732.759277,365.060875 732.759277,364.634766 C732.759277,364.230792 732.662436,363.875246 732.46875,363.568115 C732.275064,363.260985 731.998374,363.0507 731.638672,362.937256 C731.27897,362.823811 730.661951,362.76709 729.787598,362.76709 L727.355469,362.76709 L727.355469,366.444336 Z M727.355469,372.063965 L730.385254,372.063965 C730.905439,372.063965 731.27067,372.044597 731.480957,372.005859 C731.851727,371.939453 732.16162,371.828777 732.410645,371.673828 C732.659669,371.518879 732.86442,371.293377 733.024902,370.997314 C733.185385,370.701252 733.265625,370.35954 733.265625,369.972168 C733.265625,369.51839 733.149415,369.124106 732.916992,368.789307 C732.684569,368.454507 732.362225,368.21932 731.949951,368.08374 C731.537677,367.94816 730.944177,367.880371 730.169434,367.880371 L727.355469,367.880371 L727.355469,372.063965 Z"
            id="B"
          />
        </g>
      </g>
    </StyledSVG>
  );
});
