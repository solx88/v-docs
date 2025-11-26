export const permissions = {
  // Work like blacklist, not listed mean everyone can access

  "/phieuinbaocao/": ["lva"],
  "/hisl2/": ["lva", "sys.admin", "admin"],
  "/hisl2duoc/": ["lva", "sys.admin", "admin", "benhvien"],
  "/hisl2cls/": ["lva", "sys.admin", "admin", "benhvien"],

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
