import React from "react";
import Lottie from "lottie-react";
import "./loader.css";
import loadingAnimation from "../../assets/LoadingAnimation.json";

export const Loader = () => {
  return (
    <>
        <div>
            <div className="loader">
                <div className="dot"></div>
            </div>
            <div className="loader">
                <div className="dot"></div>
            </div>
            <div className="loader">
                <div className="dot"></div>
            </div>
            <div className="loader">
                <div className="dot"></div>
            </div>
            <div className="loader">
                <div className="dot"></div>
            </div>
            <div className="loader">
                <div className="dot"></div>
            </div>
        </div>
    </>
  );
};
