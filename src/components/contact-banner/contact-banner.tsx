import { Heading } from "#/components/heading";
import { Section } from "#/components/section";
import { Spacer } from "#/components/spacer";
import { Wrap } from "#/components/wrap";
import { getTranslation } from "#/i18n/server";

interface ContactBannerProps {
  readonly description: string;
  readonly heading: string;
}

export const ContactBanner = async ({
  description,
  heading,
}: ContactBannerProps) => {
  const { t } = await getTranslation();

  return (
    <Section>
      <Wrap>
        <Heading text={heading} type="h2" />
        <Spacer size="small" />

        <p className="mx-auto mb-8 max-w-xl text-lg font-medium">
          {description}
        </p>

        <a
          className="relative inline-block cursor-pointer rounded-full border-2 border-primary bg-transparent px-6 py-2 text-base font-bold text-primary transition-all hover:bg-primary hover:text-white disabled:text-transparent dark:border-primary-dark dark:bg-transparent dark:text-neutral-300 dark:hover:bg-primary-dark"
          href={t("home.contactBanner.buttonUrl")}
        >
          {t("home.contactBanner.buttonTitle")}
        </a>
      </Wrap>
    </Section>
  );
};
