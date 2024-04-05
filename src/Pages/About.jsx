import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { pages } from "./config";

function About() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="background">
        <div className="box">
          <div
            className="home-content"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <h1 style={{ textAlign: "center" }}>
              Welcome to SkyView Weather - your window to the skies. Explore
              weather forecasts with precision and ease.
            </h1>
            <p>
              SkyView Weather isn't just an application; it's your personal
              gateway to the skies. Born from a passion for technology and
              meteorology, SkyView Weather aims to deliver accurate, accessible,
              and aesthetically pleasing weather forecasts to users worldwide.
              Our Mission is simple: to demystify the weather, making forecast
              data easy to understand and accessible for everyone.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
