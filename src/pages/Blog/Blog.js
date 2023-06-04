import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {

    useTitle('Blog')

    return (
        <div>
            <div className='m-8'>
                <div>
                    <h2 className='text-2xl font-medium'>Question-1 : What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p className='text-xl font-semibold mb-3 text-gray-600'>Ansewer : Access token and refresh token used for server side authentication systems and used for securing APIs and web application. Access token is a piece of information issued by an authentication server that grants  us access to specific resources and helps us to get specific data and secure our data.User get access token for a few time. when any user send request to the server to get protected data they include the access token in the request headers.Access token contain encoded information.Depend on this information user get permiton to get secure data.On the other hand user get refresh token for long time.when access token expired then the user can use the refresh token to request a new access token from the authentication server without requiring the user to reauthenticate.

                    </p>

                    <h2 className='text-2xl font-medium'>Question-2 :Compare SQL and NoSQL databases?  </h2>
                    <p className='text-xl font-semibold mb-3 text-gray-600'>Ansewer :SQL means structure query language and NoSQL means not only sql.This are two differents type database management systems.SQL database management system has differents structure for store data use tables with rows and columns to store structured data.On the other hand NoSQL use key-value pairs for store data it is very flexibility than SQL.which application need I/O syestem very queekly NoSQL is very useful for this .Agian which applicatin have huge data SQL is useful for this. SQL supports powerful querying capabilities, including complex joins, aggregations, and transact. SQL databases are commonly used for applications with well-defined schemas, structured data, complex relationships, and requirements for ACID transactions. They are widely used for traditional business applications, financial systems, e-commerce platforms, and reporting systems.On the otherhand NoSQL used real-time-application.</p>

                    <h2 className='text-2xl font-medium'>Question-3 : What is express js? What is Nest JS? </h2>
                    <p className='text-xl font-semibold mb-3 text-gray-600'>Ansewer : Express.js is a very famous web application framework for Node.js. It provides  flexible set of features for building web applications . Through this framework devlopers can handle HTTP requests, define routes, manage middleware, and render views efficiently.Through express js devlopers can handling various HTTP methods =GET, POST, PUT, DELETE,PATCH. Express.js provides mechanisms for handling errors and defining error-handling middleware.On the other hand Next.js is a popular open-source framework for server-rendered React applications. Next.js provides a powerful development experience and a set of features to create highly performant and SEO-friendly web applications.Next.js is often used for building complex web applications, blogs, e-commerce platforms, content management systems, and other projects that require a combination of server-side rendering, static site generation, and dynamic functionality.</p>

                    <h2 className='text-2xl font-medium'>Question-4 : What is MongoDB aggregate and how does it work? </h2>
                    <p className='text-xl font-semibold mb-3 text-gray-600'>Ansewer : MongoDB's aggregate is a powerful method that allows you to perform advanced data aggregation operations on collections within the MongoDB database. It enables you to process and transform data using a flexible and expressive framework.
                        How it works: Using the aggregation pipeline, you can perform a wide range of data transformations, such as filtering, grouping, projecting, sorting, joining, and performing complex calculations or statistical operations on the data.MongoDB's aggregation framework provides a powerful query language that allows you to express complex data processing requirements in a concise and readable manner. It enables you to combine multiple stages and operators to perform intricate data transformations. MongoDB's aggregate is particularly useful when you need to perform complex data analysis, generate reports, summarize data, or retrieve aggregated results from large collections.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Blog;