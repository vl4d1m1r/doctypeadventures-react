export const filterUncategorized = (categories) => {
  return categories.filter((category) => {
    return category.name !== "Uncategorized";
  });
};

export const categoriesToArray = (categories) => {
  let accumulator = [];
  categories.forEach((item) => {
    accumulator[item.id] = item.name;
  });
  return accumulator;
};

export const stripHtml = (html) => {
  let doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};
