import React from 'react';

const Blogs = () => {
    return (
        <div className='w-full px-6 bg-pink-200'>
            <div className='rounded-md my-3  p-3'>
                <h1 className='text-2xl font-semibold text-pink-600 mb-4'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className='font-semibold'>
                    <span className='text-md font-bold text-pink-600'>Access token:-</span>
                    <li>An access token is a credential that is issued to a user after they successfully authenticate and authorize their identity.</li>
                    <li>It is typically a long string of characters and is used to access protected resources or perform authorized actions on behalf of the user.</li>
                    <li>Access tokens are often short-lived, meaning they have an expiration time to enhance security.</li>

                    <p className='mt-4'>
                        <span className='text-md font-bold text-pink-600'>Refresh Token:- </span>
                        <li>Refresh tokens are securely stored on the client-side and sent to the server when needed.</li>
                        <li>A refresh token is a long-lived credential that is used to obtain a new access token </li>
                        <li>Unlike access tokens, refresh tokens are not sent with each request to access protected resources.</li>
                    </p>
                </p>
            </div>
            <div className='rounded-md my-3  p-3'>
                <h1 className='text-2xl font-semibold text-pink-600 mb-4'>Compare SQL and NoSQL databases?</h1>
                <p className='font-semibold'>
                    <span className='text-md font-bold text-pink-600'>SQL databases:-</span>
                    <li>Structure: SQL databases are based on the relational model and use tables to store data. They have a predefined schema with fixed columns and data types.</li>
                    <li>Data Integrity: SQL databases enforce data integrity through features like primary keys, foreign keys, and constraints. They ensure data consistency and enforce relationships between tables.</li>
                    <li>Examples: MySQL, PostgreSQL, Oracle, SQL Server.</li>
                </p>

                <p className='font-semibold'>
                    <span className='text-md font-bold text-pink-600'>NoSQL databases:-</span>
                    <li>SStructure: NoSQL databases have a flexible schema or schema-less structure. They can store unstructured, semi-structured, or structured data in various formats like key-value pairs, documents, wide-column stores, or graphs.</li>
                    <li>Scalability: NoSQL databases are designed for horizontal scalability. They can distribute data across multiple servers and handle large volumes of data and high traffic loads.</li>
                    <li>Examples: MongoDB, Cassandra, Redis, CouchDB.</li>
                </p>
            </div>
            <div className='rounded-md my-3  p-3'>
                <h1 className='text-2xl font-semibold text-pink-600 mb-4'>What is express js? What is Nest JS ?</h1>
                <p className='font-semibold'>
                    <span className='text-md font-bold'>Nest Js-- </span>
                    NestJS is a popular open-source Node.js framework used for building efficient, scalable, and maintainable server-side applications. It leverages TypeScript, a typed superset of JavaScript, to provide a robust development experience.
                    <p className='mt-4'>
                        <span className='text-md font-bold'>Express Js--</span>  On the other hand, is a popular web application framework built on top of Node.js. It provides a set of middleware functions and APIs that simplify the process of building web applications with Node.js. Express.js provides features such as routing, handling HTTP requests and responses, handling middleware, and more.
                    </p>

                </p>
            </div>
            <div className='rounded-md my-3  p-3'>
                <h1 className='text-2xl font-semibold text-pink-600 mb-4'>What is MongoDB aggregate and how does it work ? </h1>
                <p className='font-semibold'>
                    In MongoDB, the aggregate operation is used to perform advanced data processing and analysis on the data stored in a collection. It allows you to perform complex operations, transformations, and aggregations on multiple documents within a collection.

                    The aggregate operation takes an array of stages as its argument. Each stage represents a specific data processing step. The stages are executed sequentially, with the output of one stage serving as the input for the next stage. Here are some commonly used stages in the aggregate operation:

                </p>
            </div>

        </div>
    );
};

export default Blogs;