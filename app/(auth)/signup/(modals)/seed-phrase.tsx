import InfoModal from "@/components/InfoModal";
import {
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const SeedPhrase = () => {
  const { t } = useTranslation("generateSeedPhrase");

  return (
    <InfoModal
      title={t("modal.title")}
      subtitle={t("modal.subtitle")}
      steps={[
        {
          description: t("modal.steps.0"),
          icon: <FontAwesome6 name="lock" size={20} />,
        },
        {
          description: t("modal.steps.1"),
          icon: <MaterialCommunityIcons name="note-edit-outline" size={20} />,
        },
        {
          description: t("modal.steps.2"),
          icon: <FontAwesome5 name="eye-slash" size={20} />,
        },
      ]}
      button={{ title: t("modal.confirmButton"), onPress: () => {} }}
    />
  );
};

export default SeedPhrase;
