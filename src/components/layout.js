import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div
      css={css`
        margin: 0 auto;
        width:90%
        max-width: 1024px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <div
        css={css`
          float: right;
          display: flex;
          width: 200px;
          justify-content: space-around;
          margin-bottom: 2rem;
        `}
      >
        <Link to={`/about/`}>About</Link>
        <Link to={`/images/`}>Images</Link>
        <Link to={`/avatar/`}>Avatar</Link>
      </div>
      {children}
    </div>
  )
}
