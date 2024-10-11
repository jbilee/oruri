"use client";

import { styled } from "styled-components";
import { FaRegHandRock } from "react-icons/fa";
import { COLOR } from "@/styles/global-color";
import { DEVICE_SIZE } from "@/constants/styles";

const Footer = () => {
  return (
    <S.Wrapper $needMargin={true}>
      <S.TitleContainer href={"/"}>
        <FaRegHandRock />
        <S.Title>오르리</S.Title>
      </S.TitleContainer>
      <S.MenuContainer>
        <S.Link className="link-plain" href={"/"}>
          Home
        </S.Link>
        <S.Link className="link-plain" href={"/"}>
          About
        </S.Link>
        <S.Link className="link-plain" href={"/"}>
          Service
        </S.Link>
        <S.Link className="link-plain" href={"/"}>
          Contact us
        </S.Link>
      </S.MenuContainer>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div<{ $needMargin: boolean }>`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;

    padding-left: ${({ $needMargin }) => ($needMargin === true ? "10%" : "30px")};
    padding-right: ${({ $needMargin }) => ($needMargin === true ? "10%" : "20px")};
    @media ${DEVICE_SIZE.mobileLarge} {
      justify-content: flex-end;
    }
  `,
  TitleContainer: styled.a`
    display: flex;
    text-decoration: none;
    font-size: 20px;
    color: ${COLOR.MAIN};
    font-weight: bold;
    &:visited {
      color: ${COLOR.MAIN};
    }
    align-items: center;
    @media ${DEVICE_SIZE.mobileLarge} {
      display: none;
    }
  `,
  Title: styled.div`
    margin-left: 3px;
  `,
  MenuContainer: styled.div`
    display: flex;
    flex-direction: row;
    gap: 0 30px;

    @media ${DEVICE_SIZE.mobileLarge} {
      justify-content: space-between;
      width: 100%;
    }
  `,
  Link: styled.a`
    font-weight: bold;
  `,
};

export default Footer;
