import React, { useState } from 'react';
import styled from 'styled-components';
import Rogo from '../Rogo.png';

const LoginScreen = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;

  p {
    color: #707070;
    font-weight: bold;
  }

  input, button {
    width: 300px;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  button {
    background-color: #74BC9C;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #66A386;
  }

  a {
    color: #74BC9C;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    marketing: false
  });

  const handleLogin = () => {
    console.log('로그인 시도:', email, password);
  };

  return (
    <LoginScreen>
      <img src={Rogo} width='100px' alt="Logo" />
      <p>당신의 끼를 적어두세요</p>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={agreements.terms}
          onChange={(e) => setAgreements({ ...agreements, terms: e.target.checked })}
        />
        자동 로그인
      </label>
      <button onClick={handleLogin}>로그인</button>
      <div>
        <a href="/signup">회원가입</a> | <a href="/forgot">아이디/비밀번호 찾기</a>
      </div>
    </LoginScreen>
  );
};

export default LoginPage;
