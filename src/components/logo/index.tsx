import { useTranslation } from "react-i18next";
import { colours } from "#/constants/colours";
import * as styled from "./styles";

export const Logo = () => {
  const { t } = useTranslation();
  return (
    <styled.Logo
      fill={colours.white}
      height="32"
      viewBox="0 0 50 5"
      width="80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{t("logo:title")}</title>
      <path d="M0.3 7.9C0.1 7.4 0 6.6 0 5.6c0-1.6 0.2-3 0.7-4.4C0.8 0.8 1 0.5 1.2 0.4c0.2-0.2 0.6-0.2 1-0.2 0.2 0 0.4 0 0.5 0.1 0.1 0.1 0.1 0.2 0.1 0.3 0 0.2-0.1 0.6-0.3 1.3C2.5 2.3 2.4 2.7 2.3 3.1 2.2 3.5 2.2 3.9 2.1 4.4c0.4-1 0.8-1.9 1.3-2.5 0.5-0.6 1-1.1 1.4-1.4 0.5-0.3 0.9-0.4 1.3-0.4 0.8 0 1.2 0.4 1.2 1.2 0 0.2-0.1 0.5-0.2 1.1C7.1 2.9 7.1 3.2 7.1 3.3c0 0.4 0.1 0.6 0.4 0.6 0.3 0 0.8-0.3 1.3-0.8C9 3 9.2 2.9 9.3 2.9c0.2 0 0.3 0.1 0.4 0.2 0.1 0.1 0.1 0.3 0.1 0.5 0 0.4-0.1 0.8-0.4 1C9.1 5.1 8.7 5.4 8.3 5.6 7.8 5.9 7.4 6 6.9 6 6.2 6 5.7 5.8 5.4 5.5 5.1 5.2 4.9 4.7 4.9 4.2c0-0.2 0-0.4 0.1-0.5 0-0.2 0-0.4 0-0.5C5 3 4.9 2.9 4.8 2.9c-0.2 0-0.4 0.2-0.7 0.6C3.8 3.9 3.5 4.4 3.2 5.1 2.9 5.7 2.7 6.4 2.5 7.1 2.4 7.7 2.2 8.1 2.1 8.3 1.9 8.5 1.6 8.6 1.2 8.6 0.8 8.6 0.5 8.3 0.3 7.9z" />
      <path d="M17.7 4.7c0.1 0.1 0.1 0.3 0.1 0.6 0 0.3 0 0.5-0.1 0.6 -0.1 0.2-0.2 0.3-0.4 0.4l-3.5 2.3c-0.5 2.5-1.1 4.4-1.8 5.9 -0.7 1.4-1.7 2.1-2.8 2.1 -0.6 0-1.1-0.2-1.5-0.6 -0.4-0.4-0.6-0.9-0.6-1.5 0-0.6 0.1-1.1 0.4-1.7 0.3-0.6 0.7-1.3 1.4-2 0.7-0.8 1.7-1.6 3-2.6l0.1-0.4c0.1-0.4 0.2-1.1 0.3-1.9 -0.2 0.9-0.6 1.5-1 2 -0.4 0.5-0.9 0.7-1.4 0.7 -0.5 0-1-0.2-1.3-0.7C8.3 7.3 8.2 6.7 8.2 6c0-0.9 0.1-1.7 0.2-2.5C8.5 2.8 8.7 2 8.9 1.1 9 0.8 9.2 0.5 9.4 0.3c0.2-0.2 0.6-0.2 1-0.2 0.3 0 0.4 0 0.5 0.1 0.1 0.1 0.2 0.2 0.2 0.4 0 0.1-0.1 0.4-0.2 1 -0.1 0.4-0.2 0.8-0.3 1.2 -0.1 0.5-0.2 1-0.3 1.4 -0.1 0.5-0.1 0.8-0.1 1.1 0 0.5 0.1 0.7 0.4 0.7 0.2 0 0.4-0.2 0.7-0.5s0.6-0.9 0.9-1.6c0.3-0.7 0.6-1.6 0.9-2.7 0.1-0.4 0.2-0.6 0.4-0.8 0.2-0.2 0.5-0.2 0.9-0.2 0.3 0 0.5 0 0.6 0.1 0.1 0.1 0.2 0.2 0.2 0.4 0 0.3-0.2 1.3-0.5 3.1l-0.5 2.9c0.9-0.7 1.8-1.3 2.7-1.9 0.2-0.1 0.3-0.1 0.4-0.1C17.5 4.5 17.6 4.6 17.7 4.7zM10.5 13.9c0.4-0.7 0.7-1.9 1.1-3.5 -0.9 0.8-1.6 1.5-2 2.1C9.2 13.2 9 13.8 9 14.2c0 0.2 0 0.4 0.1 0.5 0.1 0.1 0.2 0.2 0.4 0.2C9.8 14.9 10.1 14.6 10.5 13.9z" />
      <path d="M17 7.8c-0.4-0.5-0.7-1.2-0.7-2.1 0-1 0.2-1.9 0.7-2.7s1-1.5 1.8-2.1c0.7-0.5 1.5-0.8 2.3-0.8 0.3 0 0.4 0.1 0.5 0.2 0.1 0.1 0.2 0.3 0.2 0.5 0.3 0 0.5-0.1 0.8-0.1 0.6 0 0.9 0.2 0.9 0.6 0 0.3-0.1 0.9-0.3 1.8C23 4.5 22.9 5.5 22.9 6c0 0.2 0 0.3 0.1 0.4 0.1 0.1 0.2 0.2 0.4 0.2 0.2 0 0.5-0.1 0.8-0.4 0.3-0.3 0.8-0.8 1.3-1.4 0.1-0.2 0.3-0.3 0.5-0.3 0.2 0 0.3 0.1 0.4 0.2s0.1 0.3 0.1 0.6c0 0.5-0.1 0.9-0.3 1.1 -0.5 0.6-1 1.1-1.6 1.5 -0.6 0.4-1.1 0.6-1.6 0.6 -0.4 0-0.8-0.1-1.1-0.4 -0.3-0.3-0.6-0.6-0.7-1.1 -0.6 1-1.4 1.5-2.4 1.5C18.1 8.6 17.5 8.3 17 7.8zM20.2 6.3c0.2-0.3 0.4-0.7 0.5-1.2l0.7-3.3c-0.5 0-1 0.2-1.4 0.6 -0.4 0.4-0.8 0.8-1 1.4S18.6 5 18.6 5.7c0 0.4 0.1 0.6 0.2 0.8 0.1 0.2 0.4 0.3 0.6 0.3C19.7 6.8 20 6.6 20.2 6.3z" />
      <path d="M25.4 7.9c-0.2-0.5-0.3-1.2-0.3-2.3 0-1.6 0.2-3 0.7-4.4 0.1-0.3 0.3-0.6 0.5-0.8 0.2-0.2 0.6-0.2 1-0.2 0.2 0 0.4 0 0.5 0.1C27.9 0.3 28 0.4 28 0.5c0 0.2-0.1 0.6-0.3 1.3 -0.1 0.5-0.2 0.9-0.3 1.3 -0.1 0.4-0.1 0.8-0.2 1.3 0.4-1 0.8-1.9 1.3-2.5 0.5-0.6 1-1.1 1.4-1.4 0.5-0.3 0.9-0.4 1.3-0.4 0.8 0 1.2 0.4 1.2 1.2 0 0.5-0.1 1.3-0.4 2.5 -0.2 1-0.3 1.7-0.3 2.1 0 0.5 0.2 0.7 0.5 0.7 0.2 0 0.5-0.1 0.9-0.4 0.3-0.3 0.8-0.8 1.3-1.4 0.1-0.2 0.3-0.3 0.5-0.3 0.2 0 0.3 0.1 0.4 0.2 0.1 0.1 0.1 0.3 0.1 0.6 0 0.5-0.1 0.9-0.3 1.1C34.6 7 34 7.6 33.4 8c-0.6 0.4-1.3 0.6-2 0.6 -0.6 0-1.1-0.2-1.4-0.5s-0.5-0.9-0.5-1.5c0-0.3 0.1-0.9 0.3-1.8C30 4 30 3.4 30 3.1 30 3 30 2.9 29.8 2.9c-0.2 0-0.4 0.2-0.7 0.6 -0.3 0.4-0.6 0.9-0.9 1.6 -0.3 0.7-0.5 1.4-0.7 2.1 -0.1 0.6-0.3 0.9-0.5 1.1 -0.2 0.2-0.4 0.3-0.8 0.3C25.9 8.6 25.6 8.3 25.4 7.9z" />
      <path d="M42.4 4.7c0.1 0.1 0.1 0.3 0.1 0.6 0 0.5-0.1 0.9-0.3 1.1 -0.4 0.5-1.1 1-1.9 1.5 -0.8 0.5-1.7 0.7-2.6 0.7 -1.3 0-2.2-0.3-2.9-1 -0.7-0.7-1-1.6-1-2.8 0-0.8 0.2-1.6 0.5-2.3 0.3-0.7 0.8-1.3 1.4-1.7s1.3-0.6 2.1-0.6c0.7 0 1.3 0.2 1.7 0.6s0.6 1 0.6 1.7c0 0.8-0.3 1.5-0.9 2.1 -0.6 0.6-1.6 1.1-3 1.4 0.3 0.6 0.9 0.8 1.7 0.8 0.5 0 1.2-0.2 1.8-0.6 0.7-0.4 1.3-0.9 1.8-1.5 0.1-0.2 0.3-0.3 0.5-0.3C42.2 4.5 42.3 4.6 42.4 4.7zM36.4 2.6c-0.3 0.5-0.5 1.1-0.5 1.9v0c0.7-0.2 1.3-0.4 1.7-0.8 0.4-0.3 0.6-0.7 0.6-1.2 0-0.2-0.1-0.4-0.2-0.5 -0.1-0.1-0.3-0.2-0.5-0.2C37 1.9 36.7 2.1 36.4 2.6z" />
      <path d="M47.9 5.7c-0.4 0.8-1 1.5-1.7 2.1 -0.7 0.5-1.5 0.8-2.3 0.8 -0.2 2.3-0.5 4.3-1.1 5.8 -0.6 1.6-1.4 2.3-2.4 2.3 -0.6 0-1.1-0.2-1.4-0.7 -0.3-0.5-0.5-1.1-0.5-1.9 0-1.2 0.3-2.5 0.8-4.1 0.5-1.6 1.4-3.3 2.5-5.2 0-1.8 0-3 0-3.7 0-0.3 0.1-0.6 0.4-0.8S42.7 0 43.2 0c0.3 0 0.4 0.1 0.5 0.2 0.1 0.1 0.2 0.3 0.2 0.6 0 0.3 0 0.5 0 0.7 0.4-0.5 0.8-0.8 1.1-1 0.4-0.2 0.8-0.3 1.2-0.3 0.7 0 1.2 0.3 1.6 0.8 0.4 0.5 0.6 1.2 0.6 2.1C48.5 4 48.3 4.9 47.9 5.7zM41.3 12.8c0.2-1.4 0.4-3.2 0.4-5.3 -0.5 1.2-0.9 2.3-1.2 3.4 -0.3 1.1-0.5 2-0.5 2.8 0 0.4 0 0.7 0.1 0.9 0.1 0.2 0.2 0.3 0.3 0.3C40.8 15 41.1 14.3 41.3 12.8zM45.1 6.1c0.4-0.4 0.7-0.8 0.9-1.4s0.3-1.1 0.3-1.8c0-0.4-0.1-0.6-0.2-0.8 -0.1-0.2-0.3-0.3-0.6-0.3 -0.4 0-1 0.5-1.6 1.4 0 0.5 0 1.3 0 2.3 0 0.6 0 1 0 1.3C44.3 6.8 44.7 6.5 45.1 6.1z" />
    </styled.Logo>
  );
};
