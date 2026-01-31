import { Layout } from "./layouts/Layout";
import { Hero } from "./sections/Hero";
import { SocialProof } from "./sections/SocialProof";
import { Features } from "./sections/Features";

import { Benefits } from "./sections/Benefits";
import { Pricing } from "./sections/Pricing";
import { FAQ } from "./sections/FAQ";
import { CTA } from "./sections/CTA";

function App() {
  return (
    <Layout>
      <Hero />
      <SocialProof />
      <Features />
      <Benefits />
      <Pricing />
      <FAQ />
      <CTA />
    </Layout>
  );
}

export default App;
