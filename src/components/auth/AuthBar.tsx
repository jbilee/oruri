import { styled } from "styled-components";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import { COLOR } from "@/styles/global-color";
import { DEVICE_SIZE } from "@/constants/styles";

const AuthBar = () => {
  return (
    <Styled.Wrapper>
      <SignedIn>
        <SignOutButton>로그아웃</SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton>로그인</SignInButton>
      </SignedOut>
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    & button {
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 15px;
      color: white;
      border: 1px solid ${COLOR.MAIN};
      background-color: ${COLOR.MAIN};
      cursor: pointer;
    }

    @media ${DEVICE_SIZE.tablet} {
      display: none;
    }
  `,
};

export default AuthBar;
