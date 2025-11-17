import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import "./custom.css";

import BackgroundAnimation from "./components/BackgroundAnimation.vue";
import ModernCard from "./components/ModernCard.vue";
import FeatureCards from "./components/FeatureCards.vue";
import CustomHero from "./components/CustomHero.vue";
import ModernDocWrapper from "./components/ModernDocWrapper.vue";
import InfoCard from "./components/InfoCard.vue";
import HomeInfoSection from "./components/HomeInfoSection.vue";
import Layout from "./components/Layout.vue";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("BackgroundAnimation", BackgroundAnimation);
    app.component("ModernCard", ModernCard);
    app.component("FeatureCards", FeatureCards);
    app.component("CustomHero", CustomHero);
    app.component("ModernDocWrapper", ModernDocWrapper);
    app.component("InfoCard", InfoCard);
    app.component("HomeInfoSection", HomeInfoSection);
  },
} satisfies Theme;
