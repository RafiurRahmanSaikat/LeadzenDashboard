import React from 'react';

const Info = ({ data }) => {
    console.log("INFO", data)
    const { name,id, username, email, phone, website, compnay } = data
    const { street, suite, city, zipcode, geo } = data.address

    return (
        <section className=' bg-green-300 rounded-xl mt-6  '>
            <div className='grid grid-cols-5 h-24 items-center'>
                <p>{id}</p>
                <p>{name}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{website}</p>
            </div>
        </section>
    );
};

export default Info;