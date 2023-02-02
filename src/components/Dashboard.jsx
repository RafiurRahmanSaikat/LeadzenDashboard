import React, { useEffect, useState } from 'react';
import { GetData } from './assets/Utilities';
import Info from './Info';

const Dashboard = () => {
    const [DATA, setDATA] = useState(null)
    const [page, setPage] = useState(1)

    useEffect(() => {
        GetData()
            .then(response => {
                setDATA(response)
                console.log(response)
            })
    }, [])


    return (
        <>
            <section className='flex flex-col'>
                {
                    DATA ? DATA.slice(page * 3 - 3, page * 3).map(items => <Info key={items.id} data={items}></Info>) : <p className='text-9xl text-red-700'>LOADING DATA...</p>
                }
            </section>
            <section>
                {
                    DATA &&
                    [...Array(Math.ceil(DATA.length / 3))].map((_, i) => <button onClick={()=>setPage(i)} className="btn btn-warning m-2">{++i}</button>)
                }
            </section>
        </>
    );
};

export default Dashboard;