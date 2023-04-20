import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaAmilia, FaOdnoklassniki, FaCommentsDollar } from 'react-icons/fa';

const Book = () => {
    const rooms = useLoaderData()
    const { id } = useParams()
    const find = rooms.find(room => room.id == id)
    console.log(find)
    const { bed, capacity, cost, description, img, type } = find;
    return (
        <div className='flex items-center justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{type}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <Link to="/" className="btn btn-primary">Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;