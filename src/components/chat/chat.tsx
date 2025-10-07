"use client";
import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport } from "ai";
import { cx } from "classix";
import { useEffect, useRef, useState } from "react";
import { StarIcon } from "#/components/star-icon";
import type { ChangeEvent } from "react";

export const Chat = () => {
  const messagesReference = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const [input, setInput] = useState("");
  const { messages, sendMessage, setMessages } = useChat({
    onData: (data) => {
      console.log(data);
    },
    transport: new TextStreamChatTransport({
      api: "http://localhost:3000/v1/chat",
    }),
    // transport: new TextStreamChatTransport({
    //   api: "https://chat.ryanep.com/v1/chat",
    // }),
  });

  useEffect(() => {
    messagesReference.current?.scroll(
      0,
      messagesReference.current.scrollHeight
    );
  }, [messages]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setInput(value);
  };

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    setInput("");

    await sendMessage({ text: input });
  };

  const handleOpen = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setMessages([]);
  };

  if (!isExpanded) {
    return (
      <button
        className="fixed right-10 bottom-10 size-14 text-xl rounded-full flex items-center justify-center bg-primary text-white shadow z-50 cursor-pointer"
        onClick={handleOpen}
        type="button"
      >
        <StarIcon />
      </button>
    );
  }

  return (
    <div className="fixed flex flex-col right-10 bottom-10 bg-neutral-800 rounded-md overflow-hidden md:w-96 w-80 md:h-[480px] h-96 z-50 shadow-xl">
      <header className="flex gap-1 items-center p-2 bg-neutral-700">
        <StarIcon />

        <h2>AI Chat</h2>

        <button
          className="cursor-pointer ml-auto"
          onClick={handleClose}
          type="button"
        >
          Close
        </button>
      </header>

      <p className="bg-red-500/40 p-2">This is heavily rate limited.</p>

      <div
        className="p-2 grow flex flex-col gap-2 overflow-y-scroll"
        ref={messagesReference}
      >
        {messages.map((message) => (
          <div
            className={cx(
              "rounded p-2 w-3/4",
              message.role === "user" ? "bg-blue-500 ml-auto" : "bg-neutral-700"
            )}
            key={message.id}
          >
            {message.parts
              .filter((part) => part.type === "text")
              .map((part, index) => {
                return (
                  <p
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                  >
                    {part.text}
                  </p>
                );
              })}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 justify-between">
          <input
            className="block w-full bg-neutral-600 p-2"
            onChange={handleInputChange}
            value={input}
          />

          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};
