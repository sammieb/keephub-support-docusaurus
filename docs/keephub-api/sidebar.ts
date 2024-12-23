import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "keephub-api/keephub-backend",
    },
    {
      type: "category",
      label: "authentication",
      link: {
        type: "doc",
        id: "keephub-api/authentication",
      },
      items: [
        {
          type: "doc",
          id: "keephub-api/get-token",
          label: "Get a token",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "groups",
      link: {
        type: "doc",
        id: "keephub-api/groups",
      },
      items: [
        {
          type: "doc",
          id: "keephub-api/get-groups",
          label: "List groups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "keephub-api/add-group",
          label: "Creates group",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "keephub-api/get-group",
          label: "Get single user groups in system by id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "keephub-api/update-group",
          label: "Updates the resource identified by id using data.",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "keephub-api/patch-group",
          label: "Updates the resource identified by id using data.",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "keephub-api/remove-group",
          label: "Removes the resource with id.",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "contents",
      link: {
        type: "doc",
        id: "keephub-api/contents",
      },
      items: [
        {
          type: "doc",
          id: "keephub-api/get-contents",
          label: "List contents based on filters",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "keephub-api/add-contents",
          label: "Create new content",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "keephub-api/get-contents-by-id",
          label: "Get a single content",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "keephub-api/update-contents-by-id",
          label: "Update content",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "keephub-api/update-contents-by-id",
          label: "Update content",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "keephub-api/remove-contents-by-id",
          label: "Remove content",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
