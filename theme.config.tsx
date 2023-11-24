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
        width="100%"
        style={"height": "50px", "width": "50px", "top": "500px", "right": "100px", "position": "fixed", "z-index": "999999"}
        frameborder="0"
        defer
      ></iframe>
    </>
  )
}

export default config