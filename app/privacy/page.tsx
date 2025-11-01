import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

const siteUrl = process.env.SITE_URL || 'https://perfect-prompt-seven.vercel.app';

export const metadata: Metadata = {
  title: 'Privacy Policy | Perfect Prompt',
  description: 'Privacy Policy for Perfect Prompt - AI Prompt Generator. Learn how we collect, use, and protect your data.',
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  return (
    <>
      {/* AdSense Script - Only on pages with sufficient content */}
      {adsenseClient && (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}
      <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-md bg-white/5">
        <div className="container-custom py-4">
          <Link href="/" className="text-2xl font-bold text-white hover:text-secondary transition-colors">
            ⚡ Perfect Prompt
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="card space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
              <p className="text-white/70">Last Updated: October 19, 2025</p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
              <p className="text-white/80 leading-relaxed">
                Welcome to Perfect Prompt ("we," "our," or "us"). We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your information. This Privacy Policy explains our practices regarding data collection and usage when you use our AI prompt generator service at{' '}
                <a href={siteUrl} className="text-secondary hover:underline">
                  {siteUrl}
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
              <div className="space-y-3 text-white/80">
                <h3 className="text-xl font-semibold text-white">2.1 Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Prompt Topics:</strong> The text you enter to generate AI prompts</li>
                  <li><strong>Language Preference:</strong> Your selected language (English or Arabic)</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-4">2.2 Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Usage Data:</strong> Pages visited, time spent, interactions with features</li>
                  <li><strong>Device Information:</strong> Browser type, device type, operating system</li>
                  <li><strong>IP Address:</strong> For analytics and security purposes</li>
                  <li><strong>Cookies:</strong> For functionality and analytics (see Cookie Policy below)</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/80">
                <li>To provide and improve our AI prompt generation service</li>
                <li>To process your requests through OpenAI's API</li>
                <li>To analyze usage patterns and optimize user experience</li>
                <li>To maintain security and prevent abuse</li>
                <li>To display relevant advertisements (via Google AdSense)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Third-Party Services</h2>
              <p className="text-white/80 leading-relaxed">
                We use the following third-party services that may collect and process your data:
              </p>

              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">4.1 OpenAI</h3>
                  <p className="text-white/80">
                    We use OpenAI's API to generate AI prompts. Your input text is sent to OpenAI for processing. OpenAI's data usage policies apply. Learn more:{' '}
                    <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                      OpenAI Privacy Policy
                    </a>
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">4.2 Google Analytics</h3>
                  <p className="text-white/80">
                    We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to collect anonymous usage data. Learn more:{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                      Google Privacy Policy
                    </a>
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">4.3 Google AdSense</h3>
                  <p className="text-white/80">
                    We use Google AdSense to display advertisements. Google uses cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting{' '}
                    <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                      Google Ads Settings
                    </a>
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">4.4 Vercel (Hosting)</h3>
                  <p className="text-white/80">
                    Our website is hosted on Vercel, which may collect server logs and performance data. Learn more:{' '}
                    <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                      Vercel Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Cookies</h2>
              <p className="text-white/80 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience. Types of cookies we use:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/80">
                <li><strong>Essential Cookies:</strong> Required for basic site functionality (language preference)</li>
                <li><strong>Analytics Cookies:</strong> Google Analytics for usage statistics</li>
                <li><strong>Advertising Cookies:</strong> Google AdSense for personalized ads</li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-3">
                You can control cookies through your browser settings. Note that disabling cookies may limit site functionality.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. Data Security</h2>
              <p className="text-white/80 leading-relaxed">
                We implement industry-standard security measures to protect your data, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/80">
                <li>HTTPS encryption for all data transmission</li>
                <li>Secure API connections to third-party services</li>
                <li>Regular security audits and updates</li>
                <li>Limited data retention (prompts are not stored permanently)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">7. Data Retention</h2>
              <p className="text-white/80 leading-relaxed">
                We do not permanently store the prompts you generate. Data is only temporarily processed to provide the service. Analytics data is retained according to Google Analytics' retention policies (typically 14-50 months, configurable).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">8. Your Rights</h2>
              <p className="text-white/80 leading-relaxed">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/80">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your data</li>
                <li><strong>Opt-Out:</strong> Opt out of personalized advertising</li>
                <li><strong>Data Portability:</strong> Request your data in a portable format</li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-3">
                To exercise these rights, contact us at:{' '}
                <a href="mailto:darkside944@gmail.com" className="text-secondary hover:underline">
                  darkside944@gmail.com
                </a>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">9. International Users</h2>
              <p className="text-white/80 leading-relaxed">
                Our service is operated from Kuwait and hosted globally via Vercel's CDN. If you access our service from outside Kuwait, your data may be transferred to and processed in countries with different data protection laws. By using our service, you consent to this transfer.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">10. Children's Privacy</h2>
              <p className="text-white/80 leading-relaxed">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">11. Changes to This Policy</h2>
              <p className="text-white/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">12. Contact Us</h2>
              <p className="text-white/80 leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                <p className="text-white/90">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:darkside944@gmail.com" className="text-secondary hover:underline">
                    darkside944@gmail.com
                  </a>
                </p>
                <p className="text-white/90">
                  <strong>Website:</strong>{' '}
                  <a href={siteUrl} className="text-secondary hover:underline">
                    {siteUrl}
                  </a>
                </p>
                <p className="text-white/90">
                  <strong>Organization:</strong> KW.HADES - Creative Labs
                </p>
                <p className="text-white/90">
                  <strong>Location:</strong> Kuwait 🇰🇼
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">13. GDPR Compliance (EU Users)</h2>
              <p className="text-white/80 leading-relaxed">
                If you are located in the European Economic Area (EEA), we comply with GDPR requirements:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/80">
                <li><strong>Legal Basis:</strong> We process data based on your consent and legitimate interests</li>
                <li><strong>Data Protection Officer:</strong> For GDPR inquiries, contact darkside944@gmail.com</li>
                <li><strong>Right to Complain:</strong> You can lodge a complaint with your local data protection authority</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">14. California Privacy Rights (CCPA)</h2>
              <p className="text-white/80 leading-relaxed">
                California residents have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/80">
                <li>Right to know what personal information is collected</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the sale of personal information (we do not sell your data)</li>
                <li>Right to non-discrimination for exercising CCPA rights</li>
              </ul>
            </section>

            <div className="pt-8 border-t border-white/10">
              <Link href="/" className="btn-primary inline-block">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 backdrop-blur-md bg-white/5 mt-20">
        <div className="container-custom py-8">
          <div className="text-center text-white/60 text-sm">
            <p>© 2025 Perfect Prompt - Built by KW.HADES - Creative Labs</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

