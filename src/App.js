

import Landing from "./components/Landing";
import Chatbot from "react-chatbot-kit";
import config from "./components/chatbot/config";
import ActionProvider from "./components/chatbot/ActionProvider";
import MessageParser from "./components/chatbot/MessageParser";
import { Button } from "react-bootstrap";



function App() {
  return (
    <div className="App">
      
      <Landing />
    
    </div>
  );
}

export default App;
