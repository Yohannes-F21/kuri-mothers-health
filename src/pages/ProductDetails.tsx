import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredProductsBySlug } from "@/data/featured-products";

const ProductDetails = () => {
  const { slug } = useParams();
  const product = slug ? featuredProductsBySlug[slug] : undefined;

  if (!product) {
    return (
      <main>
        <section className="section-padding section-y max-w-[1440px] mx-auto text-center pt-32 md:pt-40">
          <p className="label-sm mb-4 text-accent">Product</p>
          <h1 className="heading-lg mb-4">Product details not found.</h1>
          <p className="body-md mb-8">
            The product you are looking for may have been moved or is
            unavailable.
          </p>
          <Button variant="accent-outline" asChild>
            <Link to="/products">
              <ArrowLeft className="mr-1" /> Back to Products
            </Link>
          </Button>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="relative bg-card pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.accent/18),transparent_45%)]" />
        <div className="section-padding max-w-[1440px] mx-auto relative">
          <Button variant="ghost" className="mb-8" asChild>
            <Link to="/products">
              <ArrowLeft className="mr-1" /> Back to Products
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="rounded-2xl overflow-hidden border border-border bg-background shadow-sm">
              <img
                src={product.img}
                alt={product.name}
                className="w-full aspect-[14/15]  "
                loading="lazy"
                // width={1200}
                // height={1200}
              />
            </div>

            <div>
              <p className="label-sm mb-3 text-accent">{product.tag}</p>
              <h1 className="heading-lg mb-5">{product.name}</h1>
              <p className="body-lg mb-4">{product.shortDescription}</p>
              <p className="body-md mb-8">{product.longDescription}</p>

              <div className="bg-background rounded-xl border border-border p-6 mb-6">
                <p className="text-sm font-semibold text-foreground mb-3 inline-flex items-center gap-2">
                  <Leaf size={16} className="text-primary" /> Ingredients
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient) => (
                    <span
                      key={ingredient}
                      className="text-xs px-3 py-1 rounded-full bg-sage-light text-primary font-medium"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-background rounded-xl border border-border p-6">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Benefits
                </p>
                <ul className="space-y-2.5">
                  {product.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle
                        size={16}
                        className="text-primary shrink-0 mt-0.5"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="hero" asChild>
                  <Link to="/contact">Order Inquiry</Link>
                </Button>
                <Button variant="accent-outline" asChild>
                  <Link to="/products">Browse All Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
