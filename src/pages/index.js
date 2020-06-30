import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ServerLink from "../components/serverLink"
import Status from "../components/status"
// import Register from "../components/register"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ marginBottom: "3rem" }}>
      <p>Welcome to MineStone official website.</p>
      <Status />
    </div>
    <div style={{ marginBottom: "3rem" }}>
      <h3>Join Now!</h3>
      <ServerLink>server.mine-stone.tk</ServerLink>
      {/* <span style={{ fontSize: "14px" }}>
        You must have to register to be added to whitelist
      </span> */}
    </div>
    <div style={{ marginBottom: "3rem" }}>
      <h3>Check our map</h3>
      <ServerLink>
        <a href="https://maps.mine-stone.tk" target="_blank">maps.mine-stone.tk</a>
      </ServerLink>
      {/* <span style={{ fontSize: "14px" }}>
        You must have to register to be added to whitelist
      </span> */}
    </div>
    {/*<Register />*/}
  </Layout>
)

export default IndexPage
