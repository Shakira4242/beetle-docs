import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  logo: <span>Beetle</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
  head: (
    <>
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/uFcxHlGynfXDst0avJNSn"
        width={"50px"}
        height={"50px"}
        style={{ top: 100, left: 500, position: 'fixed', border: 0, zIndex: 9999 }}
      ></iframe>
    </>
  )
}

export default config