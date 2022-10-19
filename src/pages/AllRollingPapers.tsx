import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllRollingPapers = () => {
  interface Istate {
    pumpkins: {
      pumpkinId: number;
      character: string;
    };
  }
  const [userName, setUserName] = useState("일이삼");
  const [pumpkins, setPumpkins] = useState<Istate["pumpkins"][]>([]);
  const { personalPath } = useParams();
  const [myLink, setMyLink] = useState("");

  useEffect(() => {
    setUserName(personalPath || "user");
    const tmp = [
      { pumpkinId: 0, character: "" },
      { pumpkinId: 0, character: "" },
      { pumpkinId: 0, character: "" },
      { pumpkinId: 0, character: "" },
      { pumpkinId: 0, character: "" },
      { pumpkinId: 0, character: "" },
      { pumpkinId: 0, character: "" },
      { pumpkinId: 0, character: "" },
      { pumpkinId: 0, character: "" },
      { pumpkinId: 0, character: "" },
    ];
    setPumpkins(tmp);
    setMyLink("http://localhost:3000/" + personalPath);
  }, []);

  const copyLink = () => {
    window.navigator.clipboard.writeText(myLink);
  };

  return (
    <div className="bg-background01 h-screen w-screen relative flex flex-col justify-center text-center">
      <div className="text-yellow-500 font-bold text-4xl mt-10">
        <p className="pb-4">{userName}님의 롤링페이퍼입니다.</p>
        <p>빈 호박을 클릭해 롤링페이퍼 주인에게 하고 싶은 말을 작성해주세요.</p>
      </div>
      <div className="flex flex-wrap w-4/5 mx-auto justify-center">
        {pumpkins.map((v, i) => (
          <div key={i} className="basis-1/5 p-10">
            <img
              src={`${process.env.PUBLIC_URL}/img/pumpkin01.png`}
              alt="empty"
              className="mx-auto"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-20">
        <p className="text-white text-2xl mb-5">링크를 공유하세요</p>
        <button
          className="py-3 px-6 rounded-lg shadow-md bg-neutral-400 font-semibold"
          onClick={() => copyLink()}
        >
          {myLink}
        </button>
      </div>
    </div>
  );
};

export default AllRollingPapers;
