[
  {
    tab_name: "SETTINGS",
    settings: [
      {
        name: "title",
        label: "Title",
        type: "text",
        value: "Enriched with natural moisturizing factors",
      },
      {
        name: "desc",
        label: "Description",
        type: "textarea",
        value:
          " Includes amino acids naturally found in the skin that work to intensively boost moisture and help prevent dryness from recurring.  This hand cream even lasts through handwashing.",
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
        name: "group_1",
        label: "List Item ",
        type: "group",
        value: [
          {
            img: {
              src: "%URL%assets/Ellipse1.png",
              alt: "Call to action",
            },
            name: "COCONUT OIL",
            desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          },
          {
            img: {
              src: "%URL%assets/Ellipse2.png",
              alt: "Call to action",
            },
            name: "ALMOND",
            desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          },
          {
            img: {
              src: "%URL%assets/Ellipse3.png",
              alt: "Call to action",
            },
            name: "HONEY",
            desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          },
        ],
        options: {
          add_text: "Add new item",
        },
        params: [
          {
            name: "img",
            label: "Image",
            type: "single_image",
            description: "Recommend Size : 120 x 120px",
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
