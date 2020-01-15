import React from "react"
import Layout from "../../components/Layout/Layout"
import Venue from "../../components/VenuesComponents/Venue/Venue"

const VenuePage = () => {
  return (
    <main className="venue-container">
      <Layout>
        <Venue />
      </Layout>
    </main>
  )
}

export default VenuePage
