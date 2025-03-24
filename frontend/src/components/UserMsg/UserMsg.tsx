import React from 'react';
import './UserMsg.css';

interface Props {
  message: string | undefined;
}

const UserMsg: React.FC<Props> = ({message}) => {
    return (
        <div className='user-item-container'>
                <div className='user-pfp-name-container'>
                  <div className='user-name-container'>
                    You
                  </div>

                  <div className='user-pfp-container'></div>
                </div>

                <div className='user-txt-container'>
                  <p>{message}</p>
                </div>
        </div>
    )
}

export default UserMsg;