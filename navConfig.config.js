module.exports = {
  items: [
    {
      name: "Home",
      linksTo: "/",
      items: [
        {
          name: "Sub Menu Item",
          linksTo: "/somewhere",
        },
        {
          name: "Sub Menu Item2",
          linksTo: "/somewhere",
        },
        {
          name: "Sub Menu Item3",
          linksTo: "/somewhere",
        },
        {
          name: "Sub Menu Item3",
          linksTo: "/somewhere",
        },
      ],
    },

    {
      name: "About",
      linksTo: "/about",
      items: [
        {
          name: "Sub Item",
          linksTo: "/somewhere",
        },
        {
          name: "Sub Item2",
          linksTo: "/somewhere",
        },
        {
          name: "Sub Item3",
          linksTo: "/somewhere",
        },
      ],
    },

    {
      name: "Contact",
      linksTo: "/new",
    },
    {
      name: "New",
      linksTo: "/new",
    },
  ],
};
