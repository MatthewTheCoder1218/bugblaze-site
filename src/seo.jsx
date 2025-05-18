import React from 'react'
import { Helmet } from 'react-helmet'

export default function SEO() {
  return (
    <Helmet>
      <title>BugBlaze - AI-powered Bug Detection CLI Tool</title>
      <meta name="description" content="BugBlaze is a global CLI tool to find and explain bugs in JavaScript, TypeScript, Python, Java, and more." />
      <meta name="keywords" content="BugBlaze, bug detection, AI, CLI tool, JavaScript, TypeScript, Python, Java" />
      <meta name="author" content="Matthew Michael" />
      <meta property="og:title" content="BugBlaze - AI-powered Bug Detection CLI Tool" />
      <meta property="og:description" content="Catch bugs and understand errors fast with BugBlaze." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://bugblaze.vercel.app" />
      <meta property="og:image" content="https://bugblaze.vercel.app/bugblaze-preview.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@your_twitter_handle" />
      <meta name="twitter:title" content="BugBlaze - AI-powered Bug Detection CLI Tool" />
      <meta name="twitter:description" content="Catch bugs and understand errors fast with BugBlaze." />
    </Helmet>
  )
}
