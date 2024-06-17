import React, { useState } from 'react';
import './Join.css';


const Join = () => {

    const[email, setEmail] = useState('');
    const[showWelcome, setShowWelcome] = useState(false);

    const handleJoinClick = () => {
        if(email) {
            setShowWelcome(true);
        }
    };
      
    return (
        <div className='Join' id='join-us'>
            <div className='left-j'>
                <hr />
                <div>
                     <span className='stroke-text'>READY TO</span>
                     <span>LEVEL UP</span>
                </div>
                <div>
                     <span>YOUR BODY</span>
                     <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className='right-j'>
                <div className='email-container'>
                    <input type='email' 
                    name='user_email' 
                    placeholder='Enter your Email address ' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                    <button className='btn btn-j' onClick={handleJoinClick}>Join Now</button>
                </div>
                {showWelcome && 
                <div className='welcome-message'>
                    <div>
                        <span className='stroke-text'>Welcome to our community!</span>
                        </div>
                            </div>
                            }
            </div>
        </div>

    )
};

export default Join;
