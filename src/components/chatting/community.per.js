import React, { useState, useContext, useEffect } from "react";
import { MainContext } from "../../services/main.context";
import {
  AcceptRequest,
  CancelRequest,
  ReqConnect,
  SingleUser,
} from "../../services/main.service";
import { Loader } from "../loader";
import { Empty } from "../nothing";

export const CommunityPer = () => {
  const [showPending, setShowPending] = useState(false);
  const [activeCommunityType, setActiveCommunityType] = useState("requests");
  const [typingTimer, setTypingTimer] = useState();

  // here i'l utilizing useContext
  const {
    Searchusers,
    SearchUsersVal,
    currentUser,
    RequestsVal,
    PendingRequestsVal,
    setPendingRequestsVal,
    setChatArchives,
    setRequestsVal,loadingSearch
  } = useContext(MainContext);

  const handleChange = (e) => {
    clearTimeout(typingTimer);

    setTypingTimer(
      setTimeout(() => {
        if (e.target.value.length >= 3) {
          Searchusers(e.target.value);
          setActiveCommunityType("results");
        } else {
          if (e.target.value.length > 0) {
            window.alert("user details must be more than 3 characters");
          }
        }
      }, 500),
    );
  };

  const PendingCard = ({ data }) => {
    return (
      <div className="division44297" style={{ margin: "5px" }}>
        <div
          style={{
            backgroundImage: `url(${data.cover})`,
          }}
          className="division53176"
        ></div>
        <div
          style={{
            backgroundImage: `url(${data.avatar})`,
          }}
          className="division69090"
        ></div>
        <h1 className="text80594">{data.name}</h1>
        <h2 className="text80595">{data.desig}</h2>
        <div className="archive-address">
          <img
            src={require("../../assects/location.png")}
            className="image72541"
            alt="custom"
          />
          <p className="paragraph88375">{data.address}</p>
        </div>
        <div className="last-send-req-message">
          <img
            src={require("../../assects/chat.png")}
            className="image67949"
            alt="custom"
          />
          <p className="paragraph42157">{data.message}</p>
        </div>
        <div className="division51510">
          <button
            onClick={() =>
              CancelRequest(data.reqid, data.reqfrom, setPendingRequestsVal)
            }
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
          <button className="requested-date-button">
            {data.date.substring(0, 10)}
          </button>
        </div>
      </div>
    );
  };

  const SearchResultCard = ({ data }) => {
    const [ReqMessage, setReqMessage] = useState("");

    const SendReq = () => {
      // console.log("you can create req now");
      ReqConnect(
        {
          reqfrom: currentUser.userid,
          reqto: data.userid,
          message: ReqMessage,
        },
        setPendingRequestsVal,
      );
    };

    return PendingRequestsVal.some((x) => x.reqto === data.userid) ||
      RequestsVal.some((x) => x.reqfrom === data.userid) ||
      currentUser.userid === data.userid ? null : (
      <div
        className="division44297"
        style={{ height: "auto", paddingBottom: "15px", margin: "5px" }}
      >
        <div
          style={{ backgroundImage: `url(${data.cover})` }}
          className="division53176"
        ></div>
        <div
          style={{ backgroundImage: `url(${data.avatar})` }}
          className="division69090"
        ></div>
        <h1 className="text80594">{data.name}</h1>

        <h2 className="text80595">{data.desig}</h2>
        <div className="archive-address">
          <img
            src={require("../../assects/location.png")}
            className="image72541"
            alt="custom"
          />
          <p className="paragraph88375">{data.address}</p>
        </div>
        <textarea
          onChange={(e) => setReqMessage(e.target.value)}
          placeholder="Your Mesage Here..."
          className="reqchattext"
        ></textarea>
        <button
          className="button20350"
          onClick={() => SendReq()}
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

  const IncomingRequestCard = ({ data }) => {
    return (
      <div className="division44297" style={{ height: "auto", margin: "5px" }}>
        <div
          style={{
            backgroundImage: `url(${data.cover})`,
          }}
          className="division53176"
        ></div>
        <div
          style={{
            backgroundImage: `url(${data.avatar})`,
          }}
          className="division69090"
        ></div>
        <h1 className="text80594">{data.name}</h1>

        <h2 className="text80595">{data.desig}</h2>
        <div className="archive-address">
          <img
            src={require("../../assects/location.png")}
            className="image72541"
            alt="custom"
          />
          <p className="paragraph88375">{data.address}</p>
        </div>
        <div className="last-send-req-message">
          <img
            src={require("../../assects/chat.png")}
            className="image67949"
            alt="custom"
          />
          <p className="paragraph42157">{data.message}</p>
        </div>
        <div className="division51510">
          <button
            onClick={() => {
              AcceptRequest(
                data.reqfrom,
                data.reqto,
                data.reqid,
                setChatArchives,
                [data, RequestsVal, setRequestsVal],
              );
            }}
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
          onChange={handleChange}
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
          {SearchUsersVal.length ?
            SearchUsersVal.map((x, i) => {
              return <SearchResultCard key={i} data={x} />;
            }) : loadingSearch ? <Loader width = "5em" /> :(
              <Empty width="20em" />
            )}
        </div>
      )}

      {/* it is going to be the pending cards container */}
      {activeCommunityType === "pending" && (
        <div className="search-result-container">
          {PendingRequestsVal.length ? (
            PendingRequestsVal.map((x, i) => {
              return <PendingCard data={x} key={i} />;
            })
          ) : (
            <Empty width="20em" />
          )}
        </div>
      )}

      {/* it is going to be the incoming requests card container */}
      {activeCommunityType === "requests" && (
        <div className="requests-container">
          {RequestsVal.length ?
            RequestsVal.map((x, i) => {
              return <IncomingRequestCard data={x} key={i} />;
            }): (
              <Empty width="20em" />
            )}
        </div>
      )}
    </>
  );
};
