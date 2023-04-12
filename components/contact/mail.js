
import React, { useState } from "react";
import Image from 'next/image';
import { MAIL_TEXT } from '../../config/text';
import { ACCESS_KEY, SECRET_KEY, DEFAULT_MAIL } from '../../config/account';

const AWS = require('aws-sdk');

const SES_CONFIG = {
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
  region: 'us-east-2',
};
const AWS_SES = new AWS.SES(SES_CONFIG);

export default function Mail() {
  const [showAlert, setShowAlert] = useState(false);
  const sendMail = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email?.value;
    const name = e.target.elements.name?.value;
    const message = e.target.elements.message?.value;
    let params = {
      Source: DEFAULT_MAIL,
      Destination: {
        ToAddresses: [
          DEFAULT_MAIL
        ],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `This is message from ${name} - ${email}: ${message}`,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `Message from ${name} - ${email}!`,
        }
      },
    };
    await AWS_SES.sendEmail(params).promise();
    setShowAlert(true);
  }

  return (
    <>
      <div className="contact-us-body">
        <div className="content-left">
          <h1 className="text1">{MAIL_TEXT.text1}</h1>
          <h2 className="text2">{MAIL_TEXT.text2}</h2>
        </div>

        <div className="content-right">
          <div className="w-full md:w-96 md:max-w-full mx-auto">
            <div className="p-6 border border-gray-300 sm:rounded-md" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
              <form onSubmit={sendMail}>
                <label className="block mb-6">
                  <span className="text-gray-700">{MAIL_TEXT.name}</span>
                  <input
                    type="text"
                    name="name"
                    className="block w-full mt-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">{MAIL_TEXT.email}</span>
                  <input
                    name="email"
                    type="email"
                    className="block w-full mt-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">{MAIL_TEXT.message}</span>
                  <textarea
                    name="message"
                    className=" block w-full mt-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    rows="5"
                    placeholder=""
                  ></textarea>
                </label>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="submit-button h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
                  >
                    {MAIL_TEXT.button}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showAlert ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowAlert(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="flex">
                  <div className="flex items-center justify-center flex-none w-12 h-12 bg-green-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                      {MAIL_TEXT.notification}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full" style={{display: "flex", justifyContent: "end", marginLeft: "auto", cursor: "pointer"}} 
                    onClick={() => setShowAlert(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}