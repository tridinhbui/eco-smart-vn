
import React, { useState, useEffect } from "react";
import { Editor } from '@tinymce/tinymce-react';
import { TINYMCE_KEY, CLOUD_NAME, UPLOAD_PRESET_NAME } from "@/config/account";
import axios from "axios";
import { updatePost, refresh } from "@/lib/action";

const EditPost = ({ setOpenModal, getPosts, content, setContent, title, setTitle, id, status, type, link, setLink }) => {
  const [confirmModal, setConfirmModal] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [newStatus, setNewStatus] = useState(status);
  const handleEditorChange = async (text) => {
    setContent(text);
  };

  const save = async (isChangeType) => {
    await refresh();
    if (isChangeType)
      await updatePost(content, title, id, newStatus,"published");
    else
      await updatePost(content, title, id, newStatus,type);
    getPosts(type);
    setConfirmModal(false);
    setOpenModal(false);
  };

  return (
    <>
      <div className="relative p-6 flex-auto">
        <div style={{ width: "100%" }}>
          <div>
            <input style={{ marginBottom: "10px" }} className="appearance-none rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username" type="text" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
          </div>
          <div>
            <input style={{ marginBottom: "10px" }} className="appearance-none rounded-lg border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username" type="text" placeholder="Other links" value={link} onChange={(e) => { setLink(e.target.value) }} />
          </div>
          <Editor
            apiKey={TINYMCE_KEY}
            value={content}
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
                    reject(e);
                  }
                });
              },
            }}
            onEditorChange={handleEditorChange}
          />
          <div style={{ marginTop: "20px" }}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a status</label>
            <select defaultValue={newStatus} id="status" onClick={(e) => { setNewStatus(e.target?.value); }}
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
          onClick={() => {setConfirmModal(true); setIsAdd(false);}}
          style={{ backgroundColor: "rgb(64, 109, 89)", color: "white" }}
        >
          Save Changes
        </button>
        {type == "draft" && (
          <button
            className=" font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {setConfirmModal(true); setIsAdd(true);}}
            style={{ backgroundColor: "rgb(59, 130, 246)", color: "white" }}
          >
            Add the post
          </button>
        )}
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
                        {
                          isAdd ? <p className="text-sm text-gray-500">Do you want to add this post to the page?</p>:
                          <p className="text-sm text-gray-500">Do you want to save the edited post?</p>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button type="button"
                    onClick={()=>{if (isAdd) save(true); else save(false);}}
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">
                    Yes</button>
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
    </>
  )
}

export default EditPost;