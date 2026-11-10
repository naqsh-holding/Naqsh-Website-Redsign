import LegalPage from "../components/legal/LegalPage"
import { termsOfService } from "../lib/i18n/legal"

export default function TermsOfServiceClient() {
  return <LegalPage doc={termsOfService} />
}
