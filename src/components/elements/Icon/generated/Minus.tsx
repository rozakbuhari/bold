/* tslint:disable */
import React from "react";

const SvgMinus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        id="minus_svg__a"
        d="M5 13h14c.667 0 1-.332 1-1 0-.668-.333-1-1-1H5c-.667 0-1 .332-1 1 0 .668.333 1 1 1z"
      />
    </defs>
    <use xlinkHref="#minus_svg__a" />
  </svg>
);

export default SvgMinus;
