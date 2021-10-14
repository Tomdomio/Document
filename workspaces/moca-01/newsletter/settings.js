[
  {
    tab_name: "General",
    settings: [
      {
        name: "title",
        label: "Title",
        type: "text",
        value:
          "“ Class aptent taciti sociosqu ad litora torquent per nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget. ”",
      },
      {
        name: "desc",
        label: "Description",
        type: "text",
        value: "Jont Herry",
      },
    ],
  },
  {
    tab_name: "General",
    settings: [
      {
        name: "content_1",
        label: "Content 1",
        type: "text",
        value: "04 Riley Street, Surry Hills 2050 Sydney",
      },
      {
        name: "content_2",
        label: "content 2",
        type: "text",
        value: "Info@layouthub.com",
      },
      {
        name: "content_3",
        label: "Content 3",
        type: "text",
        value: "+342 3423 3423423",
      },
      {
        name: "group_1",
        label: "Simple Group",
        type: "group",
        value: [
          {
            type_icon: "text",
            text: "Facebook",
            font_icon: "lni lni-facebook-oval",
          },
          {
            type_icon: "text",
            text: "Instagram",
            font_icon: "lni lni-instagram-filled",
          },
          {
            type_icon: "text",
            text: "Twitter",
            font_icon: "lni lni-twitter-filled",
          },
          {
            type_icon: "text",
            text: "Youtube",
            font_icon: "lni lni-youtube",
          },
        ],
        options: {
          add_text: "Add new item",
        },
        params: [
          {
            name: "type_icon",
            label: "Select type",
            type: "dropdown",
            options: {
              text: "Use text",
              font: "Use icon font",
            },
          },
          {
            name: "text",
            label: "Text Social",
            type: "link",
            relation: {
              parent: "type_icon",
              show_when: "text",
            },
          },
          {
            name: "font_icon",
            label: "Font Icon",
            type: "icon_picker",
            options: {
              source: "https://dev.layouthub.com/storage/libraries/LineIcons/LineIcons.css",
              ext_class: "lni",
            },
            relation: {
              parent: "type_icon",
              show_when: "font",
            },
          },
        ],
      },
    ],
  },
  {
    tab_name: "Settings",
    settings: [
      {
        name: "contentt_1",
        label: "Content",
        type: "text",
        value: "Subscribe to our and get <span>10%</span> off",
      },
      {
        type: "text",
        name: "placeholder_text",
        label: "Placeholder text",
        value: "Your email...",
        options: {
          toolbar: false,
        },
      },
      {
        type: "text",
        name: "n_signup",
        label: "SUBMIT",
        value: "SUBMIT",
      },
      {
        type: "text",
        label: "Submit success",
        name: "subscribed_success",
        value: "Thanks for submit",
      },
      {
        name: "question",
        label: "Content",
        type: "text",
        value: "Don’t worry we don’t spam",
      },
    ],
  },
];
