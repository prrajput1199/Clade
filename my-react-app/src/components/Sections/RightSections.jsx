import React from "react";
import Delete from "../../Images/delete.png";
import Edit from "../../Images/Icon.png";
import user from "../../Images/users-01.png";
import user1 from "../../Images/user-check-01.png";
import message from "../../Images/message.png";
import view from "../../Images/view.png";
import avatar from "../../Images/Avatar.png";
const RightSections = () => {
  const arr = [
    {
      icon: user,
      text: "Applicants",
      number: "400",
    },

    {
      icon: user1,
      text: "Matches",
      number: "100",
    },
    {
      icon: message,
      text: "Messages",
      number: "147",
    },
    {
      icon: view,
      text: "Views",
      number: "800",
    },
  ];
  return (
    <div>
      <div className="div w-[373px] h-full bg-[#FCFCFC] border-[#E7E7E7]">
        <div className="h-[371px] w-[350px]flex items-center px-[24px] py-[24px]">
          <div className="flex items-center gap-[20px]">
            <div
              className="bg-[#FEF4F2] w-[145px] h-[48px] border-[0.8px]
            border-[#DC4A2D] flex justify-center items-center gap-[10px] rounded-[8px]"
            >
              <img src={Delete} alt="" />
              <p className="text-[#DC4A2D] text-[16px] font-[400]">
                Delete job
              </p>
            </div>
            <div
              className="bg-[#DC4A2D] w-[145px] h-[48px] border-[0.8px]
            border-[#DC4A2D] flex justify-center items-center gap-[10px] rounded-[8px]"
            >
              <img src={Edit} alt="" />
              <p className="text-[#FFFFFF] text-[16px] font-[400]">Edit job</p>
            </div>
          </div>

          <div
            className="flex flex-col justify-start h-[300px] gap-[16px] mt-[40px]
          "
          >
            {arr.map((el) => {
              return (
                <>
                  <div className="flex items-center justify-between border-b-[#E7E7E7] border-b-[1px]">
                    <div className="h-[44px] w-[336px] flex items-center gap-[12px]">
                      <img src={el.icon} alt="" />
                      <p className="text-[16px] font-[400] text-[#4F4F4F]">
                        {el.text}
                      </p>
                    </div>
                    <p className="text-[20px] font-[400] text-[#3D3D3D]">
                      {el.number}
                    </p>
                  </div>
                </>
              );
            })}
          </div>

          <div className="h-[196px] w-[340px]border-[#F7F7F7] border-[1px] rounded-[12px] bg-[#FFFFFF] pt-[20px] px-[20px] shadow-custom-drop">
            <p className="font-[500] text-[20px]">
              “A quote from a Atlassian.”
            </p>
            <div className="w-[153px] h-[50px] flex justify-center items-center gap-[12px] mt-[35px]">
              <img src={avatar} alt="" />
              <div className="flex flex-col justify-start">
                <p className="text-[#000000] font-[500] text-[16px]">Name</p>
                <p className="text-[#828282] text-[16px] font-[500]">
                  Description
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSections;
