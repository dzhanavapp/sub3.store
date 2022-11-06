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
};

export const services: service[] = [
  {
    name: "Uniswap Premium",
    address: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
    period: "month",
    tag: "dex",
    id: 1,
    description: "A growing network of DeFi Apps",
    details:
      "Developers, traders, and liquidity providers participate together in a financial marketplace that is open and accessible to all.",
    icon: "https://ph-files.imgix.net/745e0e1b-cd53-4b7b-bbd0-636758081307.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=2",
    images: [
      "https://ph-files.imgix.net/c536c104-3158-4a65-bc65-a8c36e3acf73.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=max&dpr=2",
      "https://ph-files.imgix.net/f028e83e-cec2-4301-ae19-49c747b2ec05.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=max&dpr=2",
      "https://ph-files.imgix.net/369ae885-9d67-4666-a218-72e5dbf32304.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=max&dpr=2",
    ],
  },
];
