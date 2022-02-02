import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "./options/Options";
import Quiz from "./Quiz/Quiz";
const config = {

  botName : "YOURBOT",
  initialMessages: [
    createChatBotMessage(`Hello. How can i Help You`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "which mentor?",
            answer:
              "Mohammad Arbaz",
            id: 1,
          },
          {
            question: "So you want to Add Mentor",
            answer:
              "yes",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;