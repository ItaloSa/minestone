import React from "react"
import useAxios from "axios-hooks"

import Box from "./box"
import Dot from "./dot"

const { GATSBY_STATUS_API_URL } = process.env

const Status = () => {
  const [{ data, loading, error }] = useAxios(GATSBY_STATUS_API_URL)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <>
      {data && (
        <Box>
          <h4>Status</h4>
          <p>
            <Dot
              style={{
                backgroundColor: data.online
                  ? "rgb(131, 255, 205)"
                  : "rgb(203, 74, 58)",
              }}
            />{" "}
            {data.online ? "Online" : "Offline"}
            {" - "}
            {data.online &&
              `${data.players.online}/${data.players.max} players`}
          </p>
          <p>{data.players && data.players.list && data.players.list.join(", ")}</p>
        </Box>
      )}
    </>
  )
}

export default Status
