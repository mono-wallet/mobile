import InfoModal from "@/components/InfoModal";
import { useTranslation } from "react-i18next";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Credentials = () => {
  const { t } = useTranslation("registerWithEmailAndPassword");

  return (
    <InfoModal
      title={t("modal.title")}
      subtitle={t("modal.subtitle")}
      steps={[
        {
          description: t("modal.steps.0"),
          icon: <FontAwesome6 name="server" size={20} />,
        },
        {
          description: t("modal.steps.1"),
          icon: <FontAwesome6 name="hashtag" size={20} />,
        },
        {
          description: t("modal.steps.2"),
          icon: <FontAwesome6 name="person" size={20} />,
        },
        {
          description: t("modal.steps.3"),
          icon: <FontAwesome6 name="fingerprint" size={20} />,
        },
      ]}
      button={{ title: t("modal.confirmButton"), onPress: () => {} }}
    />
  );
};

export default Credentials;
