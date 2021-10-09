[
  {
    tab_name: "OurClient",
    settings: [
      {
        name: "group_1",
        label: "Simple Group",
        type: "group",
        value: [
          {
            text: "FREE ORDER SHIPPING",
            img: {
              src: "%URL%assets/Frame1.png",
            },
          },
          {
            text: "FREE RETURN 07 DAYS",
            img: {
              src: "%URL%assets/Frame2.png",
            },
          },
          {
            text: "MONEY BACK QUARANTEE",
            img: {
              src: "%URL%assets/Frame3.png",
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
            name: "img",
            type: "single_image",
            label: "Image",
            description: "Recommend Size : 80 x 80px",
          },
        ],
      },
    ],
  },
];
