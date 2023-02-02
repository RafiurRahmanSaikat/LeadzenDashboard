import React, { useState } from 'react';

const Info = ({ data }) => {
    const { name, id, username, email, phone, website, company } = data
    const { street, suite, city, zipcode, geo } = data.address
    console.log(company.name);
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
                    <article className='text-start space-y-4 '>
                        <p className='font-bold'>Description</p>
                        <div>
                            <p>{company.catchPhrase}  {company.bs}</p>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className=' '>
                             <p>{company.catchPhrase}</p>
                             <p>{company.catchPhrase}</p>
                             <p>{company.catchPhrase}</p>
                             <p>{company.catchPhrase}</p>
                             <p>{company.catchPhrase}   </p>
                                
                            </div>
                            <div>
                               <p> {company.bs}</p>
                               <p> {company.bs}</p>
                               <p> {company.bs}</p>
                               <p> {company.bs}</p>
                               <p> {company.bs}</p>
                                
                            </div>
                        </div>
                    </article>



                </section>
            }
        </section>
    );
};

export default Info;