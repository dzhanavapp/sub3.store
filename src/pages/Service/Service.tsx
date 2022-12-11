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
import clsx from "clsx";
import { services } from "../../mocks/services";
const ERC20_TOKEN = "0xd393b1E02dA9831Ff419e22eA105aAe4c47E1253";

const Service = () => {
  const { id } = useParams();

  const { addSubscription } = useSubContract();

  const service = services[Number(id)];

  // const config = {
  //   address: ERC20_TOKEN,
  //   abi: erc20ABI,
  //   functionName: "decimals",
  // };

  // const { data, error, isLoading, refetch } = useContractRead(config);

  const handleBuy = () => {
    if (!addSubscription) return;
    addSubscription(
      service.address,
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
          src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
          alt=""
        />

        <div className={classes.content}>
          <div className={classes.details}>
            <div className={classes.detailsHead}>
              <div
                className={clsx(
                  classes.detailsHeadCol,
                  classes.detailsHeadColInfo
                )}
              >
                <h5 className={classes.detailsSubTitle}>✌️ #crypto_exchange</h5>
                <h2 className={classes.detailsTitle}>{service.name}</h2>
                <p className={classes.detailsInfo}>{service.description}</p>
              </div>

              <div
                className={clsx(
                  classes.detailsHeadCol,
                  classes.detailsHeadColAction
                )}
              >
                <Button onClick={handleBuy} className={classes.detailsHeadBtn}>
                  Sub a 2.99$
                </Button>

                <a href={service.link} target="_blank" rel="noreferrer">
                  <Button className={classes.detailsHeadBtn}>
                    Link service
                  </Button>
                </a>
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
                {service.images.map((image) => {
                  return (
                    <SwiperSlide className={classes.detailsSlide}>
                      <img
                        src={image}
                        alt=""
                        className={classes.detailsSlideImg}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div className={classes.SubInfo}>
              <div className={classes.SubInfoTitle}>Details</div>

              <div className={classes.SubInfoTextWrapper}>
                <div className={classes.SubInfoText}>{service.details}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
