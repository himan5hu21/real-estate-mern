import PropTypes from "prop-types";

export default function BlocksShuffle2(props) {
  const { className } = props;

  return (
    <svg
      width="24" // Adjust the width as necessary
      height="24" // Adjust the height as necessary
      viewBox="0 0 24 24"
      style={{ color: "#fff" }}
      xmlns="http://www.w3.org/2000/svg"
      className={className} // Allow passing className for styling
    >
      <rect
        width="24"
        height="24"
        x="0"
        y="0"
        rx="2"
        fill="transparent"
        stroke="transparent"
        strokeWidth="0"
        strokeOpacity="100%"
        paintOrder="stroke"
      ></rect>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#8052F6"
        x="0"
        y="0"
        role="img"
        style={{ display: "inline-block", verticalAlign: "middle" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#8052F6">
          <path
            fill="currentColor"
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            opacity=".25"
          />
          <path
            fill="currentColor"
            d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
          >
            <animateTransform
              attributeName="transform"
              dur="0.75s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
        </g>
      </svg>
    </svg>
  );
}

BlocksShuffle2.propTypes = {
  className: PropTypes.string.isRequired,
};
