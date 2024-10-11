import { styled } from "styled-components";
import PreviewCard from "../common/PreviewCard";
import { useEffect, useState } from "react";
import { requestData } from "@/service/api";
import { SimpleGymData } from "@/constants/gyms/types";
import { useUser } from "@clerk/nextjs";

const MyBookmark = () => {
  const { user } = useUser();
  const [items, setItems] = useState<SimpleGymData[]>();

  useEffect(() => {
    if (user) {
      requestData({
        option: "GET",
        url: "/members/bookmark",
        onSuccess: (data) => setItems(data),
        hasBody: true,
      });
    }
  }, [user]);

  if (!user) {
    return <div>잘못된 접근입니다.</div>;
  }

  return (
    <S.CardContainer>
      {items &&
        items.map((gymInfo, index) => {
          return <PreviewCard key={index} width="350px" height="300px" cardInfo={gymInfo} />;
        })}
    </S.CardContainer>
  );
};

const S = {
  CardContainer: styled.div``,
};
export default MyBookmark;
