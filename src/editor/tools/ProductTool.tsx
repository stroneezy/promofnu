import { API, BlockTool, BlockToolConstructorOptions } from "@editorjs/editorjs";

interface ProductData {
  title: string;
  description: string;
  image: string;
  price: string;
}

export default class ProductTool implements BlockTool {
  data: ProductData;
  api: API;

  constructor({ data, api }: BlockToolConstructorOptions<ProductData>) {
    this.data = data || { title: "", description: "", image: "", price: "" };
    this.api = api;
  }

  static get toolbox() {
    return {
      title: "Product",
      icon: "<svg>...</svg>", // Add your SVG icon here
    };
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
    <div>
      <input id="productTitle" type="text" placeholder="Product Title" value="${this.data.title || ''}">
      </div>
      <div>
        <textarea id="productDescription" placeholder="Product Description">${this.data.description || ''}</textarea>
      </div>
      <div>
        <input id="productImage" type="url" placeholder="Product Image URL" value="${this.data.image || ''}">
      </div>
      <div>
        <input id="productPrice" type="number" placeholder="0.00" value="${this.data.price}">
      </div>
    `;
    return wrapper;
  }

  save(blockContent: HTMLElement): ProductData {
    return {
      title: (blockContent.querySelector("#productTitle") as HTMLInputElement).value || "Product title",
      description: (blockContent.querySelector("#productDescription") as HTMLTextAreaElement).value,
      image: (blockContent.querySelector("#productImage") as HTMLInputElement).value,
      price: (blockContent.querySelector("#productPrice") as HTMLInputElement).value,
    };
  }
}
