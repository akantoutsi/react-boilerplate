import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const SVG = (props
    // {
    // width = '100%',
    // height = '100%',
    // viewBox = '0 0 32 32',
    // style={},
    // className = '',
    // fill = '#49c',
    // d,
// }
) => (
    // <svg
    //     width={width}
    //     style={style}
    //     height={height}
    //     viewBox={viewBox}
    //     className={className}
    //     xmlns="http://www.w3.org/2000/svg"
    //     xmlnsXlink="http://www.w3.org/1999/xlink"
    // >
    <SvgIcon {...props}>
      {/* <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /> */}
      </SvgIcon>
//   </svg>
);

export default SVG;