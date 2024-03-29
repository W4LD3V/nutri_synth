import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#344054"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.667 4v-.533c0-.746 0-1.12-.146-1.405a1.333 1.333 0 0 0-.582-.583c-.286-.145-.659-.145-1.406-.145H7.467c-.747 0-1.12 0-1.406.145-.25.128-.455.332-.582.583-.146.285-.146.659-.146 1.405v.534m1.334 3.666v3.334m2.666-3.334v3.334M2 4h12m-1.333 0v7.466c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H6.533c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.427-.218-.988-.218-2.108V4.001"
    />
  </Svg>
)
export default SvgComponent
