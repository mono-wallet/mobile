import InfoModal from "@/components/InfoModal";
import StatusIcon from "@/components/StatusIcon";
import {
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";

const SeedPhrase = () => {
  const { t } = useTranslation("generateSeedPhrase");

  const redirectToSeedPhrase = () => {
    router.replace("../seed-phrase");
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
              <FontAwesome6 name="lock" />
            </StatusIcon>
          ),
        },
        {
          description: t("modal.steps.1"),
          icon: (
            <StatusIcon variant="warning">
              <MaterialCommunityIcons name="note-edit-outline" />
            </StatusIcon>
          ),
        },
        {
          description: t("modal.steps.2"),
          icon: (
            <StatusIcon variant="error">
              <FontAwesome5 name="eye-slash" />
            </StatusIcon>
          ),
        },
      ]}
      button={{
        title: t("modal.confirmButton"),
        onPress: redirectToSeedPhrase,
      }}
    />
  );
};

export default SeedPhrase;
