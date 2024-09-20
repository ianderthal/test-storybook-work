import { Hero } from "./Hero";

export default {
  title: "Example/Hero",
  component: Hero,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    size: "sm",
    headline: "Areas to Support",
  },
};

export const Medium = {
  args: {
    size: "md",
    headline: "Areas to Support",
  },
};
