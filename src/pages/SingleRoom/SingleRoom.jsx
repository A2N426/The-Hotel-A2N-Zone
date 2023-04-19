import React from 'react';
import { FaAmilia, FaOdnoklassniki, FaCommentsDollar } from 'react-icons/fa';

const SingleRoom = ({ room }) => {
    const { id, bed, capacity, cost, description, img, type } = room;
    return (
        <div className="card bg-base-100 shadow-xl p-10 border border-purple-800">
            <h2 className='text-3xl'>{type}</h2>
            <figure className='mt-4'>
                <img className='w-96 rounded-lg' src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
                <p>{description}</p>
                <div className='flex items-center justify-evenly mt-3 text-xl text-purple-800'>
                    <p className='flex gap-2 items-center'> <FaAmilia className='mt-1' /> {bed}</p>
                    <p className='flex gap-2 items-center'> <FaOdnoklassniki /> {capacity}</p>
                    <p className='flex gap-2 items-center'> <FaCommentsDollar /> {cost}</p>
                    <button className="btn btn-primary">Book</button>
                </div>
            </div>
        </div>
    );
};

export default SingleRoom;