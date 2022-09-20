import { useTranslation } from "react-i18next";
import { Wrap } from "#/components/wrap";
import { getCurrentYear } from "#/utils/date";
import * as styled from "./styles";

export const Footer = () => {
  const { t } = useTranslation();
  const year = getCurrentYear();
  return (
    <styled.Footer>
      <Wrap>{t("footer:copyright", { year })}</Wrap>
    </styled.Footer>
  );
};
