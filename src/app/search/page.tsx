"use client";

import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import Search from "@/components/common/Search";
import GymListBanner from "@/components/search/GymListBanner";
import { COLOR } from "@/styles/global-color";
import { DISTRCIT_CITY_DATA } from "@/constants/search/constants";
import { useRouter, useSearchParams } from "next/navigation";

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchWord = searchParams?.get("q");
  const sortingType = searchParams?.get("s");

  const handleSubmit = (event: { preventDefault: () => void; target: { [x: string]: { value: any } } }) => {
    event.preventDefault();

    // 검색내용 포함시켜 라우팅
    router.push(`/search?q=${event.target["search"].value}`);
  };

  return (
    <Styled.Wrapper>
      <Styled.SearchWrapper>
        <Search
          dataList={DISTRCIT_CITY_DATA}
          width="600px"
          height="40px"
          postfixIcon={<IoSearch size="23" color={COLOR.MAIN} />}
          placeholder="주소 또는 암벽장을 입력하세요."
          onSubmit={handleSubmit}
          useLocation={false}
          border={"3px solid " + COLOR.LIGHT_MAIN}
          searchWord={searchWord}
        />
      </Styled.SearchWrapper>
      <GymListBanner searchWord={searchWord} sortingType={sortingType ?? ""} />
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div``,
  SearchWrapper: styled.div`
    margin-top: 5px;
    margin-left: 100px;
    top: 0;
    position: fixed;
    z-index: 201;
  `,
};

export default SearchPage;
