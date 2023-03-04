import { useState } from "react";

const fakeSideBarData = [
  {
    topic: "Engineering Project is Coming!",
    peeps: 23,
  },
  {
    topic: "#MERNStack",
    peeps: 40,
  },
  {
    topic: "#IHateMocking",
    peeps: 83,
  },
  {
    topic: "#PromiseIsKillingMe",
    peeps: 142,
  },
];

const whoToFollowData = [
  {
    title: "terryhycheng",
    subtitle: "GitHub",
    imageUrl: "https://avatars.githubusercontent.com/u/35667554?v=4",
    urlTo: "https://github.com/terryhycheng",
  },
  {
    title: "Makers",
    subtitle: "OfficialWebsite",
    imageUrl: "https://avatars.githubusercontent.com/u/3636186?s=200&v=4",
    urlTo: "https://makers.tech/",
  },
  {
    title: "ReactJS",
    subtitle: "ReactDocs",
    imageUrl:
      "https://pbs.twimg.com/card_img/1628109266325209101/8QiilBjE?format=png&name=medium",
    urlTo: "https://beta.reactjs.org/",
  },
];

export const SideBar = () => {
  const [clickCount, setClickCount] = useState(0);

  const clickHandler = () => {
    let message;
    switch (clickCount) {
      case 0:
        message = "Thanks for your curiosity but this button is fake :)";
        break;
      case 1:
        message = "Okay, you clicked it twice, what then? :D";
        break;
      case 2:
        message = "Um.. you have clicked a useless button for 3 times";
        break;
      case 3:
        message = "Are you addicted with clicking buttons...?";
        break;
      case 4:
        message =
          "Doctor! Over here, someone needs a cure for 'non-stopped-clicking-button diease'";
        break;
      default:
        message =
          "It's time for you to go back and code your project. I won't talk to you anymore :(";
        break;
    }
    alert(message);
    setClickCount(clickCount + 1);
  };

  return (
    <aside className="hidden xl:flex flex-col w-[400px] p-4">
      <div className="pt-8 bg-lightblue rounded-xl">
        <h2 className="text-xl font-bold px-6 mb-4">What's happening</h2>
        {fakeSideBarData.map(({ topic, peeps }) => (
          <div
            key={crypto.randomUUID()}
            className="px-6 py-4 hover:bg-[rgba(0,0,0,0.05)]"
          >
            <p className="text-sm text-secondary">Trending in United Kingdom</p>
            <p className="font-semibold">{topic}</p>
            <p className="text-sm text-secondary">{peeps} peeps</p>
          </div>
        ))}
        <button
          onClick={clickHandler}
          className="px-6 text-primary underline text-sm my-2 mb-6"
        >
          See more
        </button>
      </div>
      <div className="py-6 mt-4 bg-lightblue rounded-xl">
        <h2 className="px-6 text-xl font-bold mb-3">Who to follow</h2>
        {whoToFollowData.map(({ title, subtitle, imageUrl, urlTo }) => (
          <div className="px-6 py-3 flex items-center gap-3 hover:bg-[rgba(0,0,0,0.05)]">
            <div className="relative rounded-full w-14 h-14 border overflow-hidden">
              <img src={imageUrl} className="object-cover h-full" alt="" />
            </div>
            <div className="flex-1">
              <p className="font-semibold capitalize">{title}</p>
              <p className="text-sm text-secondary">@{subtitle}</p>
            </div>
            <a
              href={urlTo}
              target="_blank"
              className="bg-black text-white rounded-full p-2 px-4 text-sm font-semibold capitalize"
            >
              follow
            </a>
          </div>
        ))}
      </div>
      <div className="m-4 my-6 text-secondary text-sm opacity-60">
        <p>
          © {new Date().getFullYear()} Twitter Clone Project - by Terry Cheng
        </p>
        <p>Frontend Solo Challenge - Makers Bootcamp</p>
      </div>
    </aside>
  );
};
