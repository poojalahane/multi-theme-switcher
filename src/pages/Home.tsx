import { useEffect, useState } from "react";
import axios from "axios";
import { FiShoppingCart, FiStar } from "react-icons/fi";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="pt-24 pb-8 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Featured Products
        </h1>

        {loading ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* {[...Array(6)].map((_, i) => (
              <Skeleton key={i} />
            ))} */}
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product: any) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col"
              >
                <div className="relative mb-4 flex-grow">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain w-full h-48 mx-auto p-4"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 flex items-center bg-yellow-100 dark:bg-yellow-800 px-2 py-1 rounded-full">
                    <FiStar className="text-yellow-500 dark:text-yellow-300 mr-1" />
                    <span className="text-xs font-medium text-yellow-800 dark:text-yellow-100">
                      {product.rating.rate}
                    </span>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  <button className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition transform hover:scale-105">
                    <FiShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;

// import { useEffect, useState } from "react";
// import axios from "axios";

// const Home = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => setProducts(res.data.slice(0, 6)))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="grid md:grid-cols-3 gap-6 lg:mt-8 ">
//       {products.map((product: any) => (
//         <div
//           key={product.id}
//           className="bg-white dark:bg-gray-700 p-4 rounded shadow"
//         >
//           <h3 className="font-bold mb-2">{product.title}</h3>
//           <p className="text-sm">{product.description.slice(0, 60)}...</p>
//           <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
//             Buy
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;
