import { assets } from "../../assets/assets";
import "./AppDownload.css";

export default function AppDownload() {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience <br /> Tomato App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Play Store Image" />
        <img src={assets.app_store} alt="App Store Image" />
      </div>
    </div>
  );
}
