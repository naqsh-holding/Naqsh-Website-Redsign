import Navigation from "../components/layout/Navigation"
import Footer from "../components/sections/Footer"

export default function TermsOfServiceClient() {
  const updated = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navigation forceStyle="white" />
      <main id="main" className="site-wrap max-w-3xl pb-24 pt-32 md:pt-40">
        <p className="label">Legal</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,5vw,4.2rem)]">Terms of Service</h1>
        <p className="mt-4 text-mute">Last updated: {updated}</p>

        <div className="mt-16 space-y-12 text-[1.05rem] leading-relaxed text-ink/80">
          <section>
            <h2 className="display mb-4 text-3xl text-ink">Agreement to Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of Naqsh Holding Company&apos;s website and
              services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with
              any part of these Terms, then you may not access our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Description of Services</h2>
            <p>
              Naqsh Holding Company is an investment leader that owns and operates five diverse companies across
              multiple sectors: 6 Degrees Technologies (Technology & Smart Solutions), Efficiency Center Business Inc.
              (Business Incubation & Co-working), Promotion Efficiency for Advertising (Marketing & Creative
              Production), Burooj (Real Estate Development & Construction), and Burooj Air (Aviation Services &
              Solutions). We provide information about our portfolio companies, investment opportunities, and business
              services through our website and direct communications.
            </p>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Acceptable Use</h2>
            <p>You agree to use our website and services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Use our services for any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>Submit false or misleading information</li>
              <li>Upload or transmit viruses or any other type of malicious code</li>
              <li>Spam, phish, pharm, pretext, spider, crawl, or scrape</li>
            </ul>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Intellectual Property Rights</h2>
            <p>
              The content on our website, including but not limited to text, graphics, logos, images, and software, is
              the property of Naqsh or its content suppliers and is protected by copyright and other intellectual
              property laws. You may not reproduce, distribute, modify, or create derivative works of our content
              without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Investment Disclaimers</h2>
            <p>
              Any information provided on our website regarding investments, portfolio companies, or financial matters
              is for informational purposes only and should not be construed as investment advice. Past performance of
              our portfolio companies does not guarantee future results. All investments carry risk, and you should
              consult with qualified financial advisors before making investment decisions. Information about our
              subsidiaries and their services is provided for general business purposes only.
            </p>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Naqsh shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly
              or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Naqsh and its officers, directors, employees, and agents
              from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your
              use of our website or services.
            </p>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia,
              without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our
              services shall be subject to the exclusive jurisdiction of the courts in Saudi Arabia.
            </p>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
              provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change
              will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <p className="mt-4">
              Email: contact@naqsh.com.sa
              <br />
              Phone: 0535558889
              <br />
              Address: Khobar, Eastern Province, Saudi Arabia
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
