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
        type: "text",
        name: "heading3",
        label: "Text",
        value: "Advanced repair Hom’s hand cream",
      },
      {
        type: "textarea",
        label: "Content",
        name: "content3",
        value:
          "Specifically made for hands to help repair dry skin. Frequent washing and external factors like the environment can strip hands of vital elements needed to keep hands soft, smooth and hydrated. Advanced Repair Hand Cream leaves hands noticeably softer and smoother after just one application.",
      },
      {
        name: "group_3",
        label: "Simple Group",
        type: "group",
        value: [
          {
            text: "100%",
            content: "natural Ingredients",
          },
          {
            text: "85%",
            content: "Moisture Increase",
          },
          {
            text: "20%",
            content: "Shea butter",
          },
        ],
        options: {
          add_text: "Add new item",
        },
        params: [
          {
            name: "text",
            type: "text",
            label: "Heading",
          },
          {
            name: "content",
            type: "textarea",
            label: "Content",
          },
        ],
      },
      {
        type: "single_image",
        name: "img3",
        label: "Image Change",
        value: {
          src: "%URL%assets/2.png",
        },
        description: "Recommend Size : 457 x 550px",
      },
    ],
  },
];
