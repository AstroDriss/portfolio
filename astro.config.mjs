import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), compress()]
});