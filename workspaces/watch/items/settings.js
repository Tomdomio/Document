[
  {
    tab_name: "Items",
    settings: [
      {
        name: "heading",
        label: "Heading",
        type: "text",
        value: "The Best of Professionals",
      },
      {
        name: "group_1",
        label: "Simple Group",
        type: "group",
        value: [
          {
            name: "Free Returns",
            desc: "Free Returns",
            image: {
              src: "%URL%/assets/1.jpg",
            },
          },
          {
            name: "Free Returns",
            desc: "Free Returns",
            image: {
              src: "%URL%/assets/2.jpg",
            },
          },
          {
            name: "Free Returns",
            desc: "Free Returns",
            image: {
              src: "%URL%/assets/3.jpg",
            },
          },
        ],
        options: {
          add_text: "Add new item",
        },
        params: [
          {
            name: "text",
            type: "text",
            label: "Text",
          },
          {
            name: "image",
            type: "single_image",
            label: "Image",
          },
        ],
      },
    ],
  },
];
