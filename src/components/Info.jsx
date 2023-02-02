import React, { useState } from 'react';

const Info = ({ data }) => {
    const { name, id, username, email, phone, website, company } = data
    const { street, suite, city, zipcode, geo } = data.address
    const [mood, setMood] = useState(false)

    return (
        <section className=' bg-gray-100 rounded-xl mt-6  '>
            <div className='grid grid-cols-5  h-24 items-center'>

                <p>{company.name}</p>

                <div>
                    <p className='font-semibold'>CONTACT</p>
                    {name}
                </div>
                <div>
                    <p className='font-semibold'>CITY</p>
                    {city}
                </div>
                <div>
                    <p className='font-semibold'>STREET</p>
                    {street}
                </div>
                {/* <p>{phone}</p> */}

                <button className={`w-32 mx-auto rounded-full ${mood ? "btn-xs btn-error" : "btn-xs btn-success"}`}
                    onClick={() => setMood(!mood)}>{mood ? "Hide Details" : "View Details"}
                </button>
            </div>
            {
                mood && <section className='p-8'>
                    <article className='text-start '>
                        <p className='font-bold'>Description</p>
                        <p>{company.catchPhrase}  </p>

                        <div className='grid grid-cols-2 '>

                            <div className='space-y-6'>
                                <p className='font-bold mt-2 '>Contact Person</p>

                                <div>
                                    <p>{name}</p>
                                </div>
                                <div>
                                    <p className='font-bold'>Designation</p>
                                    <p>{company.bs}</p>
                                </div>
                                <div>
                                    <p className='font-bold'>Email</p>
                                    <p>{email}</p>
                                </div>
                                <div>
                                    <p className='font-bold'>Phone</p>
                                    <p>{phone}</p>
                                </div>


                            </div>




                            <div className='space-y-6'>
                                <p className='font-bold mt-2 '>Address</p>

                                <div>
                                    <p className='font-bold'>City</p>
                                    <p>{city}</p>
                                </div>
                                <div>
                                    <p className='font-bold'>Zipcode</p>
                                    <p>{zipcode}</p>
                                </div>
                                <div>
                                    <p className='font-semibold'>STREET</p>
                                    {street}
                                </div>
                                <div>
                                    <p className='font-bold'>Company Website</p>
                                    <p>{website}</p>
                                </div>


                            </div>
                        </div>
                    </article>



                </section>
            }
        </section>
    );
};

export default Info;