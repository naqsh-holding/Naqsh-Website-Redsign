import LegalPage from "../components/legal/LegalPage"
import { privacyPolicy } from "../lib/i18n/legal"

export default function PrivacyPolicyClient() {
  return <LegalPage doc={privacyPolicy} />
}
