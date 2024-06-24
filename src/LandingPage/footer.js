import * as React from "react";

export default function MyComponent() {
  return (
    <div className="flex flex-col items-center px-16 pt-20 pb-11 bg-white max-md:px-5">
      <div className="flex flex-col mt-5 w-full max-w-[1200px] max-md:max-w-full">
        <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto my-auto text-xl text-slate-500 max-md:max-w-full">
            Stay updated with the latest news, tips, and success stories. Follow
            us on social media:
          </div>
          <div className="flex gap-5 justify-between px-px">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f22d5eaef9b7ee500d8960f18d8e693a826fce6d90420bf4a1298b6dd470ebf?"
              className="shrink-0 w-8 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/743a3ad9aa4977d5d267a78250b25fa32adaf0411ef14606b79e378c4aecb30b?"
              className="shrink-0 w-8 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b09c80fb4537cec54e48d549dd574bc5ed23ea9b81fd84dd2c00ed04c9701d7e?"
              className="shrink-0 w-8 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/de530b8a9c2e4324d50c2564da1238bb11fee76b80f5eec766acc11bb802dd0a?"
              className="shrink-0 w-8 aspect-square"
            />
          </div>
        </div>
        <div className="shrink-0 mt-6 h-px border border-solid bg-zinc-300 border-zinc-300 max-md:max-w-full" />
        <div className="self-center mt-5 text-sm font-medium leading-5 text-black">
          © Copyright 2023,t All Rights Reserved
        </div>
      </div>
    </div>
  );
}

