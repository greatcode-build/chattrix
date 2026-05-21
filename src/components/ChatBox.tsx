import { BookImage, Info, Send } from "lucide-react";
import "./ChatBox.css";

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src="/profile.png" alt="profile" />
        <p>
          Sam Dam
          <img className="dot" src="/green-dot.png" alt="dot icon" />
        </p>
        <Info />
      </div>
      <div className="chat-message">
        <div className="sender-message">
          <p className="message">Yo man how you doing?</p>
          <div>
            <img src="/profile.png" alt="profile" />
            <p>2:30pm</p>
          </div>
        </div>
        <div className="sender-message">
          <img src="/nature.png" className="message-image" alt="image" />
          <div>
            <img src="/profile.png" alt="profile" />
            <p>2:30pm</p>
          </div>
        </div>
        <div className="receiver-message">
          <p className="message">I'm doing great! How about you?</p>
          <div>
            <img src="/profile.png" alt="profile" />
            <p>2:32pm</p>
          </div>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="send a message" />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label htmlFor="image">
          <BookImage />
        </label>
        <Send />
      </div>
    </div>
  );
};

export { ChatBox };
