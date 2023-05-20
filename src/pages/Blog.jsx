import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='mt-10 space-y-5 mx-20'>
            <div>
                <h2 className='text-2xl font-semibold mb-3'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p>Access tokens are used in token-based authentication to allow an application to access an API.The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API. The passed token informs the API that the bearer of the token has been authorized to access the API and perform specific actions specified by the Scope that was granted during authorization. Refresh Token is a special token that is used to obtain additional access tokens.  This allows you to have short-lived access tokens without having to collect credentials every time one expires. Access token and Refresh token are stored on the local storage and httpOnly coockies. Local storage is not idial for storing then becasue it is sensitive. That's why it's stored httpOnly coockies.</p>
            </div>

            <div>
                <h2 className='text-2xl font-semibold mb-3'>2. Compare SQL and NoSQL databases?</h2>
                <p>SQL is Structured Query Language. NOSQL is No Structured Query Language. SQL stored data in table format. NOSQL stored data in array of collection format. SQL is relational database management system. NOSQL is dristibuted database management system. SQL is used for complexed queries. NOSQL is not for complex queries</p>
            </div>

            <div>
                <h2 className='text-2xl font-semibold mb-3'>3. What is express js? What is Nest JS?</h2>
                <p>Express JS is a free and open source web applications framework for Node JS. It is used for designing web applications easily and quickly.Nest JS is a framework that helps build Node JS server-side applications. This is one of the fastest-growing Node JS frameworks for building efficient, scalable, and enterprise-grade backend applications using Node JS. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript</p>
            </div>

            <div>
                <h2 className='text-2xl font-semibold mb-3'>4. What is MongoDB aggregate and how does it work?</h2>
                <p>MongoDB aggregation operations process the data records/documents and return computed results. It collects values from various documents and groups them together and then performs different types of operations on that grouped data like sum, average, minimum, maximum, etc to return a computed result. It is similar to the aggregate function of SQL.</p>
            </div>
        </div>
    );
};

export default Blog;