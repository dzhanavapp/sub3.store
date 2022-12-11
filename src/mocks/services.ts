export type service = {
  name: string;
  tag: string;
  description: string;
  icon: string;
  images: string[];
  details: string;
  address: string;
  period: "month" | "week";
  id: number;
  link: string;
};

export const services: service[] = [
  {
    name: "Uniswap",
    address: "0x6A860CE4D2F452850B6B5d8F7fCC2fb42Ee23AD6",
    period: "month",
    tag: "dex",
    id: 0,
    description: "A growing network of DeFi Apps",
    details:
      "Developers, traders, and liquidity providers participate together in a financial marketplace that is open and accessible to all.",
    icon: "https://ph-files.imgix.net/745e0e1b-cd53-4b7b-bbd0-636758081307.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=2",
    images: [
      "https://ph-files.imgix.net/c536c104-3158-4a65-bc65-a8c36e3acf73.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=max&dpr=2",
      "https://ph-files.imgix.net/f028e83e-cec2-4301-ae19-49c747b2ec05.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=max&dpr=2",
      "https://ph-files.imgix.net/369ae885-9d67-4666-a218-72e5dbf32304.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=max&dpr=2",
    ],
    link: "https://app.uniswap.org/#/swap",
  },
  {
    name: "Webullar",
    address: "0xbeE6fFAFDE4A9cB252a5eA357a53f558dc8A6876",
    period: "week",
    tag: "nft",
    id: 1,
    description: "Generate a website in 30 seconds using our AI generator",
    details:
      "Revolution! From today creating a website for your business becomes easier than riding a bicycle, seriously. All you have to do is describe your business in one sentence and the website will be created in 30 seconds using AI. Oh, and it's all from your phone.",
    icon: "https://ph-files.imgix.net/1e0a1210-197a-4998-bd86-eb10ad23b96a.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&bg=0fff&dpr=2",
    images: [
      "https://ph-files.imgix.net/4f9916d4-72af-4b57-9813-a176dbfef97e.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=391&h=220&fit=max&dpr=2",
      "https://ph-files.imgix.net/3d5d4133-f794-4799-bbf0-7139bb35a84d.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=391&h=220&fit=max&dpr=2",
      "https://ph-files.imgix.net/da676fa1-23bb-4ba4-9d68-2dc602cf373b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=391&h=220&fit=max&dpr=2",
    ],
    link: "https://webullar.com/",
  },
  {
    name: "Kyber Swap",
    address: "0x894899a494809e31bb94b76392CA1CD1b4cA0993",
    period: "month",
    tag: "dex",
    id: 2,
    description: "Instant and secure token swaps",
    details:
      "The easiest way to buy and sell tokens in a fully decentrialized manner by tapping into our liquidity network ✅ Simple. No orderbooks, deposits, or wrapping ✅ Instant. No waiting for orders matching to happen ✅ Secure. No middleman and transaction risk",
    icon: "https://ph-files.imgix.net/fd3fc4f4-ed0a-4fee-b15e-c9d4b1316125.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=2",
    images: [
      "https://ph-files.imgix.net/1c86363f-42bd-4abf-9de6-2ec3b59be994.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=max&dpr=2",
      "https://ph-files.imgix.net/eaf24e27-3641-495b-befc-587a74427043.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=max&dpr=2",
      "https://ph-files.imgix.net/ead1b236-e6dc-4388-aac7-8778b8c31544.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=max&dpr=2",
    ],
    link: "https://kyberswap.com/swap",
  },
];

export const serviceMap: Record<string, service> = services.reduce(
  (prev, next) => ({ ...prev, [next.address]: next }),
  {}
);
