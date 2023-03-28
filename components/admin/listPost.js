import React, { useState, useEffect } from "react";
import { refresh, deletePost } from "@/lib/action";
import EditPost from "./editPost";
import style from "../../styles/admin.module.css";

const ListPost = ({ posts, getPosts, type }) => {
  const [confirmModal, setConfirmModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedId, setSelectId] = useState("");
  const [selectedTitle, setSelectTitle] = useState("");
  const [selectedContent, setSelectContent] = useState("");
  const [selectStatus, setSelectStatus] = useState("");
  const [selectLink, setSelectLink] = useState("");

  const handleDelete = async()=>{
    await refresh();
    await deletePost(selectedId);
    getPosts();
    setConfirmModal(false);
  }

  return (
    <>
      <div className="grid grid-cols-1 divide-y" style={{ marginTop: "40px" }}>
        <div className="grid grid-cols-5" style={{ marginBottom: "10px", fontWeight: "550" }}>
          <div>Title</div>
          <div>Status</div>
          <div>Date</div>
          <div>View</div>
          <div>Action</div>
        </div>
        {
          posts.map((post, index) => (
            <>
              <div className="grid grid-cols-5" key={index} style={{ marginTop: "15px" }}>
                <div className={style.listPosts}>{post.title}</div>
                <div className={style.listPosts}>{post.privacy}</div>
                <div className={style.listPosts}>{post.createdAt.substr(0, 10)}</div>
                <div className={style.listPosts}>{post.view}</div>
                <div >
                  <button
                    key={index}
                    onClick={() => {
                      setEditModal(true);
                      setSelectContent(post.content);
                      setSelectId(post._id);
                      setSelectTitle(post.title);
                      setSelectStatus(post.privacy);
                      setSelectLink(post.link);
                    }}
                    className=" text-white font-bold py-2 px-4 border rounded"
                    style={{ fontSize: "12px", backgroundColor: "rgb(59 130 246)" }}>
                    Show
                  </button>
                  <button
                    key={index}
                    onClick={() => { setConfirmModal(true); setSelectId(post._id); }}
                    className=" text-white font-bold py-2 px-4 border rounded"
                    style={{ fontSize: "12px", backgroundColor: "rgb(239 68 68)" }}>
                    Delete
                  </button>
                </div>

              </div>
            </>
          ))
        }
      </div>
      {editModal ? (
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
                    Edit post
                  </h3>
                </div>
                {/*body and footer*/}
                <EditPost setOpenModal={setEditModal} getPosts={getPosts} content={selectedContent} setContent={setSelectContent}
                  title={selectedTitle} setTitle={setSelectTitle} id={selectedId} status={selectStatus} type={type} 
                  link={selectLink} setLink={setSelectLink}/>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {
        confirmModal ? (
          <div className="fixed inset-0 z-10 overflow-y-auto" >
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">

                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">Do you want to delete the new post?</p>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button type="button"
                    onClick={handleDelete}
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                    Delete
                  </button>
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
  );
};


export default ListPost;