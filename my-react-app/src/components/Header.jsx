import React from "react";
import logo from "../Images/Logo1.png";
import briefcase from "../Images/briefcase-02.png";
import bell from "../Images/bell.png";
import rectangle from "../Images/Rectangle5.png";
import chevron from "../Images/chevron-down.png";
import message from "../Images/message.png";
import payment from "../Images/payment.png";
import Application from "../Images/users-01.png";

const Header = () => {
  return (
    <>
      <div className="w-[1523px] h-[116.14px] pl-[40px] flex flex-row justify-between items-center bg-[#FFFFFF] border-b-orange-100 border-2 border-[#E7E7E7]">
        <div className="img w-[100px] h-[61px] bg-[#E7E7E7] border flex flex-row justify-center items-center">
          <img src={logo} alt="" />
        </div>

        <div className="jobs-header flex flex-row gap-5 items-center">
          <div className="jobs w-[109px] h-[58px] bg-[#DC4A2D] flex flex-row items-center justify-center rounded-[49px] gap-2 shadow-custom-drop1 border-[#FCB4A5] border-[2px]">
            <img src={briefcase} alt="" />
            <span className="text-[20px] text-[#FFFFFF]">Jobs</span>
          </div>
          <div className="w-[604px] h-[74px] border-[0.5px] border-[#FFFFFF]rounded-[36px] shadow-inner-custom flex justify-center items-center gap-6 rounded-[36px] text-[#B0B0B0]">
            <div className="div1 flex items-center gap-1">
              <img src={message} alt="" className="w-[24px] h-[24px]" />
              <span>messages</span>
            </div>
            <div className="div1 flex items-center gap-1">
              <img src={payment} alt="" className="w-[24px] h-[24px]" />
              <span>Payments</span>
            </div>
            <div className="div1 flex items-center gap-1">
              <img src={Application} alt="" className="w-[24px] h-[24px]" />
              <span>Application</span>
            </div>
            <img src={briefcase} alt="" />
            <span className="text-[20px] text-[#FFFFFF]">Jobs</span>
          </div>
        </div>
        <div className="icons mr-[35px]">
          <div className="div flex justify-center items-center gap-[16px]">
            <img src={bell} alt="" className="h-[32px] w-[32px]" />
            <div className="div flex items-center gap-[6px]">
              <img src={rectangle} alt="" className="h-[40px] w-[40px]" />
              <img src={chevron} alt="" className="h-[20px] w-[20px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="second-header w-full h-[71px] border-[#E7E7E7] border-[2px] flex items-center text-[#B0B0B0]">
        <div className="px-[72px] flex items-center gap-[72px]">
          <p>Job Preview</p>
          <p>Applicants</p>
          <p>Match</p>
          <p>Messages</p>
        </div>
      </div>
    </>
  );
};

export default Header;
