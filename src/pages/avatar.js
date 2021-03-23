import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/react"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

export default function Avatar() {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "avatar" }) {
        relativePath
        largeImage: childImageSharp {
          gatsbyImageData(
            formats: WEBP
            width: 250
            aspectRatio: 1
            transformOptions: { fit: COVER, cropFocus: ENTROPY }
          )
        }
        smallImage: childImageSharp {
          gatsbyImageData(
            width: 100
            aspectRatio: 1.8
            transformOptions: { fit: COVER, cropFocus: NORTH }
          )
        }
      }
    }
  `)

  const images = withArtDirection(getImage(data.file.largeImage), [
    {
      media: "(max-width: 750px)",
      image: getImage(data.file.smallImage),
    },
  ])

  return (
    <Layout>
      <div
        css={css`
          width:90%
          border: solid red;
          min-width: 200px;

        `}
      >
        <div
          css={css`
            width: 80%;
            object-position: right top;
            border: solid;
            margin: 1rem;
            padding: 1rem;
          `}
        >
          <GatsbyImage
            css={css`
              border-radius: 50%;
              width: 200px;
              @media screen and (max-width: 750px) {
                width: 100px;
                hight: 100px;
              }
            `}
            image={images}
          />
        </div>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi
          metus, blandit in leo lobortis, ullamcorper lacinia nisi. Curabitur
          porta est quis diam semper luctus. Aliquam ut ex quis nisl vehicula
          sollicitudin sed nec ipsum. Mauris rhoncus, nibh eleifend vulputate
          euismod, justo odio imperdiet neque, vel congue odio mauris in est.
          Aliquam erat volutpat. Sed suscipit mollis hendrerit. Pellentesque
          viverra accumsan felis, at efficitur nunc. Curabitur lorem erat,
          molestie ac venenatis id, elementum vel orci. Aenean tincidunt tempor
          ligula id porta. Quisque velit sem, varius sed rutrum ut, bibendum ut
          orci. Donec pharetra venenatis nibh auctor elementum.
        </p>
      </div>
    </Layout>
  )
}
