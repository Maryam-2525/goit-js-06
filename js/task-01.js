const list = document.querySelector("#categories");
let categoriesnumbers = list.children.length;
console.log (`Number of categories: ${categoriesnumbers}`);

const listCategories = document.querySelectorAll(`.item`);
for (const category  of listCategories){
    console.log(`category: ${category.firstElementChild.textContent}`) ;
    let quetzal = category.querySelectorAll("li");
    console.log(`Elements: $ {quetzal.length}`);
}
