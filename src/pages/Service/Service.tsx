import Button from "../../components/Button";
import classes from "./Service.module.css";
import { ReactComponent as Arrowleft } from "../../assets/svg/arrow-left-m.svg";
import { ReactComponent as ArrowLeftWhite } from "../../assets/svg/arrow-left-white.svg";
import { ReactComponent as ArrowRightWhite } from "../../assets/svg/arrow-right-white.svg";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import {
  useContract,
  useContractRead,
  useContractWrite,
  useProvider,
  useSigner,
  useWaitForTransaction,
} from "@web3modal/react";
import detectEthereumProvider from "@metamask/detect-provider";
import { erc20ABI } from "@wagmi/core";
import SUBMAN_ABI from "../../assets/abi/subman-abi.json";
import { Signer } from "ethers";
import { useEffect } from "react";
import Web3 from "web3";
import useSubContract from "../../hooks/useSubContract";
import { BASE_TOKEN } from "../../mocks/tokens";
const ERC20_TOKEN = "0xd393b1E02dA9831Ff419e22eA105aAe4c47E1253";

const Service = () => {
  const { id } = useParams();

  const { addSubscription } = useSubContract();

  // const config = {
  //   address: ERC20_TOKEN,
  //   abi: erc20ABI,
  //   functionName: "decimals",
  // };

  // const { data, error, isLoading, refetch } = useContractRead(config);

  const handleBuy = () => {
    if (!addSubscription) return;
    addSubscription(
      "0x894899a494809e31bb94b76392CA1CD1b4cA0993",
      1000000000,
      7 * 24 * 60 * 60,
      ERC20_TOKEN
    ).then(console.log);
  };

  return (
    <>
      <div className={classes.contentWrapper}>
        <div className={classes.headerContent}>
          <ButtonBack />
        </div>
        <img
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: 16,
          }}
          src="https://s3-alpha-sig.figma.com/img/b492/4738/bdf020eddba621ee262f82f8f60915f9?Expires=1668384000&Signature=T6S~4jxE0Ynv36LUj~tLV1LbqGONll8jW6y~zYcXn3c6HZOemr66KGra7KLDgHvphZd1M~vblFVTqmomX7ZTbR~wggJfmJszgUoQceu-AOf6MCKycmeblzyrMi-e-ifZ1DSql15tU~ZiiltErvmHw2CLbN5DeQIkRnvUVlf5tJUOwTP~CPsm3bOhpWw2R7wn-OAXUXuRyx4U0KcCFmBfMIxk6buc5PcixYPaHyTATrmJJnSXzp1xnpd7~5jvMx2pfJmF2hMYialTjq0ilzLm0WTbw3aK6ZB5wmw9ZdL8KKK3dBjMoxFRMTFiLGkyYJCvcx~DWhrZQkI3pcPvFGEctw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />

        <div className={classes.content}>
          <div className={classes.details}>
            <div className={classes.detailsHead}>
              <div className={classes.detailsHeadCol}>
                <h5 className={classes.detailsSubTitle}>✌️ #crypto_exchange</h5>
                <h2 className={classes.detailsTitle}>
                  Binance exchange crypto app
                </h2>
                <p className={classes.detailsInfo}>
                  Andromeda Nebula would appear in the sky as large as a third
                  of the bucket. Obviously, the connection significantly
                  attracts the rotational equator.
                </p>
              </div>

              <div className={classes.detailsHeadCol}>
                <Button onClick={handleBuy} className={classes.detailsHeadBtn}>
                  Buy a 2.99$
                </Button>
                <Button className={classes.detailsHeadBtn}>Link service</Button>
              </div>
            </div>

            <div className={classes.detailsSliderWrapper}>
              <div className={classes.detailsSliderButtons}>
                <div className={classes.detailsSliderButton}>
                  <ArrowLeftWhite />
                </div>
                <div className={classes.detailsSliderButton}>
                  <ArrowRightWhite />
                </div>
              </div>

              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                className={classes.detailsSlider}
              >
                <SwiperSlide className={classes.detailsSlide}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/b10e/0bbd/f8cc7966eaaccabb04b8bad2e5fd83d8?Expires=1668384000&Signature=WQt9Lmnj2LThqiOoJcW~rNv2f4nbjme-AgNvPeVaSbTPjR8zxrPkKe8w8O1Ol2OMTKKE2ZWzF8ps5ffqxzzZOXCYoEnet-jJluy1-CEg6SxRZh~FGXJquFvb4zINI9NOp782zYTzoMvVVISHpUgUQk3jIq2A09wS5Nj-Dst5QxK88tw3aRe2J34JE4JHwtNcSmK5NlSx8dPU-ybi5YMQEaXvNkLcVOmdj8G6gC04yw0sKDznLCWIu7S7QlqcWmYuMoJLNXEiZWYmACDN1NY-xKpBW-IGAWMDMpW8exUp5sp532-3acEdEgiPxj18tEyBqk9ixkHGjt3YRL3ZLu-Spg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt=""
                    className={classes.detailsSlideImg}
                  />
                </SwiperSlide>
                <SwiperSlide className={classes.detailsSlide}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/deb7/8763/c1fe22379629a4a4a40c90e712762c4d?Expires=1668384000&Signature=fC29Rk~hQKqK2QXQBkOOYiEwjrnIin5G7o0-tGC0yMdoWC6MiGk-yfPb5KtvdzAqOo4r51P9pOVMHwUiman4rLomEJzSfQduGs-kpPkcYmc6V5QbT98OxLLIJijMdcwwy8gVWdG11rwebgiQgIZjkfU811MJ57Jn~x4xnuMC14eeHCDwJ0YkN0rcSujF~XE~ppEajWRDY4Tb4A7yhmwScYBJ-J0revBshMhJcTg1e5VtkWHfJmnf15OIemglAVNu3rlitHTPdIbKJwUaV5wMSVMky9pJy793azUj0V75RcNUhDiVMCZckhCQrWS2i4yczepaRJQ45Hr7MxnXz-7NIg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt=""
                    className={classes.detailsSlideImg}
                  />
                </SwiperSlide>
                <SwiperSlide className={classes.detailsSlide}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/1746/cd8e/708293ab78d5abd52867962cfa280a1e?Expires=1668384000&Signature=Kr8M606KG362TUBhAaxyAXAymbYrQS3c8d2AgmCw8OSPqXtAI5eUeGMAIIDG7q9y45LIFiUzJTyVTdYuaAPVcfCxSDprvcnycWupqFMvj2shb2zDH3LX4cEWYQM6KABn8Wmz0waI4VeyYstvhshPh12VQJR7YFBvzNUOhKdoCcd-ChLe-PNRXZ~xUS~DnZ8zy8R4W-NwzSNM6BqJH~IwUSJJvJml7k-lOKXHp0sJ5OvICzP~vatSd4n63ETGkWPmmVVu2EkF1wcM0JMPAFS6mAq~ZWexCMmnYuXuUoHcoe-jQu0eozO6Re~wVTyTYPRCdgMp61bHqvKAnbBKjta0eg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt=""
                    className={classes.detailsSlideImg}
                  />
                </SwiperSlide>
                <SwiperSlide className={classes.detailsSlide}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/0e7d/231e/bd07da9c9ee9a553a87fa6cfaf9cc18f?Expires=1668384000&Signature=SR6eLOhnJUb74ClhLSsGTGmJCZMrwTRTM0ozoJWVWX7ihU7Y7vvwxx5Bm0EMB30yX5g9LsdlTbgb3MAj~OZc6BiXvphkhzUh~udL-43wXqdI03KXzLg6YgXpdfkyqf9ZkWyAd5I46OgkTpahHL0SNrcbyogWu5oRKBZuBmmoipPWqGg~~T47Sk6rEcLmfiZZAGTWHJeeKZZJGB0hdfD67ArMYJ~rWr4CW5ikreD6m3Y4o0qbhjTf6fgr9Ka9hAkBeSTigaPWsUVix7YUenkpoZ2mjRPgGU3uWlfkZf1gxRwQruuNChyviAU5EV6wShxlzC4bexMG3~1TGteUofXMJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt=""
                    className={classes.detailsSlideImg}
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className={classes.SubInfo}>
              <div className={classes.SubInfoTitle}>Details</div>

              <div className={classes.SubInfoTextWrapper}>
                <div className={classes.SubInfoText}>
                  After the topic is formulated, the magnetic field crosses out
                  the original parameter. Interstellar matter, estimating the
                  brilliance of an illuminated metal ball, chooses a random
                  perturbing factor. Zenith crosses out the random equator. The
                  reddish star, subliming from the surface of the comet's
                  nucleus, represents the hour angle, although for those with
                  telescope eyes the Andromeda Nebula would appear in the sky as
                  large as a third of the Ursa Major bucket. Obviously, the
                  connection significantly attracts the rotational equator.
                </div>

                <div className={classes.SubInfoText}>
                  Andromeda Nebula would appear in the sky as large as a third
                  of the Ursa Major bucket. Obviously, the connection
                  significantly attracts the rotational equator.
                </div>

                <div className={classes.SubInfoText}>
                  The reddish star, subliming from the surface of the comet's
                  nucleus, represents the hour angle, although for those with
                  telescope eyes the Andromeda Nebula would appear in the sky as
                  large as a third of the Ursa Major bucket.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
