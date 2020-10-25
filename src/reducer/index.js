const defaultState = {
  sections: {
    about: {
      title: `About me`,
      content: `Hello, my name is Roberto, I'm a frontend developer.`,
    },
    skills: {
      title: `My skills`,
      content: `This are my skills`,
    },
    why_me: {
      title: `Why me?`,
      content: `This is my experience`,
      metadata: [
        {
          slug: "",
          content: "Validated and tested code",
        },
        {
          slug: "",
          content: "Semantic HTML elements usage",
        },
        {
          slug: "",
          content: "Fine criterion for UX",
        },
        {
          slug: "",
          content: "Consistency across all browsers - devices",
        },
        {
          slug: "",
          content: "Most usage design patterns",
        },
        {
          slug: "",
          content: "Scalable and well organized code",
        },
        {
          slug: "",
          content: "Great skills for colaborative work",
        },
        {
          slug: "",
          content: "Creative development, using last browser features",
        },
      ],
    },
    contact: {
      title: `Contact me`,
      content: `This is my contact`,
    },
  },
}

const reducerCallback = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
export default reducerCallback
