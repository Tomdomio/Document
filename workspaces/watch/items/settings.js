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
            name: "REPAIR MASTER ",
            desc: "Eleanor Pena",
            font_icon_1: "lni lni-facebook-original",
            font_icon_2: "lni lni-instagram-filled",
            font_icon_3: "lni lni-twitter-filled",
            image: {
              src: "%URL%/assets/1.png",
            },
          },
          {
            name: "REPAIR MASTER ",
            desc: "Ralph Edwards",
            font_icon_1: "lni lni-facebook-original",
            font_icon_2: "lni lni-instagram-filled",
            font_icon_3: "lni lni-twitter-filled",
            image: {
              src: "%URL%/assets/2.jpg",
            },
          },
          {
            name: "REPAIR MASTER ",
            desc: "Kathryn Murphy",
            font_icon_1: "lni lni-facebook-original",
            font_icon_2: "lni lni-instagram-filled",
            font_icon_3: "lni lni-twitter-filled",
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
            name: "name",
            type: "text",
            label: "First text",
          },
          {
            name: "desc",
            type: "text",
            label: "Second text",
          },
          {
            name: "font_icon",
            label: "Font Icon 1",
            type: "icon_picker",
            options: {
              source: "https://dev.layouthub.com/storage/libraries/LineIcons/LineIcons.css",
              ext_class: "lni",
            },
          },
          {
            name: "font_icon_2",
            label: "Font Icon 2",
            type: "icon_picker",
            options: {
              source: "https://dev.layouthub.com/storage/libraries/LineIcons/LineIcons.css",
              ext_class: "lni",
            },
          },
          {
            name: "font_icon_3",
            label: "Font Icon 3",
            type: "icon_picker",
            options: {
              source: "https://dev.layouthub.com/storage/libraries/LineIcons/LineIcons.css",
              ext_class: "lni",
            },
          },
          {
            name: "image",
            type: "single_image",
            label: "Image",
            description: "Recommend Size : 370 x 405px",
          },
        ],
      },
    ],
  },
];
