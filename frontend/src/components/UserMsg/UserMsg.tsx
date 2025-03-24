import './UserMsg.css';

function UserMsg() {
    return (
        <div className='user-item-container'>
                <div className='user-pfp-name-container'>
                  <div className='user-name-container'>
                    User
                  </div>

                  <div className='user-pfp-container'></div>
                </div>

                <div className='user-txt-container'>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, maxime provident itaque voluptates dolorem omnis quas commodi unde quasi, ab sed, eius quisquam mollitia nobis. Consequuntur totam eum placeat ab.</p>
                </div>
        </div>
    )
}

export default UserMsg;