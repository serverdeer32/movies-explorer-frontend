const paginationConfig = {
  1280: [16, 4],
  1100: [12, 3],
  640: [8, 2],
  320: [5, 2],
}
  
export const getConfig = (width) => {
  if (width >= 1280) return paginationConfig[1280];
  if (width >= 1100) return paginationConfig[1100];
  if (width >= 640) return paginationConfig[640];
  if (width >= 320) return paginationConfig[320];
}

export const EmailRegex = "^\\S+@\\S+\\.\\S+$"
