import type { NextPage } from "next";
import Bloom from "../components/blooms";
import CatalystSection from "../components/catalyst";
import FeaturesSection from "../components/features";
import Footer from "../components/footer";
import HeroSection from "../components/hero";
import MoreFeatures from "../components/more";
import Navbar from "../components/navbar";
import Preview from "../components/preview";
import Waitlist from "../components/waitlist";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="min-w-screen min-h-screen bg-bg font-inter">
      <Head>
        <title>Twidge</title>
        <meta
          name="description"
          content="Twidge is a productivity app that helps you organize your life. Plan your calendars, write notes build to-do lists blazingly fast."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/assets/logo.svg" type="image/svg" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="title" content="Twidge - The future of productivity" />
        <meta
          name="description"
          content="Twidge is an open-source productivity app which helps you manage link embeds, tasks, calendars and many more"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://twidge.app" />
        <meta
          property="og:title"
          content="Twidge - The future of productivity"
        />
        <meta
          property="og:description"
          content="Twidge is an open-source productivity app which helps you manage link embeds, tasks, calendars and many more"
        />
        <meta
          property="og:image"
          content="https://f004.backblazeb2.com/file/twidge/Slide+4_3+-+1.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://twidge.app" />
        <meta
          property="twitter:title"
          content="Twidge - The future of productivity"
        />
        <meta
          property="twitter:description"
          content="Twidge is an open-source productivity app which helps you manage link embeds, tasks, calendars and many more"
        />
        <meta
          property="twitter:image"
          content="https://f004.backblazeb2.com/file/twidge/Slide+4_3+-+1.png"
        />
      </Head>

      <Bloom />
      <Navbar />
      <HeroSection />
      <Preview />
      <CatalystSection />
      <FeaturesSection />
      <MoreFeatures />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Home;
