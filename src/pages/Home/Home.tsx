import Article from "../../components/Article/Article";
import Banner from "../../components/Banner";
import Section from "../../components/Section/Section";
import Subscription from "../../components/Subscription/Subscription";
import Title from "../../components/Title";
import { services } from "../../mocks/services";
import classes from "./Home.module.css";

export default function HomePage() {
  return (
    <>
      <Banner className={classes.banner} />

      <Section
        hasMore
        heading={
          <Title noMargin gradient>
            Your subscriptions
          </Title>
        }
      >
        <Subscription service={services[0]} noManage />
        <Subscription service={services[0]} noManage />
        <Subscription service={services[0]} noManage />
      </Section>

      <Section hasMore heading={<Title noMargin>Our recommendations</Title>}>
        <Subscription service={services[0]} noManage />
        <Subscription service={services[0]} noManage />
        <Subscription service={services[0]} noManage />
      </Section>

      <Section
        hasMore
        heading={<Title noMargin>Our favorite crypto services</Title>}
      >
        <Article
          title="best crypto exchange"
          tag="the besty of 2022"
          articleId={1}
          image="https://s3-alpha-sig.figma.com/img/c564/689a/327e41c58d849faa4cda6de8b85b127e?Expires=1668384000&Signature=S3VQU8cRpE-GJ0xnDz6e4k4GbX15YY6t71uBUxRSyNs3H49yKlPk2Crt0wPXSfMPY9EKK6g1R1BJbj-k6ZgS6bVW1r0ChxeF4C~0xx5rG8yRqUrmQEsdCD1EYj2SiNVOQilMZb5E6lTeTALQk6QH7tjRH4IZBLVQio4d6aOCi7rdU4gvVNvwNH65bDE95G2O3T47vTkbd~1ojokBqoXjYRK900EuCjxNRJwGQNzWvf8agcVHCe0neZsbFHz4aF1TlRTy~2MkPax8pU8Ks2lZA~XGQElmYruFkn8a9SHDRH69kaSliEGjXSs2KZeMUX1ZVP44qbxEioCmZL3cdH1v5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <Article
          title="best crypto music"
          tag="award 2021"
          articleId={2}
          image="https://s3-alpha-sig.figma.com/img/e91d/7ca7/d4caf51dbee06479d88402ca18f0ba71?Expires=1668384000&Signature=S3plHRdENKx2BiNOSDh659OA5hVl6JcLv82gzp0sdmDrubfNtALOlWbJj4DkjlFvOTO6nwAqdTQT3cGbIhAy3KwiNE~WBtTMV1gq0JDEhqpvF5O~trE51Tdl81hA3Wnz8j67Xo-mY3BGQKY9TRhFPlSP36xEWB7TdRmcdZPPdW5X1dFp3hSpkkOOL~o5YmF6yPKk2yEXsW1x-0RcZRVlqlMzMFAEWNhGu~tWltag3P-3e6a0x0VB2eN0pv5lnpIOijYEssbExZ-opg1rhH5OYgzHKERtW6d3ejm0pT4EihBh-g00eFnT2ywEQOoGNs9-pzwtCL6V030-V4UXAvcEqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <Article
          title="best crypto exchange"
          tag="the besty of 2022"
          articleId={1}
          image="https://s3-alpha-sig.figma.com/img/b492/4738/bdf020eddba621ee262f82f8f60915f9?Expires=1668384000&Signature=T6S~4jxE0Ynv36LUj~tLV1LbqGONll8jW6y~zYcXn3c6HZOemr66KGra7KLDgHvphZd1M~vblFVTqmomX7ZTbR~wggJfmJszgUoQceu-AOf6MCKycmeblzyrMi-e-ifZ1DSql15tU~ZiiltErvmHw2CLbN5DeQIkRnvUVlf5tJUOwTP~CPsm3bOhpWw2R7wn-OAXUXuRyx4U0KcCFmBfMIxk6buc5PcixYPaHyTATrmJJnSXzp1xnpd7~5jvMx2pfJmF2hMYialTjq0ilzLm0WTbw3aK6ZB5wmw9ZdL8KKK3dBjMoxFRMTFiLGkyYJCvcx~DWhrZQkI3pcPvFGEctw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
          image="https://s3-alpha-sig.figma.com/img/e91d/7ca7/d4caf51dbee06479d88402ca18f0ba71?Expires=1668384000&Signature=S3plHRdENKx2BiNOSDh659OA5hVl6JcLv82gzp0sdmDrubfNtALOlWbJj4DkjlFvOTO6nwAqdTQT3cGbIhAy3KwiNE~WBtTMV1gq0JDEhqpvF5O~trE51Tdl81hA3Wnz8j67Xo-mY3BGQKY9TRhFPlSP36xEWB7TdRmcdZPPdW5X1dFp3hSpkkOOL~o5YmF6yPKk2yEXsW1x-0RcZRVlqlMzMFAEWNhGu~tWltag3P-3e6a0x0VB2eN0pv5lnpIOijYEssbExZ-opg1rhH5OYgzHKERtW6d3ejm0pT4EihBh-g00eFnT2ywEQOoGNs9-pzwtCL6V030-V4UXAvcEqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />

        <Article
          title="best crypto exchange"
          tag="the besty of 2022"
          articleId={1}
          image="https://s3-alpha-sig.figma.com/img/b492/4738/bdf020eddba621ee262f82f8f60915f9?Expires=1668384000&Signature=T6S~4jxE0Ynv36LUj~tLV1LbqGONll8jW6y~zYcXn3c6HZOemr66KGra7KLDgHvphZd1M~vblFVTqmomX7ZTbR~wggJfmJszgUoQceu-AOf6MCKycmeblzyrMi-e-ifZ1DSql15tU~ZiiltErvmHw2CLbN5DeQIkRnvUVlf5tJUOwTP~CPsm3bOhpWw2R7wn-OAXUXuRyx4U0KcCFmBfMIxk6buc5PcixYPaHyTATrmJJnSXzp1xnpd7~5jvMx2pfJmF2hMYialTjq0ilzLm0WTbw3aK6ZB5wmw9ZdL8KKK3dBjMoxFRMTFiLGkyYJCvcx~DWhrZQkI3pcPvFGEctw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />

        <Article
          title="how to create wallets"
          tag="tutorial"
          articleId={1}
          image="https://s3-alpha-sig.figma.com/img/c564/689a/327e41c58d849faa4cda6de8b85b127e?Expires=1668384000&Signature=S3VQU8cRpE-GJ0xnDz6e4k4GbX15YY6t71uBUxRSyNs3H49yKlPk2Crt0wPXSfMPY9EKK6g1R1BJbj-k6ZgS6bVW1r0ChxeF4C~0xx5rG8yRqUrmQEsdCD1EYj2SiNVOQilMZb5E6lTeTALQk6QH7tjRH4IZBLVQio4d6aOCi7rdU4gvVNvwNH65bDE95G2O3T47vTkbd~1ojokBqoXjYRK900EuCjxNRJwGQNzWvf8agcVHCe0neZsbFHz4aF1TlRTy~2MkPax8pU8Ks2lZA~XGQElmYruFkn8a9SHDRH69kaSliEGjXSs2KZeMUX1ZVP44qbxEioCmZL3cdH1v5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
      </Section>
    </>
  );
}
