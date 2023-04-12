import React, { useState, useEffect } from "react";
import { Editor } from '@tinymce/tinymce-react';
import { TINYMCE_KEY, CLOUD_NAME, UPLOAD_PRESET_NAME } from "@/config/account";
import axios from "axios";
import { addPost, refresh } from "@/lib/action";

const NewPost = ({ setOpenModal, getPosts}) => {
  const [confirmModal, setConfirmModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);
  const [isValid, setIsValid] = useState("true");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const handleEditorChange = async (text) => {
    setContent(text);
  };

  const save = async (type) => {
    await refresh();
    await addPost(content, title, type, link);
    getPosts();
    setOpenModal(false);
  };

  return (
    <>
      <div className="relative p-6 flex-auto">
        <div style={{ width: "100%" }}>
          <div>
            <input style={{ marginBottom: "10px" }} className="appearance-none rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username" type="text" placeholder="Title" onChange={(e) => { setTitle(e.target.value) }} />
          </div>
          <div>
            <input style={{ marginBottom: "10px" }} className="appearance-none rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username" type="text" placeholder="Other links" onChange={(e) => { setLink(e.target.value) }} />
          </div>
          <Editor
            apiKey={TINYMCE_KEY}
            init={{
              height: 600,
              menubar: true,
              config: {},
              images_upload_base_path: `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
              images_upload_credentials: true,
              plugins: [
                'advlist', 'autolink',
                'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                'fullscreen', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
              ],
              toolbar: `undo redo| link image | fontfamily fontsize | bold italic underline | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist checklist outdent indent | help`,
              image_title: true,
              automatic_uploads: true,
              file_picker_types: "image",
              images_upload_handler: async blobInfo => {
                return new Promise(async (resolve, reject) => {
                  try {
                    let data = new FormData();
                    var url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
                    data.append("file", blobInfo.blob(), blobInfo.filename());
                    data.append("upload_preset", UPLOAD_PRESET_NAME);
                    const res = await axios.post(url, data);
                    resolve(res.data.secure_url);
                  } catch (e) {
                    console.log(e);
                    reject(e);
                  }
                });
              },
            }}
            onEditorChange={handleEditorChange}
          />
        </div>
      </div>
      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        <button
          className="bg-emerald-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setCancelModal(true)}
          style={{ backgroundColor: "rgb(239 68 68)", color: "white" }}
        >
          Close
        </button>
        <button
          className="bg-emerald-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => {
            if (content == "" || title == "")
              setIsValid(false);
            else
              setIsValid(true)
            setConfirmModal(true)
          }}
          style={{ backgroundColor: "rgb(64, 109, 89)", color: "white" }}
        >
          Add Post
        </button>
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
                        {isValid ?
                          <p className="text-sm text-gray-500">Do you want to add the new post?</p> :
                          <p className="text-sm text-gray-500">Sorry, please fill in the title and content input.</p>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  {isValid ?
                    <button type="button"
                      onClick={()=>{save("published"); setConfirmModal(false); }}
                      className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">
                      Yes
                    </button> : ""
                  }
                  <button type="button"
                    onClick={() => setConfirmModal(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                    Cancel</button>
                </div>
              </div>
            </div>
          </div>
        ) : null
      }
      {
        cancelModal ? (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">

                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="mt-2">
                          <p className="text-sm text-gray-500">Do you want to save this post as a draft?</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  {isValid ?
                    <button type="button"
                      onClick={()=>{save("draft"); setCancelModal(false); }}
                      className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">
                      Yes
                    </button> : ""
                  }
                  <button type="button"
                    onClick={() => {setCancelModal(false); setOpenModal(false)}}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                    No</button>
                </div>
              </div>
            </div>
          </div>
        ) : null
      }
    </>
  );
};


export default NewPost;