import { useState, useEffect } from "react";

const baseStyle = {
  background: "#e8f7fd",
  border: "1px solid #b2c8d7",
  position: "relative",
  borderRadius: "5px",
  margin: "0 0 15px 0",
  padding: "5px 0",
  minHeight: "92px",
  boxSizing: "border-box",
  MozBoxSizing: "border-box",
  WebkitBoxSizing: "border-box",
  WebkitBoxShadow:
    "0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 20px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.2)",
  boxShadow:
    "0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 20px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.2)"
};

const fadeInStyle = {
  WebkitAnimation: "fadein 2s linear forwards",
  animation: "fadein 2s linear forwards"
};

const fadeOutStyle = {
  WebkitAnimation: "fadeout 2s linear forwards",
  animation: "fadeout 2s linear forwards"
};

export default function Growl(props) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const { avatarUrl, message } = props;

  const fadeOut = (cb) => {
    setIsFadingOut(true);
    setTimeout(() => handleRemoveItem(), 2000);
  };

  const handleRemoveItem = () => {
    props.removeItem();
    setIsFadingOut(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => fadeOut(), 3000);
  }, []);

  return (
    <div
      style={
        isFadingOut
          ? { ...baseStyle, ...fadeOutStyle }
          : { ...baseStyle, ...fadeInStyle }
      }
    >
      <span
        style={{
          position: "absolute",
          left: "5px",
          width: "40px",
          height: "40px",
          lineHeight: "40px",
          backgroundImage: `url(${avatarUrl})`
        }}
        className="avatar"
      ></span>
      {message}
    </div>
  );
}
