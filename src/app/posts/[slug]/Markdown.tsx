'use client'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'

import styles from './page.module.css'

export default async function Markdown({ content }: { content: string }) {
  return (
    <div className={styles.markdownBody}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            return (
              <SyntaxHighlighter language="javascript" PreTag="div" {...props} style={materialDark}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            )
          },
        }}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
