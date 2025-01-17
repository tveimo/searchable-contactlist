import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M7.74375 5.7448C7.41875 6.0698 7.41875 6.5948 7.74375 6.9198L10.9771 10.1531L7.74375 13.3865C7.41875 13.7115 7.41875 14.2365 7.74375 14.5615C8.06875 14.8865 8.59375 14.8865 8.91875 14.5615L12.7438 10.7365C13.0687 10.4115 13.0687 9.88647 12.7438 9.56147L8.91875 5.73647C8.60208 5.4198 8.06875 5.4198 7.74375 5.7448Z"
        fill="#8E9AA5"/>
</svg>
);
export {SvgComponent as IconChevronRight};
