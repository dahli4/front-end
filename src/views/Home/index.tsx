import { useCookies } from 'react-cookie';
import './style.css'
import { useNavigate } from 'react-router-dom';
import { getSubject } from 'common';

export default function Home() {
    const [cookie, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    const isLogined = cookie.accessToken === undefined || cookie.accessToken === null;

    const loginId: string = getSubject(cookie);

    const onLoginButtonHandler = () => {
        navigate('/auth/sign-in');
    }

    const onLogoutButtonHandler = () => {
        removeCookie('accessToken');
        alert('logout!');
        navigate('/');
    }

    return (
        <div className='home-wrapper'>
            <div className='home-title-box'>우주여행</div>
            <div className='home-link-box'>
                {isLogined && <div className='text-link-lg' onClick={onLoginButtonHandler}>로그인</div>}
                {!isLogined && <div className='text-link-lg' onClick={onLogoutButtonHandler}>[ {loginId} ]로그아웃</div>}
            </div>
            <div className='home-image-box'>
                <div className='back-image-box'></div>
            </div>
        </div>
    )
}