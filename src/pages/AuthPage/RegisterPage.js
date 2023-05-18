import useInput from "../../hooks/useInput";
import styled from "styled-components";
import React, { useCallback, useState } from "react";
import { Title } from "../../styles/fonts/Typography";
import { useNavigate } from "react-router";
const RegisterPage = () => {
  //const { data: isLogin } = useSWR('/api/users', fetcher); // 주기적으로 로그인여부 확인
  // TODO 로그인 연동 구현하기
  const [signUpError, setSignUpError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [mismatchError, setMismatchError] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [name, onChangeName] = useInput("");
  const [password, , setPassword] = useInput("");
  const [passwordCheck, , setPasswordCheck] = useInput("");

  let navigate = useNavigate();
  const onChangePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
      setMismatchError(passwordCheck !== e.target.value);
    },
    [passwordCheck, setPassword]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setMismatchError(password !== e.target.value);
    },
    [password, setPasswordCheck]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!name || !name.trim()) {
        alert("닉네임을 입력해주세요");
        return;
      }
      if (mismatchError) {
        setSignUpError(false);
        setSignUpSuccess(false);
        alert("비밀번호가 일치하지 않아요");
        return;
      }

      const registerInfo = {
        email,
        name,
        password,
      };

      localStorage.setItem("registerInfo", JSON.stringify(registerInfo));
      alert("회원가입이 완료되었습니다. 가입하신 계정으로 로그인해주세요. ");
      navigate("/login");
    },
    [email, name, password, mismatchError]
  );
  /*
  if (isLogin) {
    // 서버로부터 받은 데이터가 확인이 되면 워크스페이스로 이동
    return <Navigate to="/workspace/sleact" />;
  }
  */

  return (
    <RegisterPageLayout>
      <Title>회원 가입</Title>
      <Form onSubmit={onSubmit}>
        <Label id="nickname-label">
          <span>이름</span>

          <Input
            type="text"
            id="nickname"
            name="nickname"
            value={name}
            onChange={onChangeName}
          />
        </Label>
        {!name && <Error>이름을 입력해주세요.</Error>}
        <Label id="email-label">
          <span>이메일 주소</span>

          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
          />
        </Label>
        {signUpError && <Error>이미 가입된 이메일입니다.</Error>}
        <Label id="password-label">
          <span>비밀번호</span>

          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>

          <Input
            type="password"
            id="password-check"
            name="password-check"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />

          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}

          {signUpSuccess && (
            <Success>회원가입되었습니다! 로그인해주세요.</Success>
          )}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <a href="/login">로그인 하러가기</a>
      </LinkContainer>
    </RegisterPageLayout>
  );
};

export default RegisterPage;

const RegisterPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  padding: 30px 0;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 16px;

  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`;

const Input = styled.input`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;

  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 44px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

const Button = styled.button`
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: var(--main);
  border: none;
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  min-width: 96px;
  padding: 0 16px 3px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: var(--dark-mint);
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--dark-mint, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const Error = styled.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;

export const Success = styled.div`
  color: #2eb67d;
  font-weight: bold;
`;

export const LinkContainer = styled.p`
  font-size: 13px;
  color: #616061;
  margin: 0 auto 8px;

  max-width: 400px;
  align-self: center;
  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;
