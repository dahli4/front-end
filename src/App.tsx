import { ChangeEvent } from 'react';
import './App.css';
import InputBox from 'components/inputBox';

function App() {
  return (
    <InputBox
      title={'아이디'}
      placeholder={'아이디 입력'}
      type={'text'}
      value={''}
      isErrorMessage={false}
      onChange={function (event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
      }} />
  );
}

export default App;
