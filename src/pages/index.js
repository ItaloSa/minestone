import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from "../components/box"
import Dot from "../components/dot"
import Form from "../components/form"
import ServerLink from "../components/serverLink"
import UltraContainer from "../components/ultra-container"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ marginBottom: '3rem' }}>
      <p>Welcome to MineStone official website.</p>
      <Box>
        <p>Status</p>

        <Dot
          style={{ backgroundColor: false ? 'rgb(131, 255, 205)' : 'rgb(203, 74, 58)' }}
        /> Online  -  0/20 players

      </Box>
    </div>
    <div style={{ marginBottom: '3rem' }}>
      <h3>Join Now!</h3>
      <ServerLink>
        server.mine-stone.tk
    </ServerLink>
      <span style={{ fontSize: '14px' }}>You must have to register to be added to whitelist</span>
    </div>
    <UltraContainer>

      <Form>
        <h3>Register</h3>
        <p>
          Register to be able to join our server. 
          You will recieve an email with a confirmation link.
        </p>

        <label htmlFor="userName">
          User Name
          <input type="text" name="userName" id="userName">
          </input>
        </label>

        <label htmlFor="email">
          Email
          <input type="text" name="email" id="email">
          </input>
        </label>

        <button type="submit"> Send </button> 

        <span> <b> >> Error here!</b> </span>

      </Form>
    </UltraContainer>
  </Layout>
)

export default IndexPage
