import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Neuronpedia Docs",
  tagline: "Open Interpretability Platform",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.neuronpedia.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "hijohnnylin", // Usually your GitHub org/user name.
  projectName: "neuronpedia-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Neuronpedia Docs",
      logo: {
        alt: "Neuronpedia Logo",
        src: "img/logo.png",
      },
      items: [
        {
          href: "https://neuronpedia.org",
          label: "Neuronpedia",
          position: "right",
        },
        {
          href: "https://neuronpedia.org/api-doc",
          label: "API (WIP)",
          position: "right",
        },
      ],
    },
    sidebar: {
      hideable: true,
    },
    hide_table_of_contents: true,
    footer: {},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
