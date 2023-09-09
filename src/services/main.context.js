// ChatContext.js

import React, { createContext, useState, useEffect, useRef } from "react";

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
  SendOnlineStatus,
  GetOnlineStatus,
  SendSeenData,
  ReqSeenData,
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

  //these are some updater for useeffect
  const StorageMRef = useRef();
  const ActiveArchiveRef = useRef();

  // this useEffect will handle all kind of changes in ChatArchives and update itself
  useEffect(() => {
    StorageMRef.current = StoredMessages;
  }, [StoredMessages]);
  // it will do the same like previous code but update another one
  useEffect(() => {
    ActiveArchiveRef.current = ActiveCArchive;
  }, [ActiveCArchive]);

  // this useeffect will send my
  useEffect(() => {
    if (currentUser) {
      setInterval(() => {
        SendOnlineStatus(currentUser.userid);
      }, 60000);
    }
  }, [currentUser]);

  // from the live runner it will get updted seen data and set it to the stored messages

  useEffect(() => {
    if (currentUser) {
      function CreateSeenRq() {
        ReqSeenData(currentUser.userid).then((data) => {
          // console.log(data);

          if (data.length && Array.isArray(data)) {
            let tempStorage = [...StorageMRef.current];

            data.forEach((x) => {
              let findChatA = tempStorage.find((y) => y.chatid === x.chatid);
              let findchats = findChatA.chats.filter(
                (msg) => msg.userfrom === data.userid
              );
              console.log(findchats);
            });
          }
          setTimeout(() => {
            CreateSeenRq();
          }, 3000);
        });
      }
      CreateSeenRq();
    }
  }, [currentUser]);

  // and this useEffect will find all changes and get partner status in each 1.5 minutes
  useEffect(() => {
    const AllusersStatus = () => {
      let tempUsers = [];
      ChatArchives.forEach((x) => {
        tempUsers.push(x.userid);
      });

      GetOnlineStatus(tempUsers).then((data) => {
        let tempArchives = [...ChatArchives];
        if (data.length && Array.isArray(data)) {
          data.forEach((sts) => {
            let findexist = tempArchives.find(
              (exst) => exst.userid === sts.userid
            );
            findexist.online = sts.online;
          });
          setChatArchives(tempArchives);
        }
      });
    };

    if (ChatArchives.length) {
      setInterval(() => {
        AllusersStatus();
      }, 90000);
    }
  }, [ChatArchives.length]);
  useEffect(() => {
    if (ChatArchives.length) {
      ChatArchives.forEach((x) => {
        if (StorageMRef.current.length) {
          let findThischat = StorageMRef.current.find(
            (y) => x.chatid === y.chatid
          );
          if (!findThischat) {
            let tempsingledemo = {
              id: StorageMRef.current.length + 1,
              chatid: x.chatid,
              chats: [],
            };
            GetChatidChats(x.chatid)
              .then((response) => {
                tempsingledemo.chats = response;
                setStoredMessages([...StorageMRef.current, tempsingledemo]);
              })
              .catch((err) => console.log(err));
          }
        } else {
          let tempsingledemo = {
            id: StorageMRef.current.length + 1,
            chatid: x.chatid,
            chats: [],
          };
          GetChatidChats(x.chatid).then((response) => {
            tempsingledemo.chats = response;
            setStoredMessages([...StorageMRef.current, tempsingledemo]);
          });
        }
      });
    }
    return;
  }, [ChatArchives.length]);

  useEffect(() => {
    if (currentUser && !ExecutedPoll) {
      const PollMaker = () => {
        setExecutedPoll(true);
        PoolChat(currentUser.userid)
          .then((data) => {
            PollMaker();
            //here after getting response send seen status of any message
            SendSeenData(
              ActiveArchiveRef.current.userid,
              ActiveArchiveRef.current.chatid
            );

            if (data.length) {
              let tempStoredData = [...StorageMRef.current];

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
  }, [ExecutedPoll, currentUser]);

  useEffect(() => {
    if (currentUser) {
      ChatRequests(currentUser.userid, setRequestsVal);
      PendingRequests(currentUser.userid, setPendingRequestsVal);
      GetChatArchives(currentUser.userid).then((requests) => {
        setChatArchives(requests);
      });
    }
  }, [currentUser]);

  const AciveChat = (data) => {
    setActiveCArchive(data);
    SendSeenData(data.chatid, data.userid);
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
          // console.log(Credential);
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
