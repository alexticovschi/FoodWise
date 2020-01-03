import React from "react"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Menu from "../components/Menu/Menu"
import Banner from "../components/Banner/Banner"
import Events from "../components/Events/Events"

const IndexPage = () => (
  <main className="container">
    <Layout>
      <Hero />
      <Menu />
      <Banner />
      <Events />
    </Layout>
  </main>
)

export default IndexPage
