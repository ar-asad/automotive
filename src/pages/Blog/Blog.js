import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {

    useTitle('Blog')

    return (
        <div>
            <div className='m-8'>
                <div>
                    <h2 className='text-xl font-semibold'>Question-1 : What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p className='text-lg mb-3'>Ansewer :
                    </p>

                    <h2 className='text-xl font-semibold'>Question-2 :Compare SQL and NoSQL databases?  </h2>
                    <p className='text-lg mb-3'>Ansewer : .</p>

                    <h2 className='text-xl font-semibold'>Question-3 : What is express js? What is Nest JS (google it)? </h2>
                    <p className='text-lg mb-3'>Ansewer :.</p>

                    <h2 className='text-xl font-semibold'>Question-4 : What is MongoDB aggregate and how does it work (google it)? </h2>
                    <p className='text-lg mb-3'>Ansewer :.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;