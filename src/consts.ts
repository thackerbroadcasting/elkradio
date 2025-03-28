import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Elk Radio",
  EMAIL: "contact@thackerbroadcasting.com",
  CALL_SIGN: "KLKE",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Our Homepage",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "About us",
};

export const BLOG: Metadata = {
  TITLE: "Posts",
  DESCRIPTION: "Our posts",
};

export const SCHEDULE: Metadata = {
  TITLE: "Schedule",
  DESCRIPTION: "Our schedule",
};

export const REQUESTS: Metadata = {
  TITLE: "Requests",
  DESCRIPTION: "Request songs",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/thackerbroadcasting/elkradio"
  }
];

export const EXTERNAL_LINK: Metadata = {
  TITLE: "open in a new window",
  DESCRIPTION: "https://live.thackerbroadcasting.com/public/98.9_the_elk",
};