import React from "react"
import Particles from "react-tsparticles"
import { css } from "@emotion/react"

const Partic = () => {
  const particles0 = {
    background: {
      color: {
        value: "#0d47a1",
      },
      size: "cover",
      opacity: 0.5,
    },
    particles: {
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 80,
      },
      color: {
        value: ["#00FFFC", "#FC00FF", "#fffc00"],
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: "star",
      },
      size: {
        random: {
          enable: true,
          minimumValue: 1,
        },
        value: {
          min: 1,
          max: 10,
        },
        animation: {
          count: 10,
          enable: true,
          speed: 10,
          sync: false,
          destroy: "none",
          minimumValue: 0.1,
          startValue: "random",
        },
      },

      move: {
        direction: "top-left",
        enable: true,
        outMode: "out",
        random: false,
        speed: 0.1,
        straight: true,
      },
      //   trail: {
      //     enable: true,
      //     length: 5,
      //     fillColor: "#fff",
      //   },
    },
    detectRetina: true,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        // resize: true,
      },
    },
  }

  const particlesInit = main => {
    console.log(main)
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  const particlesLoaded = container => {
    console.log(container)
  }

  return (
    <div
      css={css`
        width: 100%;
        height: 80vh;
        background-color: blue;
        border: 2px solid red;
      `}
    >
      <Particles
        id="tsparticles"
        params={particles0}
        init={particlesInit}
        loaded={particlesLoaded}
        width={"100%"}
        height={"80vh"}
      />
    </div>
  )
}

export default Partic
