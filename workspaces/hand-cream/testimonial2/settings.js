[
  {
    tab_name: "SETTINGS",
    settings: [
      {
        name: "title",
        label: "Title",
        type: "text",
        value: "Happy customers say about our products",
      },
    ],
  },
  {
    tab_name: "Group",
    settings: [
      {
        name: "auto",
        label: "Autoplay",
        type: "toggle",
        value: "no",
      },
      {
        name: "timeout",
        label: "Time out",
        type: "number_slider",
        value: "1",
        options: {
          min: 1,
          max: 10,
          unit: "s",
          show_input: true,
        },
        relation: {
          parent: "auto",
          show_when: "yes",
        },
      },
      {
        name: "loop",
        label: "Loop",
        type: "toggle",
        value: "yes",
      },
      {
        name: "paginate",
        label: "Pagination",
        type: "toggle",
        value: "yes",
      },
      {
        name: "navigation",
        label: "Navigation",
        type: "toggle",
        value: "no",
      },
      {
        name: "color_picker",
        label: "Select backgound color",
        type: "color_picker",
        value: "#130E30",
      },
      {
        name: "group_1",
        label: "List Item ",
        type: "group",
        value: [
          {
            img: {
              src: "%URL%assets/Ellipse1.png",
              alt: "Call to action",
            },
            item_star: "5",
            desc: "“ This is a wonderful product but has a curious side effect. It works great! I love that it absorbs quickly, so there's no greasy feeling just leaves my hands feeling soft and moisturized. I even feel like it lasts pretty well through handwashing!”",
            name: "ROBIN SCOTT",
          },
          {
            img: {
              src: "%URL%assets/Ellipse2.png",
              alt: "Call to action",
            },
            item_star: "5",
            desc: "“ This is a wonderful product but has a curious side effect. It works great! I love that it absorbs quickly, so there's no greasy feeling just leaves my hands feeling soft and moisturized. I even feel like it lasts pretty well through handwashing!”",
            name: "SAM ASEH",
          },
          {
            img: {
              src: "%URL%assets/Ellipse1.png",
              alt: "Call to action",
            },
            item_star: "5",
            desc: "“ This is a wonderful product but has a curious side effect. It works great! I love that it absorbs quickly, so there's no greasy feeling just leaves my hands feeling soft and moisturized. I even feel like it lasts pretty well through handwashing!”",
            name: "ROBIN SCOTT",
          },
        ],
        options: {
          add_text: "Add new item",
        },
        params: [
          {
            name: "item_star",
            type: "dropdown",
            label: "Rating",
            value: "5",
            options: {
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
            },
          },
          {
            name: "img",
            label: "Image",
            type: "single_image",
            description: "Recommend Size : 60 x 60px",
          },
          {
            name: "desc",
            type: "textarea",
            label: "Description",
          },
          {
            name: "name",
            type: "text",
            label: "Info",
          },
        ],
      },
    ],
  },
];
