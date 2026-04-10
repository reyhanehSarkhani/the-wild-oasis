import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateSettings from "../features/settings/UpdateSettingsForm";
function Settings() {
  return (
    <Row>
      <Heading>Update hotel settings</Heading>
      <UpdateSettings />
    </Row>
  );
}

export default Settings;
