export const permissions = {
  // Work like blacklist, not listed mean everyone can access

  "/phieuinbaocao/": ["lva", "sys.admin"],
  "/hisl2/": ["lva", "sys.admin", "admin"],
  "/hisl2-duoc/": ["lva", "sys.admin", "admin", "benhvien"],
  "/hisl2-cls/": ["lva", "sys.admin", "admin", "benhvien"],

  "/guides/": ["lva", "sys.admin"],
  "/reference/": ["lva", "sys.admin"],

  // 'folder_name': ['allowed_role_1', 'allowed_role_2']
  // phieuinbaocao: ["lva"],
  // guides: ["lva", "sys.admin"],
  // "/tongquan": ["lva"],
  // "/ex1": ["lva", "sys.admin"],
  // "/example/": ["sys.admin", "admin"],
  // "/example": ["sys.admin", "admin"],
};
