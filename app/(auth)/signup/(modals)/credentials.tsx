import InfoModal from "@/components/InfoModal";
import { useTranslation } from "react-i18next";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import StatusIcon from "@/components/StatusIcon";
import { router } from "expo-router";

const Credentials = () => {
  const { t } = useTranslation("registerWithEmailAndPassword");

  const redirectToForm = () => {
    router.replace("../credentials");
  };

  return (
    <InfoModal
      title={t("modal.title")}
      subtitle={t("modal.subtitle")}
      steps={[
        {
          description: t("modal.steps.0"),
          icon: (
            <StatusIcon>
              <FontAwesome6 name="server" />
            </StatusIcon>
          ),
        },
        {
          description: t("modal.steps.1"),
          icon: (
            <StatusIcon variant="warning">
              <FontAwesome6 name="hashtag" />
            </StatusIcon>
          ),
        },
        {
          description: t("modal.steps.2"),
          icon: (
            <StatusIcon variant="warning">
              <FontAwesome6 name="person" />
            </StatusIcon>
          ),
        },
      ]}
      button={{ title: t("modal.confirmButton"), onPress: redirectToForm }}
    />
  );
};

export default Credentials;
