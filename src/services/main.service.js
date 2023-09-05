import { Server } from "./servers";

// this will handle single user data call

export const SingleUser = (user) => {
  return fetch(Server + "singleuser", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: user }),
  }).then((response) => response.json());
};

export const fetchUsers = (user, setval) => {
  fetch(Server + "searchuser", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: user }),
  })
    .then((response) => response.json())
    .then((data) => setval(data))
    .catch((err) => console.log(err));
};

export const ReqConnect = (data) => {
  const { reqfrom, reqto, message } = data;

  fetch(Server + "chatreq", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      reqfrom: reqfrom,
      reqto: reqto,
      message: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {})
    .catch((err) => console.log(err));
};

// this service is for to get all chat requests to me

export const ChatRequests = (user, setval) => {
  fetch(Server + "chatrequests", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userid: user }),
  })
    .then((response) => response.json())
    .then((requests) => setval(requests));
};
// this service is dedicated for to find all the pending requests
export const PendingRequests = (user, setval) => {
  fetch(Server + "pending/chatrequests", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userid: user }),
  })
    .then((response) => response.json())
    .then((requests) => setval(requests));
};

// this is very special and main component of the app is accept request and crete ChatArchive
export const AcceptRequest = (reqfrom, reqto, reqid) => {
  fetch(Server + "connectio/accept-chat-req", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reqfrom: reqfrom, reqto: reqto, reqid: reqid }),
  })
    .then((response) => response.json())
    .then((requests) => console.log(requests));
};

// it will handle all chatarchive data
export const GetChatArchives = (user) => {
  return fetch(Server + "chatarchive", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: user }),
  }).then((response) => response.json());
};

// the place where chats will be created

export const CreateChat = (data) => {
  return fetch(Server + "createchat", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userfrom: data.userfrom,
      userto: data.userto,
      textmsg: data.chattext,
      imagemsg: data.imagemsg && data.imagemsg,
      chatid: data.chatid,
      messageid: data.messageid && data.messageid,
    }),
  }).then((response) => response.json());
};

// it will request all chats form single chatid

export const GetChatidChats = (chatid) => {
  return fetch(Server + "getchats", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chatid: chatid,
    }),
  }).then((response) => response.json());
};

export const PoolChat = (userid) => {
  return fetch(Server + "getpollchats", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userid: userid,
    }),
  }).then((response) => response.json());
};
// this function handles chat seen methods, either message gets from
//  poll and active is same as got from poll
export const SendSeenStatus = (userid, chatid) => {
  fetch(Server + "crete/chats/seen-send/status", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userid: userid,
      chatid: chatid,
    }),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

// this function will handle crediantials
// firstly here we will go for login

export const LoginUser = (umail, pass) => {
  return fetch(Server + "login", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      umail: umail,
      pass: pass,
    }),
  }).then((response) => response.json());
};
