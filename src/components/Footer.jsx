import React from "react";
import { menuLinks } from "./Navbar";

const Footer = () => {
  return (
    <div id="footer" className=" h-[100vh] mx-20 py-5 flex flex-col gap-8">
      <div className="flex flex-row justify-between items-center py-8">
        <div className="text-5xl font-NeuePlak flex flex-row gap-4">
          <h1 className="text-textPrimary">Let's</h1>
          <h1 className="text-secondary">Connect</h1>
          <h1 className="text-textPrimary">there</h1>
        </div>
        <div className="bg-textPrimary flex flex-row items-center rounded-full gap-3 pl-2">
          <svg
            className="w-9 h-9 xs:w-12 xs:h-12"
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24.5" cy="24.5" r="24.5" fill="#9FD966" />
            <g clipPath="url(#clip0_189_90)">
              <path
                d="M27.75 16.25L25.9875 18.0125L31.7125 23.75H11.5V26.25H31.7125L25.975 31.9875L27.75 33.75L36.5 25L27.75 16.25Z"
                fill="#323232"
              />
            </g>
            <defs>
              <clipPath id="clip0_189_90">
                <rect width="30" height="30" fill="white" transform="translate(9 10)" />
              </clipPath>
            </defs>
          </svg>
          <button className=" xs:text-2xl px-2 xs:px-3 xs:py-2 rounded-full font-equitan font-semibold cursor-pointer bg-primary text-white w-32 xs:w-52 h-12 xs:h-16 flex flex-row items-center justify-center">
            <p className="">Hire Me Now</p>
          </button>
        </div>
      </div>

      <div className="flex flex-row w-full h-[60%] border-t border-b border-textSecondary items-start py-12">
        <div className="bg-white w-[40%] flex flex-col gap-8">
          <div>
            <img src="/icons/LOGO.png" alt="logo" />
          </div>
          <div className="text-lg text-textSecondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores animi iste alias tempora ab incidunt
            distinctio voluptatibus ad quisquam quasi.
          </div>
          <div className="flex flex-row gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <svg
                className="w-7 h-7 object-fit "
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <svg
                className="w-7 h-7 object-fit"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_17_68)">
                  <path
                    d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_68">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 object-fit "
              >
                <g clip-path="url(#clip0_17_63)">
                  <path
                    d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z"
                    fill="white"
                  />
                  <path
                    d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z"
                    fill="white"
                  />
                  <path
                    d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_63">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 object-fit "
              >
                <g clip-path="url(#clip0_910_44)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_910_44">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 object-fit "
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.3201 0H31.6799C36.4495 0 40.32 3.8705 40.32 8.64006C40.32 11.9825 38.4192 14.8832 35.6403 16.3199C38.4192 17.7567 40.32 20.6576 40.32 23.9999C40.32 28.7695 36.4495 32.64 31.6799 32.64C28.9668 32.64 26.5446 31.3876 24.9602 29.4298V39.3599C24.9602 44.1295 21.0897 48 16.3201 48C11.5505 48 7.67999 44.1295 7.67999 39.3599C7.67999 36.0175 9.58077 33.1167 12.3597 31.6799C9.58077 30.2432 7.67999 27.3423 7.67999 23.9999C7.67999 20.6576 9.58075 17.7567 12.3597 16.3199C9.58076 14.8832 7.67999 11.9825 7.67999 8.64006C7.67999 3.8705 11.5505 0 16.3201 0ZM9.59999 8.64006C9.59999 4.9309 12.6109 1.92 16.3201 1.92H23.0398V15.3599H16.3201L16.2993 15.3599C12.5996 15.3487 9.59999 12.3422 9.59999 8.64006ZM23.0402 23.9086C23.0399 23.939 23.0398 23.9694 23.0398 23.9999C23.0398 24.0304 23.0399 24.0609 23.0402 24.0913V30.7198H16.3201C12.6109 30.72 9.59999 27.7091 9.59999 23.9999C9.59999 20.2977 12.5997 17.2911 16.2995 17.2799L16.3201 17.2799H23.0398L23.0402 23.9086ZM24.9602 24.0804V23.9195C25.0033 20.2565 27.9826 17.2947 31.6523 17.2799H31.6799C31.6868 17.2799 31.6936 17.2799 31.7005 17.2799C35.4003 17.2911 38.4 20.2977 38.4 23.9999C38.4 27.7091 35.3891 30.72 31.6799 30.72C27.9975 30.72 25.0034 27.7526 24.9602 24.0804ZM26.2505 17.2799C25.7765 17.6635 25.3438 18.0961 24.9602 18.5701V17.2799H26.2505ZM31.7007 15.3599C31.6938 15.3599 31.6868 15.3599 31.6799 15.3599C31.6694 15.3599 31.6589 15.3599 31.6484 15.3599H24.9602V1.92H31.6799C35.3891 1.92 38.4 4.9309 38.4 8.64006C38.4 12.3422 35.4004 15.3487 31.7007 15.3599ZM16.3201 32.6399C12.6109 32.6399 9.59999 35.6508 9.59999 39.3599C9.59999 43.0691 12.6109 46.08 16.3201 46.08C20.0293 46.08 23.0402 43.0691 23.0402 39.3599V32.6399H16.3201Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white w-[30%] flex flex-col items-center justify-center gap-6">
          <h1 className="font-NeuePlak text-xl text-primary">Navigations</h1>
          <ul className="flex flex-col gap-4">
            {menuLinks.map((item, index) => (
              <li key={index} className="text-lg text-textSecondary">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white w-[30%] flex flex-col items-center justify-center gap-6">
          <h1 className="font-NeuePlak text-xl text-primary">Contacts</h1>
          <ul className="flex flex-col gap-4 text-lg text-textSecondary w-3/4">
            <li className="wrap-break-word">+91 6282717263</li>
            <li className="wrap-break-word">arunakhil978@gmail.com</li>
            <li className="wrap-break-word">https://www.linkedin.com/in/arun-kumar-a-a0483a23a/</li>
            <li className="wrap-break-word">Kochi,Ernakulam,Kerala,India, pincode:682008</li>
          </ul>
        </div>

        <div className="bg-white w-[30%] flex flex-col gap-6 items-center">
          <h1 className="font-NeuePlak text-xl text-primary">Get Latest Information</h1>
          <div className="flex flex-row bg-primary w-[80%] items-center gap-5 rounded-lg">
            <input
              type="text"
              placeholder="Email"
              className="bg-gray-100 text-textSecondary border-none outline-none h-12 w-3/4 px-3 rounded-l-md"
            />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_17_17308)">
                <path
                  d="M3.4 20.4L20.85 12.92C21.66 12.57 21.66 11.43 20.85 11.08L3.4 3.59999C2.74 3.30999 2.01 3.79999 2.01 4.50999L2 9.11999C2 9.61999 2.37 10.05 2.87 10.11L17 12L2.87 13.88C2.37 13.95 2 14.38 2 14.88L2.01 19.49C2.01 20.2 2.74 20.69 3.4 20.4Z"
                  fill="#ffffff"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_17308">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2 text-2xl text-textPrimary">
        <p>Copyright © 2026</p>
        <p className="text-primary">Arun.</p>
        <p>All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
