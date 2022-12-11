import { useAccount } from "@web3modal/react";
import Article from "../../components/Article/Article";
import Banner from "../../components/Banner";
import Section from "../../components/Section/Section";
import Subscription from "../../components/Subscription/Subscription";
import Title from "../../components/Title";
import { services } from "../../mocks/services";
import classes from "./Home.module.css";

export default function HomePage() {
  const { account } = useAccount();

  return (
    <>
      <Banner className={classes.banner} />

      {account.address && (
        <Section
          heading={
            <Title noMargin gradient>
              Your subscriptions
            </Title>
          }
        >
          <Subscription service={services[0]} noManage />
        </Section>
      )}

      <Section hasMore heading={<Title noMargin>Our recommendations</Title>}>
        <Subscription service={services[0]} noManage />
        <Subscription service={services[1]} noManage />
        <Subscription service={services[2]} noManage />
      </Section>

      <Section
        hasMore
        heading={<Title noMargin>Our favorite crypto services</Title>}
      >
        <Article
          title="best crypto exchange"
          tag="the besty of 2022"
          articleId={1}
          image="https://picsum.photos/seed/1/500/300"
        />
        <Article
          title="best crypto music"
          tag="award 2021"
          articleId={2}
          image="https://picsum.photos/seed/2/500/300"
        />
        <Article
          title="best crypto exchange"
          tag="the besty of week"
          articleId={1}
          image="https://picsum.photos/seed/3/500/300"
        />
      </Section>

      <Section
        hasMore
        heading={<Title noMargin>Verified charitable projects</Title>}
      >
        <Subscription service={services[0]} noManage />
        <Subscription service={services[0]} noManage />
        <Subscription service={services[0]} noManage />
      </Section>

      <Section
        hasMore
        heading={<Title noMargin>Get to know the crypto world</Title>}
      >
        <Article
          title="best crypto music"
          tag="award 2021"
          articleId={2}
          image="https://picsum.photos/seed/4/500/300"
        />

        <Article
          title="best crypto exchange"
          tag="the besty of 2022"
          articleId={1}
          image="https://picsum.photos/seed/5/500/300"
        />

        <Article
          title="how to create wallets"
          tag="tutorial"
          articleId={1}
          image="https://picsum.photos/seed/6/500/300"
        />
      </Section>
    </>
  );
}
