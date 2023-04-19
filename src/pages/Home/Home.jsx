import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleRoom from '../SingleRoom/SingleRoom';

const Home = () => {
    const rooms = useLoaderData()
    console.log(rooms)
    return (
        <div className='lg:flex gap-5 mt-10'>
            {
                rooms.map(room=><SingleRoom
                    key={room.id}
                    room={room}
                ></SingleRoom>)
            }
        </div>
    );
};

export default Home;