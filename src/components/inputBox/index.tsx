import { ChangeEvent, KeyboardEvent, forwardRef } from "react";
import './style.css'

interface Props {
    title: string;
    placeholder: string;
    type: 'text' | 'password';
    value: string;
    isErrorMessage: boolean;
    buttonTitle?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeydown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onButtonClick?: () => void;
}

const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
    const {
        title, placeholder, type, value, isErrorMessage, buttonTitle, onChange, onKeydown, onButtonClick
    } = props;

    const buttonClass = value === '' ? 'input-box-button-disable' : 'input-box-button';
    const messageClass = isErrorMessage ? 'input-box-message-error' : 'input-box-message';

    return (
        <div className="input-box">
            <div className="input-box-title">{title}</div>
            <div className="input-box-content">
                <div className="input-box-body">
                    <input ref={ref} className="input-box-input"
                        placeholder={placeholder}
                        type={type}
                        value={value}
                        onChange={onChange}
                        onKeyDown={onKeydown} />
                    <div className="input-box-button">{'중복확인'}</div>
                </div>
                <div className="input-box-message">{'사용가능아이디'}</div>
            </div>
        </div>
    );
});

export default InputBox;