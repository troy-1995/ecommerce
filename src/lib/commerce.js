import Commmerce from "@chec/commerce.js";

export const commerce = new Commmerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);
