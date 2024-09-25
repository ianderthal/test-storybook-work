import { Hero } from "./Hero";

export default {
  title: "Example/Hero",
  component: Hero,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md"],
      description: "How large should the hero be?",
    },
    headline: {
      control: "string",
      description: "Text inside hero space",
    },
  },
};

export const Default = {
  args: {
    size: "sm",
    label: "Areas to Support",
    headline: "Lorem Ipsum",
  },
};

export const Medium = {
  args: {
    size: "md",
    label: "Areas to Support",
    headline: "Lorem Ipsum",
  },
};
