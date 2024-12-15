"use client"
import React from 'react'
import { FacebookProvider, CustomChat } from "react-facebook";

const Message = () => {
  return (
    <FacebookProvider appId="8980832078671433" chatSupport>
      <CustomChat pageId="104400789375875" minimized={"true"} />
    </FacebookProvider>
  );
}

export default Message