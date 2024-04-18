import React from 'react';

const UserList = ({ user }) => {
    // Check if user data is available
    if (!user) {
        return <div>Loading...</div>;
    }

    const { avatar_url, name, login, following, location } = user;

    return (
        <div>
            <img src={avatar_url} alt='' style={{ borderRadius: '50%', width: '50%', border: '20px solid black' }} />
            <a href={`https://github.com/${login}`}>{name || login}</a>
            <p>Following: {following}</p>
            <p>Location: {location || 'Not specified'}</p>
        </div >
    );
};

export default UserList;
