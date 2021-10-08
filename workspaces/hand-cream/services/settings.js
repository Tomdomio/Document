[
  {
    tab_name: "Services",
    settings: [
      {
        type: "text",
        name: "heading",
        label: "Heading",
        value: "The fast-absorbing, smoothes immediately ",
      },
      {
        type: "textarea",
        label: "Content",
        name: "content",
        value:
          "Enriched with 20% organic Shea Butter, this hand cream penetrates quickly to protect, nourish and moisturize hands. Honey, almond extracts and coconut oil are blended with Shea Butter to create this extremely effective formula.",
      },
      {
        type: "single_image",
        name: "prod",
        label: "Single Product",
        value: {
          src: "%URL%assets/1.png",
        },
        description: "Recommend Size : 457 x 550px",
      },
    ],
  },
  {
    tab_name: "Settings",
    settings: [
      {
        name: "group_1",
        label: "Simple Group",
        type: "group",
        value: [
          {
            content: "24 Hour Moisturization",
            icon: "lni lni-checkmark",
          },
          {
            content: "Nourishing Ingredients",
            icon: "lni lni-checkmark",
          },
          {
            content: "Soothing Aloe",
            icon: "lni lni-checkmark",
          },
          {
            content: "Hyaluronic Acid, Niacinamide",
            icon: "lni lni-checkmark",
          },
          {
            content: "24 Hour Moisturization",
            icon: "lni lni-checkmark",
          },
          {
            content: "Nourishing Ingredients",
            icon: "lni lni-checkmark",
          },
        ],
        options: {
          add_text: "Add new item",
        },
        params: [
          {
            name: "content",
            type: "text",
            label: "Content",
          },
          {
            name: "icon",
            label: "Icon Picker",
            type: "icon_picker",
            options: {
              type: "icon",
              vendor: "css_line_icon",
              ext_class: "lni",
            },
          },
        ],
      },
    ],
  },
  {
    tab_name: "Group",
    settings: [
      {
        type: "text",
        name: "span",
        label: "Text",
        value: "“",
      },
      {
        type: "textarea",
        label: "Content",
        name: "div",
        value:
          "“ Our products are designed to protect, support, moisturize and enhance the look of skin. Giving you and your family the feeling of confidence that comes from radiant, healthy-looking skin.“",
      },
      {
        type: "single_image",
        name: "avt",
        label: "Avatar User",
        value: {
          src: "%URL%assets/4.png",
        },
        description: "Recommend Size : 60 x 60px",
      },
      {
        type: "text",
        name: "name_avt",
        label: "Name Avatar",
        value: "Dr. Michelle Henry",
      },
      {
        type: "text",
        name: "live",
        label: "Description Avatar",
        value: "NEW YORK DERMATOLOGIST",
      },
      {
        name: "color_picker",
        label: "Select color",
        type: "color_picker",
        value: "#8876E4",
      },
    ],
  },
  {
    tab_name: "Hero",
    settings: [
      {
        name: "group_6",
        label: "Simple Group",
        type: "group",
        value: [
          {
            percent: "100%",
            desc: "natural Ingredients",
            group_inner: [
              {
                name: "Advanced repair Hom’s hand cream",
                intro:
                  "Specifically made for hands to help repair dry skin. Frequent washing and external factors like the environment can strip hands of vital elements needed to keep hands soft, smooth and hydrated. Advanced Repair Hand Cream leaves hands noticeably softer and smoother after just one application.",
                img: {
                  src: "%URL%assets/2.png",
                  alt: "Call to action",
                },
              },
            ],
          },
          {
            percent: "85%",
            desc: "Moisture Increase",
            group_inner: [
              {
                name: "Advanced repair Hom’s hand cream",
                intro:
                  "Specifically made for hands to help repair dry skin. Frequent washing and external factors like the environment can strip hands of vital elements needed to keep hands soft, smooth and hydrated. Advanced Repair Hand Cream leaves hands noticeably softer and smoother after just one application.",
                img: {
                  src: "%URL%assets/1.png",
                  alt: "Call to action",
                },
              },
            ],
          },
          {
            percent: "20%",
            desc: "Shea butter",
            group_inner: [
              {
                name: "Advanced repair Hom’s hand cream",
                intro:
                  "Specifically made for hands to help repair dry skin. Frequent washing and external factors like the environment can strip hands of vital elements needed to keep hands soft, smooth and hydrated. Advanced Repair Hand Cream leaves hands noticeably softer and smoother after just one application.",
                img: {
                  src: "%URL%assets/2.png",
                  alt: "Call to action",
                },
              },
            ],
          },
        ],
        options: {
          add_text: "Add new item",
        },
        params: [
          {
            name: "percent",
            type: "text",
            label: "Percent",
          },
          {
            name: "desc",
            type: "text",
            label: "Description",
          },
          {
            name: "group_inner",
            type: "group",
            label: "Child group",
            params: [
              {
                name: "name",
                type: "text",
                label: "Name",
              },
              {
                name: "intro",
                type: "textarea",
                label: "Intro",
              },
              {
                name: "img",
                label: "Image",
                type: "single_image",
                description: "Recommend Size : 457 x 550px",
              },
            ],
          },
        ],
      },
    ],
  },
];
