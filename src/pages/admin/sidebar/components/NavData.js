// const sidebarmenu = [
//   {
//     icon: "grid",
//     name: "Dashboard",
//     route: "dashboard",
//     accordian: "accordion-1",
//     tabId: "cb1",
//     dropdown: [],
//   },
//   {
//     icon: "folder",
//     name: "Management",
//     route: "management",
//     accordian: "accordion-2",
//     tabId: "cb2",
//     dropdown: [],
//   },
//   {
//     icon: "file",
//     name: "CMS",
//     route: "cms",
//     accordian: "accordion-4",
//     tabId: "cb4",
//     dropdown: [],
//   },
//   {
//     icon: "book",
//     name: "Bill Summary",
//     route: "billing",
//     accordian: "accordion-6",
//     tabId: "cb6",
//     dropdown: [],
//   },
//   {
//     icon: "help-circle",
//     name: "How it Works",
//     route: "how-works",
//     accordian: "accordion-3",
//     tabId: "cb3",
//     dropdown: [],
//   },
//   {
//     icon: "search",
//     name: "Seo",
//     route: "seo",
//     accordian: "accordion-5",
//     tabId: "cb5",
//     dropdown: [],
//   },
// ];

const sidebarmenu = [
  {
    icon: "grid",
    name: "Dashboard",
    route: "dashboard",
    accordian: "accordion-1",
    tabId: "cb1",
    dropdown: [],
  },
  {
    icon: "user",
    name: "Management",
    route: "",
    accordian: "accordion-2",
    tabId: "cb2",
    dropdown: [
      {
        icon: "circle",
        name: "Gallery",
        route: "gallery",
      },
      {
        icon: "circle",
        name: "Service",
        route: "service",
      },
      {
        icon: "circle",
        name: "Clients",
        route: "client",
      },
    ],
  },
  {
    icon: "settings",
    name: "MyAdmin",
    route: "",
    accordian: "accordion-3",
    tabId: "cb3",
    dropdown: [
      {
        icon: "circle",
        name: "Review",
        route: "review",
      },
      {
        icon: "circle",
        name: "Events",
        route: "event",
      },
      {
        icon: "circle",
        name: "Teams",
        route: "team",
      },
      {
        icon: "circle",
        name: "FAQ",
        route: "faq",
      },
    ],
  },
  {
    icon: "file",
    name: "CMS",
    route: "cms",
    accordian: "accordion-4",
    tabId: "cb4",
    dropdown: [
      {
        icon: "circle",
        name: "Text CMS",
        route: "text-cms",
      },
      {
        icon: "circle",
        name: "Image CMS",
        route: "image-cms",
      },
    ],
  },
  {
    icon: "book",
    name: "Billing",
    route: "billing",
    accordian: "accordion-5",
    tabId: "cb5",
    dropdown: [],
  },
  {
    icon: "search",
    name: "Seo",
    route: "seo",
    accordian: "accordion-5",
    tabId: "cb6",
    dropdown: [],
  },
];

export default sidebarmenu;
