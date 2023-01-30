import React, { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import picture from "../QuestionsPage/assets/picture.svg";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";

type Props = {};

type questionProps = {
  id: number,
  title: string,
  description: string
}

const QuestionsPage = (props: Props) => {
  const QuestionsList = [
    {
      id: 1,
      title: "Кто такой донор?",
      description:
        "Но базовые сценарии поведения пользователей неоднозначны и будут преданы социально-демократической анафеме. Противоположная точка зрения подразумевает, что активно.",
    },
    {
      id: 2,
      title: "Как я могу стать донором?",
      description:
        "Но базовые сценарии поведения пользователей неоднозначны и будут преданы социально-демократической анафеме. Противоположная точка зрения подразумевает, что активно.",
    },
    {
      id: 3,
      title: "Где я могу сдать свою кровь?",
      description:
        "Но базовые сценарии поведения пользователей неоднозначны и будут преданы социально-демократической анафеме. Противоположная точка зрения подразумевает, что активно.",
    },
  ];

  const QuestionElement = ({id, title, description}: questionProps) => {
    const [isActive, setIsActive] = useState(false)

    return (
      <div className="container mx-auto">
        <div className="flex flex-row max-lg:justify-between max-md:text-sm">
          <h5 className="text-[25px] max-sm:text-[15px]">{title}</h5>
          <div onClick={() => setIsActive(!isActive)}>
          <IconButton>
            {isActive ? <RemoveIcon sx={{color:'#C53A3F'}}/> : <AddSharpIcon sx={{color:'#C53A3F'}}/> }
          </IconButton>
          </div>
        </div>
        <p className="text-[16px] max-sm:text-[10px]">{isActive && description}</p>
      </div>
    );
  };

  return (
    <MainLayout>
      <div className="container mx-auto">
      <h3 className="text-[34px] max-sm:text-[20px] font-bold text-[#2A5573]">
        ВОПРОСЫ
      </h3>
      </div>
      <div className="container mx-auto mt-5 grid grid-cols-12 gap-[20px] max-sm:gap-[5px] text-[#2A5573]">
        <div className="col-span-5 max-lg:col-span-12 max-lg:order-first flex justify-center items-center">
          <img src={picture} alt="" />
        </div>
        <div className="col-span-7 max-lg:col-span-12">
          <div className="flex flex-col max-lg:space-y-4">
            {QuestionsList &&
              QuestionsList.map((item) => <QuestionElement id={item.id} title={item.title} description={item.description}/>)}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default QuestionsPage;
