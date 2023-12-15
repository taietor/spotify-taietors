import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2023-10-16",
  appInfo: {
    name: "Spotify Taietor",
    version: "0.9.0",
  },
});
