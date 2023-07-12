import React, { useState } from "react";

export const CommunityPer = () => {
  const [showPending, setShowPending] = useState(false);
  const [activeCommunityType, setActiveCommunityType] = useState("requests");
  const PendingCard = () => {
    return (
      <div className="division44297" style={{ height: "210px", margin: "5px" }}>
        <div className="division53176"></div>
        <div className="division69090"></div>
        <h1 className="text80594">yakraj pariyar</h1>
        <div className="archive-address">
          <img
            src={require("../../assects/location.png")}
            className="image72541"
            alt="custom"
          />
          <p className="paragraph88375">mumbai Maharashtra</p>
        </div>
        <div className="last-send-req-message">
          <img
            src={require("../../assects/chat.png")}
            className="image67949"
            alt="custom"
          />
          <p className="paragraph42157">
            hello there i'm yakraj pariyar from dynamic, our organization gave
            me your username for chat.
          </p>
        </div>
        <div className="division51510">
          <button
            className="button20350"
            style={{
              borderRadius: "25px",
              padding: "4px 15px",
              width: "auto",
              backgroundColor: "rgb(95, 110, 153)",
            }}
          >
            cancel
          </button>
          <button className="requested-date-button">07/06/2023</button>
        </div>
      </div>
    );
  };

  const SearchResultCard = () => {
    return (
      <div className="division44297" style={{ height: "210px", margin: "5px" }}>
        <div className="division53176"></div>
        <div className="division69090"></div>
        <h1 className="text80594">yakraj pariyar</h1>
        <div className="archive-address">
          <img
            src={require("../../assects/location.png")}
            className="image72541"
            alt="custom"
          />
          <p className="paragraph88375">mumbai Maharashtra</p>
        </div>
        <input
          type="text"
          className="input72282"
          placeholder="Type your message"
        />
        <button
          className="button20350"
          style={{
            borderRadius: "10px",
            padding: "4px",
            width: "80%",
            backgroundColor: "rgb(113, 145, 235)",
          }}
        >
          send Request
        </button>
      </div>
    );
  };

  const IncomingRequestCard = () => {
    return (
      <div className="division44297" style={{ height: "200px", margin: "5px" }}>
        <div className="division53176"></div>
        <div className="division69090"></div>
        <h1 className="text80594">yakraj pariyar</h1>
        <div className="archive-address">
          <img
            src={require("../../assects/location.png")}
            className="image72541"
            alt="custom"
          />
          <p className="paragraph88375">mumbai Maharashtra</p>
        </div>
        <div className="division51510">
          <button
            className="button20350"
            style={{
              borderRadius: "25px",
              padding: "4px 15px",
              width: "auto",
              backgroundColor: "rgb(113, 145, 235)",
            }}
          >
            accept
          </button>
          <button
            className="button20350"
            style={{
              borderRadius: "25px",
              padding: "4px 15px",
              width: "auto",
              backgroundColor: "rgb(113, 145, 235)",
            }}
          >
            reject
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="division15470">
        <p className="heading-text">Community</p>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="input27068"
          placeholder="Type your message"
        />
        <img
          width="25px"
          src={require("../../assects/search.png")}
          className="image35932"
          alt="custom"
        />
      </div>
      <div className="division34074" style={{ top: "33px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "0 10px",
            boxSizing: "border-box",
            marginTop: "10px",
          }}
        >
          <h1
            style={{
              color: activeCommunityType === "results" ? "green" : "grey",
              fontWeight: activeCommunityType === "results" ? "bold" : "normal",
            }}
            onClick={() => setActiveCommunityType("results")}
            className="text20358"
          >
            Results
          </h1>
          <h1
            style={{
              color: activeCommunityType === "requests" ? "green" : "grey",
              fontWeight:
                activeCommunityType === "requests" ? "bold" : "normal",
            }}
            onClick={() => setActiveCommunityType("requests")}
            className="text20358"
          >
            Requests
          </h1>
          <h1
            style={{
              color: activeCommunityType === "pending" ? "green" : "grey",
              fontWeight: activeCommunityType === "pending" ? "bold" : "normal",
            }}
            onClick={() => setActiveCommunityType("pending")}
            className="text20358"
          >
            Pending
          </h1>
        </div>
        <hr
          style={{
            width: "100%",
            backgroundColor: "green",
            margin: "0px",
          }}
        />
      </div>
      {/* this is going to be the search results cards contianer */}

      {activeCommunityType === "results" && (
        <div className="search-result-container">
          <SearchResultCard />
          <SearchResultCard />
        </div>
      )}

      {/* it is going to be the pending cards container */}
      {activeCommunityType === "pending" && (
        <div className="search-result-container">
          <PendingCard />
          <PendingCard />
          <PendingCard />
        </div>
      )}

      {/* it is going to be the incoming requests card container */}
      {activeCommunityType === "requests" && (
        <div className="requests-container">
          <IncomingRequestCard />
          <IncomingRequestCard />
          <IncomingRequestCard />
          <IncomingRequestCard />
          <IncomingRequestCard />
        </div>
      )}
    </>
  );
};
