import React, { useState, useEffect } from "react";
import NewPost from "./newPost";
import ListPost from "./listPost";
import { getPost, refresh } from "@/lib/action";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
// import UserDropdown from "components/Dropdowns/UserDropdown.js";

function Posts() {
  const [type, setType] = useState("published");
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getPosts = async () => {
    await refresh();
    const data = await getPost(type);
    setPosts(data.posts);

  }

  useEffect(() => {   
    getPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <div style={{ fontWeight: '600', fontSize: '1.5rem' }}>
        Posts
      </div>
      <div>
        Create, edit, and manage the posts.
      </div>
      <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700" style={{ marginTop: "10px" }}>
        <ul className="flex" style={{ cursor: "pointer" }}>
          <li className="mr-6">
            <div className="text-blue-500 hover:text-blue-800" onClick={() => { setType('published'); }}
              style={{ textDecoration: type == 'published' ? "underline" : "none" }}>Published</div>
          </li>
          <li className="mr-6">
            <div className="text-blue-500 hover:text-blue-800" onClick={() => { setType('draft'); }}
              style={{ textDecoration: type == 'draft' ? "underline" : "none" }}>Drafts</div>
          </li>
        </ul>
      </div>
      <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700" style={{ marginTop: "10px" }}>
        <div className="flex">
          <div style={{display: "block", marginBottom: "auto", marginTop: "auto", fontWeight: "bold"}}>
            Posts
          </div>
          {type == "published" &&
            <button
              onClick={() => { setOpenModal(true) }}
              className=" text-white font-bold py-2 px-4 border rounded"
              style={{ display: "flex", marginLeft: "auto", fontSize: "12px", backgroundColor: "rgb(64, 109, 89)" }}>
              Add new post
            </button>
          }
        </div>
        <ListPost posts={posts} getPosts={getPosts} type={type}/>
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
                    Add new post
                  </h3>
                </div>
                {/*body and footer*/}
                <NewPost setOpenModal={setOpenModal} getPosts={getPosts}/>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>

  );
}

export default Posts;