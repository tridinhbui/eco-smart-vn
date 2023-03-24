import React, { useState } from "react";
import Image from 'next/image';
import logo from '../../public/images/ess_logo.jpg';
import { ADMIN_LOGIN_TEXT } from "@/config/text";
import { ADMIN_LOGIN_API } from "@/config/api";
import { useRouter } from 'next/navigation';
import { login } from "@/lib/action";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState(false);

  const loginSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    const username = e.target.elements.username?.value;
    const password = e.target.elements.password?.value;
    const response  = await login(username, password);
    if (response.statusCode===200)
      router.push('/admin');
    else {
      setError(true);
    }
  }

  return (
    <div className="loginAdmin">
      <div
        className="g-6 flex h-full flex-wrap items-center justify-center">
        <div
          className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
          <Image
            src={logo}
            className="w-full"
            alt="Sample image" />
        </div>
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
          <form onSubmit={loginSubmit}>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <label className="block mb-6">
                <span className="text-black-700">{ADMIN_LOGIN_TEXT.username}</span>
                <input
                  type="text"
                  name="username"
                  className="block mt-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 inputText"
                  required
                />
              </label>
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <label className="block mb-6">
                <span className="text-black-700">{ADMIN_LOGIN_TEXT.password}</span>
                <input
                  type="password"
                  name="password"
                  className="block mt-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 inputText"
                  required
                />
              </label>
            </div>
            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                style={{ backgroundColor: "rgb(64, 109, 89)", color: "white" }}>
                Login
              </button>
              {error && <div style={{color:'red'}}>{ADMIN_LOGIN_TEXT.error}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}