import React from "react";
import ellipse from "../../Images/Ellipse.png";
import dot from "../../Images/_Dot.png";
import money from "../../Images/money.png";
import marker from "../../Images/marker-pin.png";
import figma from "../../Images/figma.png";
import xd from "../../Images/xd.png";
import adobe from "../../Images/Ai.png";
import rectangle from "../../Images/Rectangle5.png";

const LeftSections = () => {
  return (
    <div className="h-full">
      <div className="w-[1150px] h-[166px] border-b-[#E7E7E7] border-[1px] flex items-center">
        <div className="section flex flex-col gap-[16px] w-[662px] h-[107px] ml-[100px]">
          <div className="flex items-center justify-between">
            <h2 className="text-[#3D3D3D] text-[35px] font-[700]">
              Senior Product designer
            </h2>
            <div className="flex items-center gap-1">
              <img src={ellipse} alt="" />
              <p className="text-[#888888] text-[14px] font-[400]">posted 2 days ago</p>
            </div>

            <div
              className="w-[59px] h-[22px]
            bg-[#c2e1c2] flex items-center gap-2 rounded-full px-1"
            >
              <img src={dot} alt="" className="h-[6px] w-[6px]" />
              <p className="text-[green] text-[12px] font-[500]">Open</p>
            </div>
          </div>
          <div className="flex items-center gap-4 h-[30px]">
            <div className="flex items-center gap-1">
              <img src={marker} alt="" />
              <p>Delaware USA</p>
            </div>
            <img src={ellipse} alt="" />
            <div className="flex items-center gap-1">
              <img src={money} alt="" />
              <p>$300-$400</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[180px] border-b-[#E7E7E7] border-[1px] flex flex-row items-center px-[100px]">
        <div className="w-[872px] h-[123px]  flex flex-row justify-between">
          <div className="flex flex-col justify-start gap-2">
            <p className="text-[#6E6D6D]">Skills required</p>
            <div className="flex flex-row">
              <img src={figma} alt="" />
              <p>Figma</p>
            </div>
            <div className="flex flex-row">
              <img src={adobe} alt="" />
              <p>Adobe illustritor</p>
            </div>
            <div className="flex flex-row">
              <img src={xd} alt="" />
              <p>Adobe xd</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-start gap-2">
              <p className="text-[#6E6D6D]">Preferred Language</p>
              <div className="flex flex-row">
                <p>English</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-start gap-2">
              <p className="text-[#6E6D6D]">Type</p>
              <div className="flex flex-row">
                <p>Full-time</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-start gap-2">
              <p className="text-[#6E6D6D]">Years of experience</p>
              <div className="flex flex-row">
                <p>3+ years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about h-[470px] border-b-[#E7E7E7] border-b-[1px] flex items-center px-[100px]">
        <div className="w-[526px] h-[403px] ">
          <p className="text-[14px] font-[400px] text-[#6E6D6D] mb-2">About</p>
          <div className="text-[16px]">
            <p>1.Handle the UI/UX research design</p>
            <p>
              2.Work on researching latest web applications design and trends
            </p>
            <p>3.Work on conceptualizing and visualizing</p>
            <p>
              4.Work on creating graphics content and other graphic related
              works
            </p>
            <p>Benifits:</p>
            <div className="ml-7">
              <ul className="list-disc">
                <li>Health Insurance</li>
                <li>Provident fund</li>
              </ul>
            </div>
            <p>Schedule:</p>
            <div className="ml-7">
              <ul className="list-disc">
                <li>Day shift</li>
              </ul>
            </div>
            <p>Supplimental pay times:</p>
            <div className="ml-7">
              <ul className="list-disc">
                <li>Perfomance bonus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[415px] flex items-center">
        <div className="w-[697px] h-[277px] ml-[100px] flex flex-col">
          <div className="flex items-center gap-[10px] mb-[16px]">
            <div className="w-[144px] h-[60px] flex items-center gap-[12px] ">
              <img src={rectangle} alt="" />
              <p className="text-[#4F4F4F] text-[20px] font-[400]">Atlassian</p>
            </div>
            <div className="w-[67px] h-[26px] border-[black] border-[2px] bg-[#E0EBF9] flex justify-center items-center rounded-[8px]">
              <p className="text-[#003788]text-[11px] font-[700]">Follow</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col justify-start gap-[8px]">
              <div className="flex flex-col justify-start">
                <p className="text-[#6E6D6D] text-[14px]">Company Size</p>
                <p className="text-[16px] text-[#3D3D3D] font-[400]">
                  1k-2k Emplyees
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <p className="text-[#6E6D6D] text-[14px]">Sector</p>
                <p className="text-[16px] text-[#3D3D3D] font-[400]">
                  Information Technology,Infrastructure
                </p>
              </div>
              <div className="flex flex-col justify-start">
                <p className="text-[#6E6D6D] text-[14px]">Founded in</p>
                <p className="text-[16px] text-[#3D3D3D] font-[400]">2019</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-start gap-[8px]">
                <div className="flex flex-col justify-start">
                  <p className="text-[#6E6D6D] text-[14px]">Type</p>
                  <p className="text-[16px] text-[#3D3D3D] font-[400]">
                    Funded
                  </p>
                </div>
                <div className="flex flex-col justify-start">
                  <p className="text-[#6E6D6D] text-[14px]">Funding</p>
                  <p className="text-[16px] text-[#3D3D3D] font-[400]">
                    Bootstrapped
                  </p>
                </div>
                <div className="flex flex-col justify-start">
                  <p className="text-[#6E6D6D] text-[14px]">Founded by</p>
                  <p className="text-[16px] text-[#3D3D3D] font-[400]">
                    Scott Farquhar, Mike Cannon-Brookes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSections;
