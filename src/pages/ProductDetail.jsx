import ProductDescription from '../components/ProductDescription';
import ProductReview from '../components/ProductReview';

export default function ProductDetail() {
  return (
    <div className="max-w-screen-xl mx-auto p-10 md:p-2">
      {/* Navigation */}
      <p className="py-3">Mens{" > "}<b>Pant</b></p>

      {/* Main  Content */}
      <div className="flex flex-col md:flex-row gap-10 min-h-[70vh]">
        <div className="images w-full md:w-1/2">
          <img
            className="object-contain w-full"
            src="https://dummyimage.com/600x400/000/fff"
          />
          <div className="other-images grid grid-cols-4 py-3 gap-3 justify-items-stretch">
            <img
              className="object-contain "
              src="https://dummyimage.com/150x100/6b306b/fff&text=Small+Image"
            />
            <img
              className="object-contain"
              src="https://dummyimage.com/150x100/6b786b/fff&text=Small+Image"
            />
            <img
              className="object-contain"
              src="https://dummyimage.com/150x100/3f306b/fff&text=Small+Image"
            />
            <img
              className="object-contain"
              src="https://dummyimage.com/150x100/6b303f/fff&text=Small+Image"
            />
          </div>
        </div>
        <div className="product-info w-full md:w-1/2">
          <h1 className="text-3xl py-3 max-w-[32rem]">
            Lorem Ipsum Neque porro quisquam est qui dolorem{" "}
          </h1>
          <h3 className="text-gray-600 py-3 text-sm">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur,Neque porro quisquam est qui dolorem{" "}
          </h3>
          <p className="text-sm tracking-widest py-3"><span className="text-orange-600 font-semibold">4.0 ****</span> 300 reviews</p>
          <div className="price flex gap-3 items-center py-3">
            <span className="line-through">USD $300</span>
            <span className="text-xl font-bold"> USD $200 </span>
            <span className="text-red-700">-33%</span>
          </div>
          <hr />
          <button className="bg-violet-700 text-white my-3 p-2 tracking-wide uppercase rounded-lg">
            Add to cart
          </button>
          <div className="grid grid-cols-2 p-3">
            <p className="py-3">Secure Payments</p>
            <p className="py-3">Free Shipping</p>
            <p className="py-3">Free Returns</p>
            <p className="py-3">Safety Certified</p>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <ProductDescription />

      {/* Review Section */}
      <ProductReview />
    </div>
  );
}
