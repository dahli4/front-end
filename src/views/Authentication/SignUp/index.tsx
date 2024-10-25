import React, { useRef, useState } from 'react'
import './style.css'
import InputBox from 'components/inputBox'

export default function SignUp() {
    const idRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const passwordCheckRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const certificationNumberRef = useRef<HTMLInputElement | null>(null);

    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordCheck, setPasswordCheck] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [certificationNumber, setCertificationNumber] = useState<string>('');

    return (
        <div id='sing-up-wrapper'>
            <div className='sign-up-image'><img src="./assets/sign-up-image.png" alt="hi" /></div>
            <div className='sign-up-container'>
                <div className='sign-up-box'>
                    <div className='sign-up-title'>우주여행</div>
                    <div className='sign-up-content-box'>
                        <div className='sign-up-content-sns-sign-in-box'>
                            <div className='sign-up-content-sns-sign-in-title'>{'SNS 로그인'}</div>
                            <div className='sign-up-content-sns-sign-in-button-box'>
                                <div className='kakao-sign-in-button'></div>
                                <div className='naver-sign-in-button'></div>
                            </div>
                        </div>
                        <div className='sign-up-content-divider'></div>
                        <div className='sign-up-content-input-box'>
                            {/* <InputBox ref={idRef} />
                            <InputBox ref={passwordRef} />
                            <InputBox ref={passwordCheckRef} />
                            <InputBox ref={emailRef} />
                            <InputBox ref={certificationNumberRef} /> */}
                        </div>
                        <div className='sign-up-content-button-box'>
                            <div className='disable-button-lg full-width'>{'회원가입'}</div>
                            <div className='text-link-lg full-width'>{'로그인'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
