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
            image: {
              src: "%URL%/assets/1.png",
            },
            group_inner: [
              {
                link: {
                  href: "#",
                  icon: "lni lni-facebook-original",
                },
              },
              {
                link: {
                  href: "#",
                  icon: "lni lni-instagram-filled",
                },
              },
              {
                link: {
                  href: "#",
                  icon: "lni lni-twitter-filled",
                },
              },
            ],
          },
          {
            name: "REPAIR MASTER ",
            desc: "Ralph Edwards",
            image: {
              src: "%URL%/assets/2.jpg",
            },
            group_inner: [
              {
                link: {
                  href: "#",
                  icon: "lni lni-facebook-original",
                },
              },
              {
                link: {
                  href: "#",
                  icon: "lni lni-instagram-filled",
                },
              },
              {
                link: {
                  href: "#",
                  icon: "lni lni-twitter-filled",
                },
              },
            ],
          },
          {
            name: "REPAIR MASTER ",
            desc: "Kathryn Murphy",
            image: {
              src: "%URL%/assets/3.jpg",
            },
            group_inner: [
              {
                link: {
                  href: "#",
                  icon: "lni lni-facebook-original",
                },
              },
              {
                link: {
                  href: "#",
                  icon: "lni lni-instagram-filled",
                },
              },
              {
                link: {
                  href: "#",
                  icon: "lni lni-twitter-filled",
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
            name: "group_inner",
            type: "group",
            label: "Child group",
            params: [
              {
                name: "link",
                label: "Link using icon",
                type: "link",
                description:
                  'You can find icons from free resources <a href="https://lineicons.com/" target="_blank">https://lineicons.com</a>',
                options: {
                  type: "icon",
                  icon_source: "https://dev.layouthub.com/storage/libraries/LineIcons/LineIcons.css",
                  icon_class: "lni",
                },
              },
            ],
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
