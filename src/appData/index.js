import icons from "../iconsEncoded"
const defaultState = {
  sections: [
    {
      title: `About me`,
      slug: `about`,
      content: `Hello, my name is Roberto, I'm a frontend developer.`,
    },
    {
      title: `My skills`,
      slug: `skills`,
      metadata: {
        slug: "languages",
        metadataTitle: "Coding languages",
        icon: icons.thermometerIcon,
        skills: [
          {
            itemTitle: "UI development",
            itemContent:
              "I follow the best practices for SEO and accesibility with a mobile first approach, considering cross browser support",
          },
          {
            itemTitle: "WordPress Development",
            itemContent:
              "Following a mobile first approach, considering cross browser support",
          },
          {
            itemTitle: "Building apps",
            itemContent:
              "Following a mobile first approach, considering cross browser support",
          },
        ],
      },
    },
    {
      title: `Experience`,
      slug: `experience`,
      content: `This is my experience`,
    },
    {
      title: `Contact me`,
      slug: `contact`,
      content: `This is my contact`,
    },
  ],
}
export default defaultState
