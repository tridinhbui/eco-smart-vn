import React, { useState, useEffect } from "react";
import { CLOUD_NAME, UPLOAD_PRESET_NAME } from "@/config/account";
import axios from "axios";
import { addProduct, refresh } from "@/lib/action";

const NewProduct = ({ setOpenModal, getProducts, brands }) => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [initialPrice, setInitialPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [email, setEmail] = useState(brands[0].email);
  const [condition, setCondition] = useState("Available");
  const [brand, setBrand] = useState(brands[0].name);
  const [confirmModal, setConfirmModal] = useState(false);
  const [isProcess, setIsProcess] = useState(false);
  const [message, setMessage] = useState("");

  const handleFile = async (e) => {
    let fileList = e.target.files;
    for (let i = 0; i < fileList.length; i++) {
      setFiles(files => [...files, fileList[i]]);
    }
  };

  const saveProduct = async () => {
    setIsProcess(true);
    await refresh();
    await addProduct(files, name, description, initialPrice, salePrice, brand, email, condition);
    setConfirmModal(false);
    setOpenModal(false);
    setIsProcess(false);
    getProducts();
  };


  const removeImage = (i) => {
    setFiles(files.filter(x => x.name !== i));
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
            {files.map((file, key) => {
              return (
                <div key={key} className="overflow-hidden relative">
                  <i onClick={() => { removeImage(file.name) }} className="mdi mdi-close absolute right-1 hover:text-white cursor-pointer">
                    <svg className="h-4 w-4 text-orange" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </i>
                  <img className="h-48 w-48 rounded-md" src={URL.createObjectURL(file)} />
                </div>
              )
            })}
          </div>
          <div>
            <input style={{ marginTop: "20px" }} className="appearance-none rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name" type="text" placeholder="Name of product" onChange={(e) => { setName(e.target.value) }} />
          </div>
          <div>
            <textarea  style={{ marginTop: "20px" }} className="appearance-none rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="description" type="text" placeholder="Description" rows={5} onChange={(e) => { setDescription(e.target.value) }} />
          </div>
          <div>
            <input type="number" style={{ marginTop: "20px" }} className="appearance-none rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="initialPrice" placeholder="Initial Price" onChange={(e) => { setInitialPrice(e.target.value) }} />
          </div>
          <div>
            <input type="number" style={{ marginTop: "20px" }} className="appearance-none rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="salePrice" placeholder="Sale Price" onChange={(e) => { setSalePrice(e.target.value) }} />
          </div>
          <div style={{ marginTop: "20px" }}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select brand</label>
            <select defaultValue={brands[0].name} id="status" onClick={(e) => { setBrand(e.target?.value); setEmail(brands[e.target.options.selectedIndex].email); }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {brands.map((brand, index) => (
                <option value={brand.name} key={index}>{brand.name}</option>
              ))}
            </select>
          </div>
          <div>
            <input type="email" style={{ marginTop: "20px" }} className="appearance-none rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username" placeholder="Supplier's email" value={email} disabled />
          </div>
          <div style={{ marginTop: "20px" }}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select condition</label>
            <select defaultValue={condition} id="status" onClick={(e) => { setCondition(e.target?.value); }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="Public">Available</option>
              <option value="Private">Out of stock</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b" style={{ marginTop: "30px" }}>
          <button
            className="bg-emerald-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setOpenModal(false)}
            style={{ backgroundColor: "rgb(239 68 68)", color: "white" }}
          >
            Close
          </button>
          <button
            className="bg-emerald-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              if (files.length == 0) {
                setMessage("Please upload at least one image")
              } else if (description == "") {
                setMessage("Please fill in the description")
              } else if (email == "") {
                setMessage("Please fill in the supplier's email")
              } else {
                setMessage("");
                setConfirmModal(true);
              }
            }}
            style={{ backgroundColor: "rgb(64, 109, 89)", color: "white" }}
          >
            Add Product
          </button>
        </div>
        <div className="flex text-red-500 font-bold items-center justify-center">{message}
        </div>
      </div>
      {
        confirmModal ? (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">Do you want to add the new product?</p>
                      </div>
                    </div>
                  </div>
                </div>
                {
                  isProcess == true ?
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button disabled="" type="button" className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                        <svg aria-hidden="true" role="status" className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"></path>
                        </svg>
                        Processing...
                      </button>
                    </div> :
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button type="button"
                        onClick={saveProduct}
                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">
                        Yes
                      </button>
                      <button type="button"
                        onClick={() => setConfirmModal(false)}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                        Cancel</button>

                    </div>
                }
              </div>
            </div>
          </div>
        ) : null
      }
    </>
  );
};


export default NewProduct;