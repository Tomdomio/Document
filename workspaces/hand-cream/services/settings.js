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
        type: "text",
        name: "text_btn",
        label: "Content Button",
        value: "ORDER NOW TODAY!",
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
        value: "''",
      },
      {
        type: "textarea",
        label: "Content",
        name: "descrip",
        value:
          "Our products are designed to protect, support, moisturize and enhance the look of skin. Giving you and your family the feeling of confidence that comes from radiant, healthy-looking skin.",
      },
      {
        type: "single_image",
        name: "avatar",
        label: "Single Product",
        value: {
          src: "%URL%assets/2.png",
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
        name: "desc_avt",
        label: "Description Avatar",
        value: "NEW YORK DERMATOLOGIST",
      },
    ],
  },
];
