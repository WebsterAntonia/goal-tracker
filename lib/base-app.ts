export const APP_NAME = "goal-tracker";
export const APP_TITLE = "Goal Tracker";
export const APP_DESCRIPTION = "Create a goal, track every completion, and keep personal momentum visible on Base.";
export const APP_TAGLINE = "Track progress with momentum.";
export const BASE_APP_ID = "69cb7f692b941e5a2778682a";
export const BUILDER_CODE = "bc_i8hj5z5r";
export const BUILDER_CODE_DATA_SUFFIX =
  "0x62635f6938686a357a35720b0080218021802180218021802180218021" as const;
export const TRACKING_APP_ID = "app-029";
export const APP_URL = "https://goal-tracker-livid.vercel.app";
export const APP_IMAGE_URL = `${APP_URL}/api/miniapp-image`;
export const APP_PRIMARY_CATEGORY = "productivity";
export const APP_TAGS = ["goal", "progress", "tracking", "baseapp"] as const;

export const FC_MINIAPP_EMBED = JSON.stringify({
  version: "next",
  imageUrl: APP_IMAGE_URL,
  button: {
    title: "Open Goal Tracker",
    action: {
      type: "launch_miniapp",
      name: APP_TITLE,
      url: APP_URL,
      splashImageUrl: APP_IMAGE_URL,
      splashBackgroundColor: "#F8FAFC",
    },
  },
});

export const FC_FRAME_EMBED = JSON.stringify({
  version: "next",
  imageUrl: APP_IMAGE_URL,
  button: {
    title: "Open Goal Tracker",
    action: {
      type: "launch_frame",
      name: APP_TITLE,
      url: APP_URL,
      splashImageUrl: APP_IMAGE_URL,
      splashBackgroundColor: "#F8FAFC",
    },
  },
});
