import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'
import './style.css'
import InputBox from 'components/inputBox'
import { useNavigate } from 'react-router-dom';
import { CheckCertificationNumberRequestDto, EmailCertificationRequestDto, IdCheckRequestDto, SignUpRequestDto } from 'apis/request/auth';
import { checkCertificationNumberRequest, emailCertificationRequest, idCheckRequest, signUpRequest } from 'apis';
import { CheckCertificationNumberResponseDto, EmailCertificationResponseDto, IdCheckResponseDto, SignUpResponseDto } from 'apis/response/auth';
import { ResponseCode } from 'types/enums';
import { ResponseType } from 'types';

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

    const [isIdCheck, setIsIdCheck] = useState<boolean>(false);
    const [isCertificationNumberCheck, setIsCertificationNumberCheck] = useState<boolean>(false);

    const signUpButtonClass = ((id && isIdCheck) && password && passwordCheck && email && (certificationNumber && isCertificationNumberCheck)) ?
        'primary-button-lg' : 'disable-button-lg';

    const emailPattern = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,13}$/;

    const navigate = useNavigate();

    const idCheckResponse = (responseBody: ResponseType<IdCheckResponseDto>) => {
        if (!responseBody) return;
        const { code } = responseBody;
        if (code === ResponseCode.VALIDATION_FAIL) alert('아이디를 입력하세요.');
        if (code === ResponseCode.DATABASE_ERROR) alert('데이터베이스 오류입니다.');

        if (code === ResponseCode.DUPLICATE_ID) {
            setIsIdError(true);
            setIdMessage('이미 사용중인 아이디 입니다.');
            setIsIdCheck(false);
        };
        if (code !== ResponseCode.SUCCESS) return;

        setIsIdError(false);
        setIdMessage('사용 가능한 아이디 입니다.');
        setIsIdCheck(true);
    };

    const emailCertificationResponse = (responseBody: ResponseType<EmailCertificationResponseDto>) => {
        if (!responseBody) return;
        const { code } = responseBody;
        if (code === ResponseCode.VALIDATION_FAIL) alert('아이디와 이메일을 입력하세요.');
        if (code === ResponseCode.DATABASE_ERROR) alert('데이터베이스 오류입니다.');
        if (code === ResponseCode.MAIL_FAIL) alert('이메일 전송에 실패했습니다.');

        if (code === ResponseCode.DUPLICATE_ID) {
            setIsIdError(true);
            setIdMessage('이미 사용중인 아이디 입니다.');
            setIsIdCheck(false);
        };

        if (code !== ResponseCode.SUCCESS) return;

        setIsEmailError(false);
        setEmailMessage('인증 번호가 전송 되었습니다.');
    };

    const checkCertificationNumberResponse = (responseBody: ResponseType<CheckCertificationNumberResponseDto>) => {
        if (!responseBody) return;
        const { code } = responseBody;
        if (code === ResponseCode.VALIDATION_FAIL) alert('아이디, 이메일, 인증번호를 입력하세요.');
        if (code === ResponseCode.DATABASE_ERROR) alert('데이터베이스 오류입니다.');

        if (code === ResponseCode.CERTIFICATION_FAIL) {
            setIsCertificationNumberError(true);
            setCertificationNumberMessage('이미 사용중인 아이디 입니다.');
            setIsCertificationNumberCheck(false);
        };

        if (code === ResponseCode.DUPLICATE_ID) {
            setIsIdError(true);
            setIdMessage('이미 사용중인 아이디 입니다.');
            setIsIdCheck(false);
        };

        if (code !== ResponseCode.SUCCESS) return;

        setIsCertificationNumberError(false);
        setCertificationNumberMessage('인증이 완료되었습니다.');
        setIsCertificationNumberCheck(true);
    };

    const signUpResponse = (responseBody: ResponseType<SignUpResponseDto>) => {
        if (!responseBody) return;
        const { code } = responseBody;
        if (code === ResponseCode.VALIDATION_FAIL) alert('모든 항목을 입력하세요.');
        if (code === ResponseCode.DATABASE_ERROR) alert('데이터베이스 오류입니다.');

        if (code === ResponseCode.CERTIFICATION_FAIL) {
            setIsCertificationNumberError(true);
            setCertificationNumberMessage('이미 사용중인 아이디 입니다.');
            setIsCertificationNumberCheck(false);
        };

        if (code === ResponseCode.DUPLICATE_ID) {
            setIsIdError(true);
            setIdMessage('이미 사용중인 아이디 입니다.');
            setIsIdCheck(false);
        };

        if (code !== ResponseCode.SUCCESS) return;
        navigate('/auth/sign-in');
    };

    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setId(value);
        setIdMessage('');
        setIsIdCheck(false);
    };

    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPassword(value);
        setPasswordMessage('');
    };

    const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPasswordCheck(value);
        setPasswordCheckMessage('');
    };

    const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail(value);
        setEmailMessage('');
    };

    const onCertificationNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCertificationNumber(value);
        setCertificationNumberMessage('');
    };

    const onIdButtonClickHandler = () => {
        if (!id) return;
        const requestBody: IdCheckRequestDto = { id };

        idCheckRequest(requestBody).then(idCheckResponse);
    };

    const onEmailButtonClickHandler = () => {
        if (!id || !email) return;
        const isEmailChecked = emailPattern.test(email);
        if (!isEmailChecked) {
            setIsEmailError(true);
            setEmailMessage('이메일 형식이 아닌데요?');
            return;
        };
        const requestBody: EmailCertificationRequestDto = { id, email };
        emailCertificationRequest(requestBody).then(emailCertificationResponse);

        setIsEmailError(false);
        setEmailMessage('전송중');
    };

    const onCertificationNumberButtonClickHandler = () => {
        if (!id || !email || !certificationNumber) return;

        const requestBody: CheckCertificationNumberRequestDto = { id, email, certificationNumber };
        checkCertificationNumberRequest(requestBody).then(checkCertificationNumberResponse);
    };

    const onSignUpButtonClickHandler = () => {
        if (!id || !password || !passwordCheck || !email || !certificationNumber) return;
        const isPasswordPattern = passwordPattern.test(password);

        if (!isIdCheck) {
            alert('중복확인 하세요.');
        };

        if (!isCertificationNumberCheck) {
            alert('이메일 인증은 필수입니다.');
        };

        if (!isPasswordPattern) {
            setIsPasswordError(true);
            setPasswordMessage('영문자, 숫자를 혼용하여 8~13자리 문자를 입력하세요.');
            return;
        };

        if (password !== passwordCheck) {
            setIsPasswordCheckError(true);
            setPasswordCheckMessage('비밀번호가 일치하지 않습니다.');
            return;
        };

        const requestBody: SignUpRequestDto = { id, password, email, certificationNumber };
        signUpRequest(requestBody).then(signUpResponse);
    };

    const onSignInButtonClickHandler = () => {
        navigate('/auth/sign-in');
    };

    const onIdKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        onIdButtonClickHandler();
    };

    const onPasswordKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        if (!passwordCheckRef.current) return;
        passwordCheckRef.current.focus();
    };

    const onPasswordCheckKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        if (!emailRef.current) return;
        emailRef.current.focus();
    };

    const onEmailKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        onEmailButtonClickHandler();
    };

    const onCertificationNumberKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        onCertificationNumberButtonClickHandler();
    };

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
                            <div className={`${signUpButtonClass} full-width`} onClick={onSignUpButtonClickHandler}>{'회원가입'}</div>
                            <div className='text-link-lg full-width' onClick={onSignInButtonClickHandler}>{'로그인'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
