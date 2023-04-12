import React, { useState, useEffect } from "react";
import NewPost from "./newPost";
import ListPost from "./listPost";
import { getProduct, refresh } from "@/lib/action";
import NewProduct from "./newProduct";
import ListProduct from "./listProduct";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
// import UserDropdown from "components/Dropdowns/UserDropdown.js";

function Products() {
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProducts = async () => {
    await refresh();
    const data = await getProduct();
    setProducts(data.products);
  }

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div style={{ fontFamily: "'Inter', sans-serif" }}>
        <div style={{ fontWeight: '600', fontSize: '1.5rem' }}>
          Products
        </div>
        <div>
          Create, edit, and manage the products.
        </div>
        <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700" style={{ marginTop: "10px" }}>
          <button
            onClick={() => { setOpenModal(true) }}
            className=" text-white font-bold py-2 px-4 border rounded"
            style={{ fontSize: "12px", backgroundColor: "rgb(64, 109, 89)" }}>
            Add new product
          </button>
        </div>
        <ListProduct products={products} getProducts={getProducts}/>
      </div>
      {openModal ? (
        <>
          <div
            className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto" style={{ width: "80%" }}>
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add new Products
                  </h3>
                </div>
                {/*body and footer*/}
                <NewProduct setOpenModal={setOpenModal} getProducts={getProducts} />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>

  );
}

export default Products;