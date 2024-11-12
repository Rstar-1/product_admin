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
    name: "MyAdmin",
    route: "",
    accordian: "accordion-2",
    tabId: "cb2",
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
    name: "Management",
    route: "",
    accordian: "accordion-3",
    tabId: "cb3",
    dropdown: [
      {
        icon: "circle",
        name: "Category",
        route: "image-cms",
      },
      {
        icon: "circle",
        name: "Blogs",
        route: "image-cms",
      },
      {
        icon: "circle",
        name: "Category",
        route: "image-cms",
      },
      {
        icon: "circle",
        name: "Products",
        route: "image-cms",
      },
    ],
  },
  {
    icon: "file",
    name: "Products",
    route: "",
    accordian: "accordion-4",
    tabId: "cb4",
    dropdown: [
      {
        icon: "circle",
        name: "Digital Card",
        route: "image-cms",
      },
      {
        icon: "circle",
        name: "PDF",
        route: "image-cms",
      },
    ],
  },
  {
    icon: "book",
    name: "Marcom",
    route: "",
    accordian: "accordion-5",
    tabId: "cb5",
    dropdown: [
      {
        icon: "circle",
        name: "Whatsapp",
        route: "image-cms",
      },
      {
        icon: "circle",
        name: "Email",
        route: "image-cms",
      },
      {
        icon: "circle",
        name: "SMS",
        route: "image-cms",
      },
    ],
  },
  {
    icon: "book",
    name: "CMS",
    route: "cms",
    accordian: "accordion-5",
    tabId: "cb6",
    dropdown: [],
  },
  {
    icon: "book",
    name: "Billing",
    route: "billing",
    accordian: "accordion-5",
    tabId: "cb7",
    dropdown: [],
  },
  {
    icon: "search",
    name: "Seo",
    route: "seo",
    accordian: "accordion-5",
    tabId: "cb8",
    dropdown: [],
  },
];

export default sidebarmenu;
