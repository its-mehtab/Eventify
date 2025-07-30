const ConfirmIcon = ({ color = "#fff", size = "40", status }) => {
  if (status === "confirmed") {
    return (
      <svg
        id="layer_1"
        enableBackground="new 0 0 32 32"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
      >
        <g>
          <path d="m15.6099854 29.8499756.3900146.1500244.3499756-.1400146c7.0900269-2.7000122 11.8500366-9.6199951 11.8500366-17.210022v-6.0599976l-.9500122-.039978c-3.5200195-.1500244-7.1099854-1.5300293-10.6699829-4.1300049l-.5800171-.4199829-.5800171.4199829c-3.5599975 2.5999756-7.1499634 3.9799805-10.6699829 4.1300049l-.9500122.039978v6.0599976c0 7.5700073 4.7399902 14.4800415 11.8099976 17.2000122zm-4.5599976-15.5999756 3.5900269 3.5899658 6.3099976-6.3099976 1.3900146 1.4000244-7.7000122 7.7000122-4.9800415-4.9800415z" />
        </g>
      </svg>
    );
  } else if (status === "pending") {
    return (
      <svg
        id="Layer_1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        width={size}
        height={size}
        fill={color}
      >
        <path d="m16 1a15 15 0 1 0 15 15 15.005 15.005 0 0 0 -15-15zm0 24a2 2 0 1 1 2-2 2.006 2.006 0 0 1 -2 2zm2.29-15.51-.67 8.02a1.626 1.626 0 0 1 -3.24 0l-.67-8.02a2.3 2.3 0 1 1 4.59-.19 1.21 1.21 0 0 1 -.01.19z" />
      </svg>
    );
  } else if (status === "cancelled") {
    return (
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style={{
          enableBackground: "new 0 0 512 512",
        }}
        xmlSpace="preserve"
        width={size}
        height={size}
      >
        <ellipse
          style={{
            fill: "#E21B1B",
          }}
          cx={256}
          cy={256}
          rx={256}
          ry={255.832}
        />
        <g>
          <rect
            x={228.021}
            y={113.143}
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0178 256.0051)"
            style={{
              fill: "#FFFFFF",
            }}
            width={55.991}
            height={285.669}
          />
          <rect
            x={113.164}
            y={227.968}
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0134 255.9885)"
            style={{
              fill: "#FFFFFF",
            }}
            width={285.669}
            height={55.991}
          />
        </g>
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
      </svg>
    );
  }
};

export default ConfirmIcon;
