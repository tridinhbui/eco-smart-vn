
import React, { useState, useEffect } from "react";
import { addImage, removeImage, refresh, updateProduct } from "@/lib/action";

const EditProduct = ({ setOpenModal, getProducts, product, setProduct, brands }) => {
  const handleFile = async (e) => {
    await refresh();
    let fileList = e.target.files;
    let images;
    for (let i = 0; i < fileList.length; i++) {
      images = await addImage(product.id, fileList[i])
    }
    setProduct({ ...product, images: images })
  };

  const update = async () => {
    await refresh();
    await updateProduct(product);
    getProducts();
    setOpenModal(false);
  }

  const removeImg = async (url) => {
    await refresh();
    await removeImage(product.id, url);
    setProduct({ ...product, images: product.images.filter(x => x !== url) })
  }

  return (
    <>
      <div className="relative p-6 flex-auto">
        <div className="rounded-lg shadow-xl bg-gray-50">
          <div className="m-4">
            <label className="inline-block mb-2 text-gray-500">Upload Image Product</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd" />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Select a photo</p>
                </div>
                <input required type="file" accept="image/*" multiple="multiple" className="opacity-0" onChange={handleFile} />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {product.images.map((url, key) => {
              return (
                <div key={key} className="overflow-hidden relative">
                  <i onClick={() => { removeImg(url) }} className="mdi mdi-close absolute right-1 hover:text-white cursor-pointer">
                    <svg className="h-4 w-4 text-orange" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </i>
                  <img className="h-48 w-48 rounded-md" src={url} />
                </div>
              )
            })}
          </div>
          <div>
            <input style={{ marginTop: "20px" }} className="appearance-none rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name" type="text" placeholder="Name of product" value={product.name} onChange={(e) => { setProduct({ ...product, name: e.target.value }) }} />
          </div>
          <div>
            <input style={{ marginTop: "20px" }} className="appearance-none rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="description" type="text" placeholder="Description" value={product.description} onChange={(e) => { setProduct({ ...product, description: e.target.value }) }} />
          </div>
          <div>
            <input type="number" style={{ marginTop: "20px" }} className="appearance-none rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="initialPrice" placeholder="Initial Price" value={product.initialPrice} onChange={(e) => { setProduct({ ...product, initialPrice: e.target.value }) }} />
          </div>
          <div>
            <input type="number" style={{ marginTop: "20px" }} className="appearance-none rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="salePrice" placeholder="Sale Price" value={product.salePrice} onChange={(e) => { setProduct({ ...product, salePrice: e.target.value }) }} />
          </div>
          <div style={{ marginTop: "20px" }}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select brand</label>
            <select defaultValue={product.brand} id="status" onClick={(e) => { setProduct({ ...product, brand: e.target?.value, email: brands[e.target.options.selectedIndex].email }) }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {brands.map((brand, index) => (
                <option value={brand.name} key={index}>{brand.name}</option>
              ))}
            </select>
          </div>
          <div>
            <input type="email" style={{ marginTop: "20px" }} className="appearance-none rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username" placeholder="Supplier's email" value={product.email} disabled />
          </div>
          <div style={{ marginTop: "20px" }}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select condition</label>
            <select defaultValue={product.condition} id="status" onClick={(e) => { setProduct({ ...product, condition: e.target.value }) }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="Public">Available</option>
              <option value="Private">Out of stock</option>
            </select>
          </div>
          <div style={{ marginTop: "20px" }}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a status</label>
            <select defaultValue={product.privacy} id="status" onClick={(e) => { setProduct({ ...product, privacy: e.target.value }) }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        <button
          className=" font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setOpenModal(false)}
          style={{ backgroundColor: "rgb(239 68 68)", color: "white" }}
        >
          Close
        </button>
        <button
          className="font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => { update(); }}
          style={{ backgroundColor: "rgb(64, 109, 89)", color: "white" }}
        >
          Save Changes
        </button>

      </div>
    </>
  )
}

export default EditProduct;