import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { LayoutTree } from "@moxy/next-layout";
import Theme from "theme";
import SiteLayout from "components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <DefaultSeo
        titleTemplate="%s | Chakra Ui"
        defaultTitle="Chakra Ui"
        description="Chakra UI Template"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/logo.png",
          },
          {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "76x76",
          },
        ]}
        twitter={{
          handle: "@tal7aouy",
          site: "@tal7aouy",
          cardType: "summary_large_image",
        }}
      />
      <LayoutTree
        Component={Component}
        pageProps={pageProps}
        defaultLayout={<SiteLayout />}
      />
    </Theme>
  );
}

export default MyApp;
