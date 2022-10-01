import React from "react";
import qrcode from "./images/image-qr-code.png";

export default function App(props) {
  return (
    <div className="App">
      <div id={"card"}>
        <div id={"qrcode"}>
          <img src={qrcode} alt="QRCode" />
        </div>
        <div id={"title"}>
          Improve your front-end skills by building projects
        </div>
        <div id={"subtitle"}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </div>
      </div>
    </div>
  );
}
