import React from "react";

import "../styles/footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="division29594 footer">
        <div
          className="division54509"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingLeft: "16px",
          }}
        >
          <h1 className="text71366">write us</h1>
          <textarea
            type="text"
            className="textarea70571"
            placeholder="Your Text"
            defaultValue={""}
          />
          <input
            type="text"
            className="input80863"
            placeholder="Your Text"
            style={{ marginBottom: "5px", borderColor: "rgb(250, 250, 250)" }}
          />
          <input
            type="text"
            className="input80863"
            placeholder="Your Text"
            style={{ borderColor: "rgb(255, 255, 255)" }}
          />
          <button className="button22257">send</button>
        </div>
        <div className="division54509">
          <h1 className="text71366">site map</h1>
          <div className="division45671">
            <div className="division74811" />
            <p
              className="paragraph15422"
              style={{ textTransform: "capitalize" }}
            >
              home
            </p>
          </div>
          <div className="division45671">
            <div className="division74811" />
            <p
              className="paragraph15422"
              style={{ textTransform: "capitalize" }}
            >
              community
            </p>
          </div>
          <div className="division45671">
            <div className="division74811" />
            <p
              className="paragraph15422"
              style={{ textTransform: "capitalize" }}
            >
              privacy
            </p>
          </div>
          <div className="division45671">
            <div className="division74811" />
            <p
              className="paragraph15422"
              style={{ textTransform: "capitalize" }}
            >
              support
            </p>
          </div>
          <div className="division45671">
            <div className="division74811" />
            <p
              className="paragraph15422"
              style={{ textTransform: "capitalize" }}
            >
              carrear
            </p>
          </div>
          <div className="division45671">
            <div className="division74811" />
            <p
              className="paragraph15422"
              style={{ textTransform: "uppercase" }}
            >
              api
            </p>
          </div>
          <div className="division45671">
            <div className="division74811" />
            <p
              className="paragraph15422"
              style={{ textTransform: "capitalize" }}
            >
              login
            </p>
          </div>
        </div>
        <div className="division54509">
          <h1 className="text71366">folow us on:</h1>
          <div className="division79728">
            <div
              className="division54273"
              style={{ backgroundColor: "rgb(0, 38, 255)" }}
            />
            <div
              className="division54273"
              style={{ backgroundColor: "rgb(61, 71, 128)" }}
            />
            <div
              className="division54273"
              style={{ backgroundColor: "rgb(139, 42, 184)" }}
            />
            <div
              className="division54273"
              style={{ backgroundColor: "rgb(184, 169, 42)" }}
            />
          </div>
        </div>
      </footer>
    </>
  );
};
