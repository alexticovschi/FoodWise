import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import StoryCard from "../StoryCard/StoryCard"
import "./Stories.scss"

const getStoryImages = graphql`
  query storyImages {
    story1: file(relativePath: { eq: "events/weddings/stories/story1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    story2: file(relativePath: { eq: "events/weddings/stories/story2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    story3: file(relativePath: { eq: "events/weddings/stories/story3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Stories = () => {
  const { story1, story2, story3 } = useStaticQuery(getStoryImages)

  return (
    <section className="stories">
      <h1 className="stories__title">Stories</h1>
      <div className="stories__cards">
        <StoryCard
          imgSrc={story1}
          name="Francesca & Alex’s Farmhouse Wedding"
          text="Dreaming of a country wedding? Gourmet cuisine met pastoral beauty at this splendid affair."
        />
        <StoryCard
          imgSrc={story2}
          name="Lennard & Gary's Urban Affair"
          text="A cool and creative wedding reception idea? We made it happen at this stunning city event."
        />
        <StoryCard
          imgSrc={story3}
          name="Chloe & Edwin’s Double Wedding"
          text="Sometimes you need to create two parties in one day. Learn how this couple did it."
        />
      </div>
    </section>
  )
}

export default Stories
