import { ChatBox } from "../../components/ChatBox";
import { LeftSideBar } from "../../components/LeftSideBar";
import { RightSideBar } from "../../components/RightSideBar";
import "./Chat.css";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-container">
        <LeftSideBar />
        <ChatBox />
        <RightSideBar />
      </div>
    </div>
  );
};

export { Chat };
