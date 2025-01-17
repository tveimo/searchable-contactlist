import * as React from "react";
import {SVGProps} from "react";
// https://www.svgrepo.com/svg/380138/x-close-delete, modified (MIT license)
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 5L19 19M5 19L19 5" stroke="#8E9AA5" strokeWidth="2"></path>
</svg>
);
export {
SvgComponent as IconCross};
