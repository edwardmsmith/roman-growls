import { useState } from "react";
import Growl from "./Growl";

const growlerStyle = {
  fontFamily:
    "HelveticaNeueBold, HelveticaNeue-Bold, Helvetica Neue Bold, HelveticaNeue, Helvetica Neue, Helvetica, Arial, sans-serif",
  fontWeight: 700,
  color: "#252525",
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  background: "none",
  zIndex: 300,
  width: "496px"
};

const pStyle = {
  fontSize: "24px",
  padding: "0 16px 0 54px",
  boxSizing: "border-box",
  MozBoxSizing: "border-box",
  WebkitBoxSizing: "border-box",
  lineHeight: "34px",
  margin: 0,
  wordWrap: "break-word"
};

const aStyle = {
  fontFamily:
    "HelveticaNeueBold, HelveticaNeue-Bold, Helvetica Neue Bold, HelveticaNeue, Helvetica Neue, Helvetica, Arial, sans-serif",
  fontWeight: 700,
  color: "#252525"
};

const linkHref =
  "https://streaklinks.com/BjCle1pcXCijz1DHhQigjuyu/https%3A%2F%2Fcommercial-site-git-redesign-2022-2-camayak.vercel.app%2Fdemo";

function SubmittedMessage(props) {
  const { actor, target } = props;
  return (
    <p style={pStyle}>
      {actor} submitted{" "}
      <a style={aStyle} href={linkHref}>
        {target}
      </a>
    </p>
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
    <p style={pStyle}>
      {actor} uploaded a photo <img src={target} />
    </p>
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
      {actor} Tom converted {object}'s pitch into{" "}
      <a style={aStyle} href={linkHref}>
        {target}
      </a>
    </p>
  );
}

const growlScript = [
  {
    id: 0,
    avatarUrl: "https://my.camayak.com/i/avatars/35.png?thumbnail=true",
    message: <SubmittedMessage actor="Emma" target="case-study-puma" />
  },
  {
    id: 1,
    avatarUrl: "https://my.camayak.com/i/avatars/35.png?thumbnail=true",
    message: <UploadedMessage actor="Camden" target="case-study-puma" />
  }
];

export default function Growls({ children }) {
  const [growls, setGrowls] = useState([]);
  const [index, setIndex] = useState(0);
  let button = "";

  if (index < growlScript.length) {
    button = (
      <button
        className="button-add"
        onClick={() => {
          setGrowls([...growls, growlScript[index]]);
          setIndex((index) => index + 1);
        }}
      >
        Add growl
      </button>
    );
  }

  return (
    <div style={growlerStyle}>
      {growls.map((growl) => (
        <Growl
          key={growl.id}
          avatarUrl={growl.avatarUrl}
          message={growl.message}
          removeItem={() =>
            setGrowls(growls.filter((itemInner) => itemInner.id !== growl.id))
          }
        />
      ))}

      {button}
      {index}
    </div>
  );
}
