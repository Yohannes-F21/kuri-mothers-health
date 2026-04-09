import productMint from "@/assets/product-mint.jpg";
import productFennel from "@/assets/product-fennel.jpg";

export type FeaturedProduct = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  ingredients: string[];
  benefits: string[];
  tag: string;
  img: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    slug: "mint-lactation-tea",
    name: "Mint Lactation Tea",
    shortDescription:
      "A fresh and uplifting blend crafted for mothers who want daily lactation support in a tea that feels light and enjoyable.",
    longDescription:
      "A fresh and uplifting blend crafted for mothers who want daily lactation support in a tea that feels light and enjoyable. With the refreshing taste of spearmint and the nourishing support of fennel and fenugreek, this blend makes it easier to turn tea time into a comforting daily routine.",
    ingredients: ["Spearmint", "Fennel", "Fenugreek", "Black Tea"],
    benefits: [
      "Supports healthy breast milk production",
      "Leaves a clean, fresh feeling with every cup",
      "Makes daily tea intake easier and more enjoyable",
      "Helps support digestion and everyday comfort",
    ],
    tag: "With Fenugreek",
    img: productMint,
  },
  {
    slug: "fennel-blend-tea",
    name: "Fennel Blend Tea",
    shortDescription:
      "A warm, aromatic blend designed for mothers who want steady daily lactation support with a familiar, comforting taste.",
    longDescription:
      "Simple, soothing, and naturally comforting, this blend is designed for mothers who prefer a gentler tea experience. Made with fennel and fenugreek, it offers a warm and calming cup that supports lactation while also helping mothers feel more at ease throughout the day.",
    ingredients: ["Fennel", "Fenugreek"],
    benefits: [
      "Supports healthy breast milk production",
      "Helps ease digestion and reduce bloating after meals",
      "Gentle and soothing on the stomach",
      "Encourages relaxation and overall maternal comfort",
    ],
    tag: "Bestseller",
    img: productFennel,
  },
  {
    slug: "lemon-tea-fenugreek-free",
    name: "Lemon Tea (Fenugreek-Free)",
    shortDescription:
      "A bright, citrus forward tea created for mothers who prefer a fenugreek-free option without missing daily support.",
    longDescription:
      "Bright, smooth, and refreshing, this blend is made for mothers who enjoy a lighter tea with a pleasant citrus note. Combining lemongrass, nettle, and black tea, it supports lactation while making daily tea intake feel easy, consistent, and refreshing..",
    ingredients: ["Lemongrass", "nettle", "Black Tea"],
    benefits: [
      "Supports healthy breast milk production",
      "Offers a light, refreshing taste that is easy to enjoy every day",
      "Gentle on the stomach",
      "Encourages regular fluid intake",
      "Has a smooth, comforting aroma",
      "Designed for daily comfort and consistency",
    ],
    tag: "Fenugreek-Free",
    img: productMint,
  },
];

export const featuredProductsBySlug = featuredProducts.reduce<
  Record<string, FeaturedProduct>
>((acc, product) => {
  acc[product.slug] = product;
  return acc;
}, {});
