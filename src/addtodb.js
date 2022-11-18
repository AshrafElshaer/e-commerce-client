import categories from "../../backend/src/data/categories.json";

export const addDataToDb = async () => {
  const data = categories.map(async (cat) => {
    const { category, categoryImage, products } = cat;
    const addCategory = await fetch("http://localhost:8080/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category, categoryImage }),
    }).then((data) => console.log(`category ${category} is added`));

    const items = products.map(async (product) => {
      const addproduct = await fetch("http://localhost:8080/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category, product }),
      }).then((data) => console.log(`product ${product} is added`));
    });
  });
};
