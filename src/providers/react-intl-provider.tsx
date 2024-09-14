import { IntlProvider } from "react-intl";
import messages_fa from "i18n/fa.json";
import messages_en from "i18n/en.json";

const messages = {
  fa: messages_fa,
  en: messages_en,
};

type IntlManagerProps = {
  children: React.ReactNode;
  locale: "fa" | "en";
};

export function ReactIntlProvider(props: IntlManagerProps) {
  const { children, locale } = props;
  return (
    <IntlProvider
      locale={locale}
      defaultLocale="fa"
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
}
