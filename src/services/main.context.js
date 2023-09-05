// ChatContext.js

import React, { createContext, useState, useEffect } from "react";

import { MockUsers, FavouriteArchives, chattings } from "./mock.data";
import {
  ChatRequests,
  CreateChat,
  fetchUsers,
  GetChatArchives,
  PendingRequests,
  GetChatidChats,
  PoolChat,
  SendSeenStatus,
  LoginUser,
} from "./main.service";

// Create the context

export const MainContext = createContext();

// Create a provider component
export const MainProvider = ({ children }) => {
  const [chat, setChat] = useState([]);
  const [activeChats, setActiveChats] = useState([]);
  const [currentUser, setcurrentUser] = useState();
  const [ActiveCArchive, setActiveCArchive] = useState();
  const [ExecutedPoll, setExecutedPoll] = useState(false);
  // these are data containers
  const [SearchUsersVal, setSearchUsersVal] = useState([]);
  const [RequestsVal, setRequestsVal] = useState([]);
  const [PendingRequestsVal, setPendingRequestsVal] = useState([]);
  const [ChatArchives, setChatArchives] = useState([]);
  const [StoredMessages, setStoredMessages] = useState([]);

  // this useEffect will handle all kind of changes in ChatArchives and update itself
  useEffect(() => {
    if (ChatArchives.length) {
      ChatArchives.forEach((x) => {
        if (StoredMessages.length) {
          StoredMessages.forEach((y) => {
            if (x.chatid === y.chatid) {
            } else {
              let tempsingledemo = {
                id: StoredMessages.length + 1,
                chatid: x.chatid,
                chats: [],
              };
              GetChatidChats(x.chatid).then((response) => {
                tempsingledemo.chats = response;
                setStoredMessages([...StoredMessages, tempsingledemo]);
              });
            }
          });
        } else {
          let tempsingledemo = {
            id: StoredMessages.length + 1,
            chatid: x.chatid,
            chats: [],
          };
          GetChatidChats(x.chatid).then((response) => {
            tempsingledemo.chats = response;
            setStoredMessages([...StoredMessages, tempsingledemo]);
          });
        }
      });
    }
    return;
  }, [ChatArchives, StoredMessages]);

  useEffect(() => {
    if (currentUser && StoredMessages.length && !ExecutedPoll) {
      const PollMaker = () => {
        setExecutedPoll(true);
        PoolChat(currentUser.userid)
          .then((data) => {
            PollMaker();
            if (data.length) {
              let tempStoredData = [...StoredMessages];

              let findExactArchive = tempStoredData.find(
                (x) => x.chatid === data[0].chatid
              );
              findExactArchive.chats.push(data[0]);

              setStoredMessages(tempStoredData);
              if (ActiveCArchive) {
                SendSeenStatus(ActiveCArchive.userid, ActiveCArchive.chatid);
              }
            }
          })
          .catch((err) => {
            PollMaker();
          });

        // inside of the same pollmake i would like to make another request too of get seen chat requests
      };

      PollMaker();
    }
  }, [StoredMessages.length, ExecutedPoll, currentUser]);

  let meuser = {
    id: 21,
    name: "Yakraj Pariyar",
    desig: "Fullstack Developer",
    email: "contact@yakraj.com",
    address: "Mumbai india",
    cover: "https://picsum.photos/200.jpg",
    avatar: "https://picsum.photos/200.jpg",
    online: true,
    userid: "Yakr1992llroso14",
  };

  useEffect(() => {
    // setcurrentUser(meuser);
    if (currentUser) {
      ChatRequests(meuser.userid, setRequestsVal);
      PendingRequests(meuser.userid, setPendingRequestsVal);
      GetChatArchives(meuser.userid).then((requests) => {
        setChatArchives(requests);
      });
    }
  }, []);

  const AciveChat = (data) => {
    setActiveCArchive(data);
    SendSeenStatus(data.userid, data.chatid);
  };

  // Add a new chat message
  const addChatMessage = (message) => {
    setChat((prevChat) => [...prevChat, message]);
  };

  // this is message function for create message

  const SendMessage = (data) => {
    let tempChat = {
      id: 1,
      userfrom: "Alice",
      userto: "Thomas",
      textmsg: "Hey Bob, how are you?",
      imagemsg: "",
      viewed: true,
      date: "2023-07-10",
    };
  };

  const Searchusers = (user) => {
    setSearchUsersVal([]);
    fetchUsers(user, setSearchUsersVal);
  };

  const SingleChatCreate = (data) => {
    let tempdata = {
      id: 1,
      userfrom: "Alice",
      userto: "Thomas",
      textmsg: "Hey Bob, how are you?",
      imagemsg: "",
      seen: true,
      date: "2023-07-10",
    };
    let id =
      StoredMessages.find((x) => x.chatid === data.chatid).chats.length + 1;

    tempdata.id = id;
    tempdata.userfrom = data.userfrom;
    tempdata.userto = data.userto;
    tempdata.textmsg = data.chattext;
    tempdata.date = new Date();
    tempdata.chatid = data.chatid;
    tempdata.delivery = false;
    tempdata.messageid = data.messageid;
    tempdata.seen = false;
    // this is clone of the stored chatdata
    let ClonedStorage = [...StoredMessages];
    data.inputData("");

    ClonedStorage.find((x) => x.chatid === data.chatid).chats.push(tempdata);
    setStoredMessages(ClonedStorage);
    CreateChat(data).then((response) => {
      let finder = response.some((x) => x.chatid);

      if (finder) {
        let tempStoreMsg = [...StoredMessages];
        let chatss = tempStoreMsg.find(
          (x) => x.chatid === response[0].chatid
        ).chats;
        if (chatss) {
          chatss.find(
            (y) => y.messageid === response[0].messageid
          ).delivery = true;
        }
        setStoredMessages(tempStoreMsg);
      }
    });
  };

  // here we will handle user crediantials

  const UserLogin = (umail, pass, setgoback) => {
    LoginUser(umail, pass)
      .then((Credential) => {
        if (Credential.length) {
          console.log(Credential);
          setcurrentUser(Credential[0]);
          setgoback(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <MainContext.Provider
      value={{
        chat,
        addChatMessage,
        MockUsers,
        activeChats,
        currentUser,
        AciveChat,
        ActiveCArchive,
        SendMessage,
        Searchusers,
        SearchUsersVal,
        RequestsVal,
        SingleChatCreate,
        PendingRequestsVal,
        ChatArchives,
        StoredMessages,
        UserLogin,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
