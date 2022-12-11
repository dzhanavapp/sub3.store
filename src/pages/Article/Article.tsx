import ButtonBack from "../../components/ButtonBack/ButtonBack";
import Subscription from "../../components/Subscription/Subscription";
import { services } from "../../mocks/services";
import classes from "./Article.module.css";
import "./Article.css";
import clsx from "clsx";

const Article = () => {
  const uniswapService = services[0];
  const kyberSwapService = services[2];
  return (
    <div className={classes.article}>
      <div className={classes.imageWrapper}>
        <img
          className={classes.image}
          src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3594&q=80"
          alt=""
        />
      </div>

      <div className={clsx(classes.content, "content")}>
        <p className="tag">
          <b>✌️</b> #crypto_exchange
        </p>
        <h2>DEX</h2>
        <p>
          Decentralized exchanges, or DEXs, have become increasingly popular in
          the world of cryptocurrency trading. Unlike traditional exchanges,
          which are centralized and often require users to submit personal
          information and go through a lengthy verification process, DEXs are
          decentralized and allow users to trade directly with each other
          without the need for a middleman.
        </p>

        <h2>Uniswap</h2>

        <p>
          One of the most popular DEXs is Uniswap, which was launched in 2018
          and has quickly risen to become one of the top decentralized exchanges
          in the world. Uniswap is built on the Ethereum blockchain and uses a
          unique liquidity pool system to facilitate trades. Users can add
          liquidity to the pool in the form of Ethereum and any ERC-20 token,
          and in return, they receive a portion of the trading fees generated by
          the exchange.
        </p>

        <Subscription service={uniswapService} noManage />

        <h2>Binance DEX</h2>
        <p>
          Another popular DEX is Binance DEX, which is the decentralized version
          of the popular centralized exchange Binance. Binance DEX uses the same
          Binance Chain blockchain as the centralized exchange and offers a
          similar user experience, with a focus on fast and secure trading.
        </p>
        <h2>Kyber Network</h2>
        <p>
          Kyber Network is another popular DEX that has gained a reputation for
          its high liquidity and fast transaction speeds. Kyber Network uses a
          system of reserve pools to provide liquidity for trades, and allows
          users to trade a wide variety of cryptocurrencies, including ERC-20
          tokens and non-fungible tokens (NFTs).
        </p>
        <Subscription service={kyberSwapService} noManage />
        <p>
          These are just a few examples of the many popular DEXs that are
          currently available. As the world of cryptocurrency continues to
          evolve and more people become interested in decentralized finance,
          it's likely that DEXs will continue to grow in popularity and offer
          users a secure and convenient way to trade digital assets.
        </p>
      </div>

      <ButtonBack className={classes.back} />
    </div>
  );
};

export default Article;
