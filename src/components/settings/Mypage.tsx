import { styled } from "styled-components";
import ChangeNickname from "./ChangeNickname";
import ChangePassword from "./ChangePassword";
import { useUser } from "@clerk/nextjs";

const Mypage = () => {
  const { user } = useUser();

  if (!user) {
    return <div>잘못된 접근입니다.</div>;
  }

  return (
    <S.Container>
      <ChangeNickname />
      <ChangePassword />
    </S.Container>
  );
};

const S = {
  Container: styled.div``,
};
export default Mypage;
