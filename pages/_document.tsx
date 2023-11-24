import { useEffect } from "react"
import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
  return (
    <Html>
      <Head/>
      <body>
        <Main />
        <NextScript />
        <Script
          embeddedChatbotConfig = {{
            chatbotId: "uFcxHlGynfXDst0avJNSn",
            domain: "www.chatbase.co"
          }}
        ></Script>

        <Script
          src="https://www.chatbase.co/embed.min.js"
          chatbotId="uFcxHlGynfXDst0avJNSn"
          domain="www.chatbase.co"
          strategy="lazyOnload"
        >
        </Script>
      </body>
    </Html>
  )
}