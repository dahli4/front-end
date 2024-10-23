import { ChangeEvent, useState } from 'react';
import './App.css';
import InputBox from 'components/inputBox';

function App2() {
  const [id, setId] = useState<string>('');

  const onIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setId(value);
  }
  const onKeyDownChange = () => {
    // alert('onKeyDownChange');
  }
  const onButtonChange = () => {
    // alert('onButtonChange');
  }

  return (
    <InputBox
      title='아이디'
      placeholder='아이디 입력'
      type='text'
      value={id}
      message='사용가능'
      isErrorMessage={false}
      buttonTitle='중복확인'
      onChange={onIdChange}
      onButtonClick={onButtonChange}
      onKeydown={onKeyDownChange}
    />
  );
}

function App() {
  return (
    <div className='flex-disp'>
      <div className='primary-button-lg full-width'>회원가입</div>
      <div className='disable-button-lg full-width'>회원가입2</div>
      <div className='text-link-lg full-width'>회원가입3</div>
    </div>
  )
}

export default App;
