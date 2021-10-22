import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

// export default () =>
// {
//     return <div>Blog App</div>
// };

const App = () =>
{
    return (
        <div className="container">
            <h1>Create Post</h1>
            <PostCreate />

            <hr />
            <h1>List Post</h1>
            <PostList />
        </div>
    );

};

export default App;