import { useEffect, useState } from "react";

const growlerStyle = {
  fontFamily:
    "HelveticaNeueBold, HelveticaNeue-Bold, Helvetica Neue Bold, HelveticaNeue, Helvetica Neue, Helvetica, Arial, sans-serif",
  fontWeight: 700,
  color: "#252525",
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  background: "none",
  zIndex: 300,
  width: "496px",
};

const pStyle = {
  fontSize: "24px",
  padding: "0px 10px",
  boxSizing: "border-box",
  MozBoxSizing: "border-box",
  WebkitBoxSizing: "border-box",
  lineHeight: "34px",
  margin: 0,
  wordWrap: "break-word",
};

const aStyle = {
  fontFamily:
    "HelveticaNeueBold, HelveticaNeue-Bold, Helvetica Neue Bold, HelveticaNeue, Helvetica Neue, Helvetica, Arial, sans-serif",
  fontWeight: 700,
  color: "#252525",
};

const baseStyle = {
  background: "#e8f7fd",
  border: "1px solid #b2c8d7",
  position: "relative",
  borderRadius: "5px",
  margin: "0 0 15px 0",
  padding: "10px",
  minHeight: "92px",
  boxSizing: "border-box",
  MozBoxSizing: "border-box",
  WebkitBoxSizing: "border-box",
  WebkitBoxShadow:
    "0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 20px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.2)",
  boxShadow:
    "0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 20px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.2)",
  display: "flex",
};

const fadeInStyle = {
  WebkitAnimation: "fadein 2s linear forwards",
  animation: "fadein 2s linear forwards",
};

const fadeOutStyle = {
  WebkitAnimation: "fadeout 2s linear forwards",
  animation: "fadeout 2s linear forwards",
};

const linkHref =
  "https://streaklinks.com/BjCle1pcXCijz1DHhQigjuyu/https%3A%2F%2Fcommercial-site-git-redesign-2022-2-camayak.vercel.app%2Fdemo";

function SubmittedMessage(props) {
  const { actor, target } = props;
  return (
    <div style={{ flexGrow: 1, alignSelf: "flex-start" }}>
      <p style={pStyle}>
        {actor} submitted{" "}
        <a style={aStyle} href={linkHref}>
          {target}
        </a>
      </p>
    </div>
  );
}

function CommentedMessage(props) {
  const { actor, target } = props;
  return (
    <p style={pStyle}>
      {actor} commented on{" "}
      <a style={aStyle} href={linkHref}>
        {target}
      </a>
    </p>
  );
}

function UploadedMessage(props) {
  const { actor, target } = props;
  return (
    <>
      <div style={{ flexGrow: 1, alignSelf: "flex-start" }}>
        <p style={pStyle}>{actor} uploaded a photo</p>
      </div>
      <div style={{ alignSelf: "center" }}>
        <img src={target} height="64" width="64" />
      </div>
    </>
  );
}

function DeadlineMessage(props) {
  const { actor, target } = props;
  return (
    <p style={pStyle}>
      {actor} changed the deadline for{" "}
      <a style={aStyle} href={linkHref}>
        {target}
      </a>
    </p>
  );
}

function ConvertedMessage(props) {
  const { actor, target, object } = props;
  return (
    <p style={pStyle}>
      {actor} converted {object}'s pitch into{" "}
      <a style={aStyle} href={linkHref}>
        {target}
      </a>
    </p>
  );
}

function Growl(props) {
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
    // The timeout is 2 seconds for the fadein, then 3 seconds for the hold
    const timer = setTimeout(() => fadeOut(), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      style={
        isFadingOut
          ? { ...baseStyle, ...fadeOutStyle }
          : { ...baseStyle, ...fadeInStyle }
      }
    >
      <div style={{ alignSelf: "center" }}>
        <img src={avatarUrl} width="64" height="64" className="avatar" />
      </div>
      {message}
    </div>
  );
}

const growlScript = [
  {
    id: 0,
    avatarUrl: "https://my.camayak.com/i/avatars/35.png?thumbnail=true",
    message: <SubmittedMessage actor="Emma" target="case-study-puma" />,
  },
  {
    id: 1,
    avatarUrl: "https://my.camayak.com/i/avatars/35.png?thumbnail=true",
    message: (
      <UploadedMessage actor="Camden" target="/growls/bright_green_frog.jpg" />
    ),
  },
  {
    id: 2,
    avatarUrl: "https://my.camayak.com/i/avatars/35.png?thumbnail=true",
    message: <CommentedMessage actor="Audrey" target="Nutrition blog" />,
  },
  {
    id: 3,
    avatarUrl: "https://my.camayak.com/i/avatars/35.png?thumbnail=true",
    message: <DeadlineMessage actor="Mark" target="breakingnews.campus" />,
  },
  {
    id: 4,
    avatarUrl: "https://my.camayak.com/i/avatars/35.png?thumbnail=true",
    message: (
      <ConvertedMessage
        actor="Tom"
        object="Johanna"
        target="intercom product review"
      />
    ),
  },
  {
    id: 5,
    avatarUrl: "https://my.camayak.com/i/avatars/35.png?thumbnail=true",
    message: (
      <UploadedMessage actor="Lindsay" target="/growls/football_crowd.jpg" />
    ),
  },
  {
    id: 6,
    avatarUrl: "https://my.camayak.com/i/avatars/35.png?thumbnail=true",
    message: <CommentedMessage actor="Elizabeth" target="AI feature launch" />,
  },
];

export default function Growls({ children }) {
  const [playing, setPlaying] = useState(false);
  const [activeGrowl, setActiveGrowl] = useState();
  const [index, setIndex] = useState(0);

  const pause = 1000;

  const showGrowl = () => {
    setActiveGrowl(growlScript[index]);
    setIndex((index) => (index < growlScript.length - 1 ? index + 1 : 0));
  };

  useEffect(() => {
    const timer = setTimeout(() => showGrowl(), pause);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div style={growlerStyle}>
      {activeGrowl && (
        <Growl
          key={activeGrowl.id}
          avatarUrl={activeGrowl.avatarUrl}
          message={activeGrowl.message}
          removeItem={() => {
            console.log("Clearing Active Growl");
            setActiveGrowl();
            setTimeout(() => showGrowl(), pause);
          }}
        />
      )}
    </div>
  );
}
