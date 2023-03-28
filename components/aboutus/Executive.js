import React, { useState } from 'react'
import { ABOUTUS_PAGE } from '../../config/api'
import ItemExecutive from './ItemExecutive';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";


export default function Executive() {
    // use hook
    const [showModal, setShowModal] = useState(false)
    const [contentCard, setContentCard] = useState({})

    // render element
    const { title, list_excutive } = ABOUTUS_PAGE.executive_aboutus
    const renderListExcutive = () => {
        return list_excutive.map((item, index) => {
            return  <ItemExecutive setContentCard={setContentCard} setShowModal={setShowModal} item={item} key={index} />
        })
    }

    //----------------------------------------------------------------
    return (
        <>
            <h2 className='text-center text-4xl hover:text-5xl font-bold mb-10 h-10' style={{ color: '#365849' }}>{title}</h2>
            <div className='container mx-auto'>
                <div className='mx-20'>
                    <div className=' rounded-2xl' style={{ backgroundColor: '#375849' }}>
                        <div className='py-10 mx-12'>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">

                                {renderListExcutive()}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModal ? (
                <div className="fixed inset-0 z-50 overflow-y-auto mt-10">

                    <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40" 
                        onClick={() => setShowModal(false)}
                    ></div>

                    <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                            <div className='absolute left-7 top-6 ' onClick={() =>
                                setShowModal(false)
                            }>  <FontAwesomeIcon icon={faX} style={{ fontSize: 25, cursor: 'pointer' }} /></div>

                            <div className="mt-5 sm:flex">

                                <div style={{ height: '500px' }} onClick={() => setShowModal(true)} className=' m-2 text-center my-5 p-5 bg-white rounded-xl flex flex-col justify-center items-center '>
                                    <img style={{ border: '10px solid #375849' }} className='rounded-full w-2/3' src={contentCard.img} alt="123" />

                                    <div className='space-y-3 pt-5 text-gray-600'>
                                        <p className='text-xl  font-bold'>{contentCard.name}</p>
                                        <p className='text-lg'>{contentCard.position}</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem sapiente dolor, unde vitae animi amet cumque autem corrupti. Ipsum odit distinctio pariatur nihil nulla tempore ea similique nemo minima?</p>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            ) : null}
        </>
    );
}
