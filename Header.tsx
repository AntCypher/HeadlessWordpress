// API

export async function getPrimaryMenu() {
  const data = await fetchAPI(`
  {
    headerMenus: menuItems(where: {location: MENU_1, parentId: "0"}) {
      edges {
        node {
          id
          label
          path
          uri
          childItems{
            edges {
              node {
                id
                label
                path
                uri
                childItems{
                  edges {
                    node {
                      id
                      label
                      path
                      uri
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `);
