// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightImageZoom from "starlight-image-zoom";
import starlightThemeRapide from "starlight-theme-rapide";

// https://astro.build/config
export default defineConfig({
  site: "https://solx88.github.io'",
  base: "/v-docs",

  integrations: [
    starlight({
      title: "My Docs",
      // social: [
      //   {
      //     icon: "github",
      //     label: "GitHub",
      //     href: "https://github.com/withastro/starlight",
      //   },
      // ],

      // Add this line to hide Next/Prev links everywhere
      pagination: false,

      // Turn off the TOC globally
      tableOfContents: false,

      sidebar: [
        { label: "Giới thiệu", link: "/gioithieu" },
        {
          label: "Phiếu in, báo cáo",
          // 2. Tell Starlight to automatically list all files in this folder
          autogenerate: { directory: "phieuinbaocao" },
        },
        {
          label: "HIS L2",
          autogenerate: { directory: "hisl2" },
        },
        {
          label: "HIS Dược",
          autogenerate: { directory: "hisl2-duoc" },
        },
        {
          label: "HIS CLS",
          autogenerate: { directory: "hisl2-cls" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },

        { label: "Log Out", link: "/logout" },
      ],

      components: {
        // We replace the standard Head with our custom one (which includes the script)
        // OR easier: Override the 'Footer' or 'Header' to inject the script.
        // Let's use Header so it runs early.
        Header: "./src/components/HeaderWithAuth.astro",
      },
      plugins: [starlightThemeRapide(), starlightImageZoom()],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
