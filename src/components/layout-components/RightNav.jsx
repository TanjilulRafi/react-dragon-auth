import React from 'react';
import FindUs from '../FindUs';
import SocialLogin from '../SocialLogin';

const RightNav = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUs/>
        </div>
    );
};

export default RightNav;