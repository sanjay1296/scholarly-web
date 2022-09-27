function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = "/dashboard";

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  school: {
    root: path(ROOTS_DASHBOARD, "/school"),
    list: path(ROOTS_DASHBOARD, "/school/list"),
    create: path(ROOTS_DASHBOARD, "/school/new"),
    editById: path(ROOTS_DASHBOARD, "/school/edit"),
    view: path(ROOTS_DASHBOARD, "/school/view"),
  },
  user: {
    root: path(ROOTS_DASHBOARD, "/user"),
    list: path(ROOTS_DASHBOARD, "/user/list"),
    create: path(ROOTS_DASHBOARD, "/user/new"),
    editById: path(ROOTS_DASHBOARD, "/user/edit"),
    view: path(ROOTS_DASHBOARD, "/user/view"),
  },
  
};
