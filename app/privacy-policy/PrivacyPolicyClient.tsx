import Navigation from "../components/layout/Navigation"
import Footer from "../components/sections/Footer"

export default function PrivacyPolicyClient() {
  const updated = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navigation forceStyle="white" />
      <main id="main" className="site-wrap max-w-3xl pb-24 pt-32 md:pt-40">
        <p className="label">Legal</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,5vw,4.2rem)]">Privacy Policy</h1>
        <p className="mt-4 text-mute">Last updated: {updated}</p>

        <div className="legal-copy mt-16 space-y-12 text-[1.05rem] leading-relaxed text-ink/80">
          <section>
            <h2 className="display mb-4 text-3xl text-ink">Introduction</h2>
            <p>
              Naqsh Holding Company (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you visit our website, interact with our portfolio companies, or engage with our investment and business
              services.
            </p>
            <p className="mt-4">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
              please do not access our website or engage with our services.
            </p>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Information We Collect</h2>
            <h3 className="mb-2 text-xl text-ink">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Contact us through our website, email, or phone for investment inquiries</li>
              <li>Request information about our portfolio companies or investment opportunities</li>
              <li>Apply for business incubation or co-working spaces</li>
              <li>Engage with our marketing, real estate, or aviation services</li>
              <li>Subscribe to our newsletter or business communications</li>
              <li>Participate in surveys, feedback forms, or business consultations</li>
            </ul>
            <h3 className="mb-2 mt-8 text-xl text-ink">Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information about your device and usage patterns, including:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
              <li>Device information and screen resolution</li>
              <li>Interaction with our portfolio company pages</li>
            </ul>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Providing investment information and portfolio company details</li>
              <li>Responding to business inquiries and investment opportunities</li>
              <li>Managing business incubation and co-working space applications</li>
              <li>Processing requests for marketing, real estate, or aviation services</li>
              <li>Sending business newsletters and investment updates (with your consent)</li>
              <li>Improving our website and portfolio company presentations</li>
              <li>Analyzing website usage to enhance user experience</li>
              <li>Complying with legal and regulatory obligations</li>
              <li>Facilitating partnerships and business collaborations</li>
            </ul>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent, except in the following circumstances:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                With our portfolio companies (6 Degrees Technologies, Efficiency Center Business Inc., Promotion
                Efficiency for Advertising, Burooj, Burooj Air) for business purposes
              </li>
              <li>With service providers who assist us in operating our website and conducting our investment activities</li>
              <li>When required by law or to protect our rights and safety</li>
              <li>In connection with investment activities, mergers, acquisitions, or sale of assets</li>
              <li>With your explicit consent</li>
              <li>With potential business partners or investors (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Your Rights and Choices</h2>
            <p>You have certain rights regarding your personal information, including:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to rectify or update your personal information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict or object to processing of your personal information</li>
              <li>The right to withdraw consent for marketing communications</li>
              <li>The right to lodge a complaint with relevant data protection authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage
              patterns, and provide personalized content. You can control cookie settings through your browser
              preferences.
            </p>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites, including our portfolio companies. We are not
              responsible for the privacy practices or content of these external sites. We encourage you to review their
              privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Children&apos;s Privacy</h2>
            <p>
              Our website and services are not intended for children under the age of 18. We do not knowingly collect
              personal information from children under 18. If you believe we have collected information from a child
              under 18, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
              updated Privacy Policy on our website and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="display mb-4 text-3xl text-ink">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
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
