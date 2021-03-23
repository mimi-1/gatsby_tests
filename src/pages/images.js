import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Images() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "images" } }) {
        edges {
          node {
            id
            relativePath
            prettySize
            publicURL
            childImageSharp {
              gatsbyImageData(
                #width: 150
                # height: 150
                layout: CONSTRAINED
                transformOptions: { fit: COVER }
                aspectRatio: 1.2
              )
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div
        css={css`
          display: flex;
          justify-content: flex-start;
          align-items: stretch;
          border: solid red;
          flex-wrap: wrap;
          min-width: 200px;
        `}
      >
        {data.allFile.edges.map(({ node }, index) => {
          console.log(node.id)
          return (
            <div
              css={css`
                width: 30%;
                min-width: 180px;
                border: solid;
                margin: 1rem;
              `}
            >
              <div key={node.id}>
                {node.relativePath}
                <div
                  css={css`
                    width: calc(100% - 1em);
                    margin: 0.5em;
                  `}
                >
                  <GatsbyImage
                    // css={css`
                    //   width: 100%;
                    // `}
                    image={getImage(node)}
                    alt={node.relativePath}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
