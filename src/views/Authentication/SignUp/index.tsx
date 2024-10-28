import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'
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

    const [isIdError, setIsIdError] = useState<boolean>(false);
    const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
    const [isPasswordCheckError, setIsPasswordCheckError] = useState<boolean>(false);
    const [isEmailError, setIsEmailError] = useState<boolean>(false);
    const [isCertificationNumberError, setIsCertificationNumberError] = useState<boolean>(false);

    const [idMessage, setIdMessage] = useState<string>('');
    const [passwordMessage, setPasswordMessage] = useState<string>('');
    const [passwordCheckMessage, setPasswordCheckMessage] = useState<string>('');
    const [emailMessage, setEmailMessage] = useState<string>('');
    const [certificationNumberMessage, setCertificationNumberMessage] = useState<string>('');


    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setId(value);
        setIdMessage('');
    }

    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPassword(value);
        setPasswordMessage('');
    }

    const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPasswordCheck(value);
        setPasswordCheckMessage('');
    }

    const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail(value);
        setEmailMessage('');
    }

    const onCertificationNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCertificationNumber(value);
        setCertificationNumberMessage('');
    }

    const onIdButtonClickHandler = () => {
        alert("중복 확인")

    };

    const onEmailButtonClickHandler = () => {
        alert("인증번호 전송")
    };

    const onCertificationNumberButtonClickHandler = () => {
        alert("인증 확인")
    };

    const onIdKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        onIdButtonClickHandler();
    }

    const onPasswordKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        if (!passwordCheckRef.current) return;
        passwordCheckRef.current.focus();

    }

    const onPasswordCheckKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        if (!emailRef.current) return;
        emailRef.current.focus();
    }

    const onEmailKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        onEmailButtonClickHandler();
    }

    const onCertificationNumberKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        onCertificationNumberButtonClickHandler();
    }

    const signUpButtonClass = id && password && passwordCheck && email && certificationNumber ?
        'primary-button-lg' : 'disable-button-lg';

    return (
        <div id='sign-up-wrapper'>
            <div className='sign-up-image'></div>
            <div className='sign-up-container'>
                <div className='sign-up-box'>
                    <div className='sign-up-title'>우주여행</div>
                    <div className='sign-up-content-box'>
                        <div className='sign-up-content-sns-sign-in-box'>
                            <div className='sign-up-content-sns-sign-in-title'>{'SNS 회원가입'}</div>
                            <div className='sign-up-content-sns-sign-in-button-box'>
                                <div className='kakao-sign-in-button'></div>
                                <div className='naver-sign-in-button'></div>
                            </div>
                        </div>
                        <div className='sign-up-content-divider'></div>
                        <div className='sign-up-content-input-box'>
                            <InputBox ref={idRef} title='아이디' placeholder='아이디를 입력하세요.'
                                type='text' value={id} message={idMessage} isErrorMessage={isIdError} buttonTitle='중복 확인'
                                onChange={(onIdChangeHandler)} onKeydown={onIdKeyDownHandler} onButtonClick={onIdButtonClickHandler} />

                            <InputBox ref={passwordRef} title='비밀번호' placeholder='비밀번호를 입력하세요.'
                                type='password' value={password} message={passwordMessage} isErrorMessage={isPasswordError}
                                onChange={(onPasswordChangeHandler)} onKeydown={onPasswordKeyDownHandler} />

                            <InputBox ref={passwordCheckRef} title='비밀번호 확인' placeholder='비밀번호를 입력하세요.'
                                type='password' value={passwordCheck} message={passwordCheckMessage} isErrorMessage={isPasswordCheckError}
                                onChange={(onPasswordCheckChangeHandler)} onKeydown={onPasswordCheckKeyDownHandler} />

                            <InputBox ref={emailRef} title='이메일' placeholder='이메일를 입력하세요.'
                                type='text' value={email} message={emailMessage} isErrorMessage={isEmailError} buttonTitle='인증번호 전송'
                                onChange={(onEmailChangeHandler)} onKeydown={onEmailKeyDownHandler} onButtonClick={onEmailButtonClickHandler} />

                            <InputBox ref={certificationNumberRef} title='인증번호' placeholder='인증번호를 입력하세요.'
                                type='text' value={certificationNumber} message={certificationNumberMessage} isErrorMessage={isCertificationNumberError} buttonTitle='인증 확인'
                                onChange={(onCertificationNumberChangeHandler)} onKeydown={onCertificationNumberKeyDownHandler} onButtonClick={onCertificationNumberButtonClickHandler} />
                        </div>
                        <div className='sign-up-content-button-box'>
                            <div className={`${signUpButtonClass} full-width`}>{'회원가입'}</div>
                            <div className='text-link-lg full-width'>{'로그인'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
