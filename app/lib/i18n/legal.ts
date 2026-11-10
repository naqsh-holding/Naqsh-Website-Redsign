import type { Locale } from "./dictionaries"

export type LegalBlock = { p: string } | { h3: string } | { ul: string[] }
export type LegalSection = { title: string; blocks: LegalBlock[] }
export type LegalDoc = { title: string; sections: LegalSection[] }

const COMPANIES_EN =
  "6 Degrees Technologies, Efficiency Center Business Inc., Promotion Efficiency for Advertising, Burooj, Burooj Air"
const COMPANIES_AR =
  "6 Degrees Technologies، ومركز الكفاءة للأعمال، وترويج الكفاءة للدعاية والإعلان، وبروج، وبروج للطيران"

const CONTACT_EN = "Email: contact@naqsh.com.sa\nPhone: +966 53 555 8889\nAddress: Khobar, Eastern Province, Saudi Arabia"
const CONTACT_AR =
  "البريد الإلكتروني: contact@naqsh.com.sa\nالهاتف: ‎+966 53 555 8889\nالعنوان: الخبر، المنطقة الشرقية، المملكة العربية السعودية"

export const privacyPolicy: Record<Locale, LegalDoc> = {
  en: {
    title: "Privacy Policy",
    sections: [
      {
        title: "Introduction",
        blocks: [
          {
            p: 'Naqsh Holding Company ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, interact with our portfolio companies, or engage with our investment and business services.',
          },
          {
            p: "Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our website or engage with our services.",
          },
        ],
      },
      {
        title: "Information We Collect",
        blocks: [
          { h3: "Personal Information" },
          { p: "We may collect personal information that you voluntarily provide to us when you:" },
          {
            ul: [
              "Contact us through our website, email, or phone for investment inquiries",
              "Request information about our portfolio companies or investment opportunities",
              "Apply for business incubation or co-working spaces",
              "Engage with our marketing, real estate, or aviation services",
              "Subscribe to our newsletter or business communications",
              "Participate in surveys, feedback forms, or business consultations",
            ],
          },
          { h3: "Automatically Collected Information" },
          {
            p: "When you visit our website, we may automatically collect certain information about your device and usage patterns, including:",
          },
          {
            ul: [
              "IP address and location data",
              "Browser type and version",
              "Operating system",
              "Pages visited and time spent on our website",
              "Referring website addresses",
              "Device information and screen resolution",
              "Interaction with our portfolio company pages",
            ],
          },
        ],
      },
      {
        title: "How We Use Your Information",
        blocks: [
          { p: "We use the information we collect for various purposes, including:" },
          {
            ul: [
              "Providing investment information and portfolio company details",
              "Responding to business inquiries and investment opportunities",
              "Managing business incubation and co-working space applications",
              "Processing requests for marketing, real estate, or aviation services",
              "Sending business newsletters and investment updates (with your consent)",
              "Improving our website and portfolio company presentations",
              "Analyzing website usage to enhance user experience",
              "Complying with legal and regulatory obligations",
              "Facilitating partnerships and business collaborations",
            ],
          },
        ],
      },
      {
        title: "Information Sharing and Disclosure",
        blocks: [
          {
            p: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:",
          },
          {
            ul: [
              `With our portfolio companies (${COMPANIES_EN}) for business purposes`,
              "With service providers who assist us in operating our website and conducting our investment activities",
              "When required by law or to protect our rights and safety",
              "In connection with investment activities, mergers, acquisitions, or sale of assets",
              "With your explicit consent",
              "With potential business partners or investors (with your consent)",
            ],
          },
        ],
      },
      {
        title: "Data Security",
        blocks: [
          {
            p: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
          },
        ],
      },
      {
        title: "Your Rights and Choices",
        blocks: [
          { p: "You have certain rights regarding your personal information, including:" },
          {
            ul: [
              "The right to access and receive a copy of your personal information",
              "The right to rectify or update your personal information",
              "The right to delete your personal information",
              "The right to restrict or object to processing of your personal information",
              "The right to withdraw consent for marketing communications",
              "The right to lodge a complaint with relevant data protection authorities",
            ],
          },
        ],
      },
      {
        title: "Cookies and Tracking Technologies",
        blocks: [
          {
            p: "We use cookies and similar tracking technologies to enhance your experience on our website, analyze usage patterns, and provide personalized content. You can control cookie settings through your browser preferences.",
          },
        ],
      },
      {
        title: "Third-Party Links",
        blocks: [
          {
            p: "Our website may contain links to third-party websites, including our portfolio companies. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.",
          },
        ],
      },
      {
        title: "Children's Privacy",
        blocks: [
          {
            p: "Our website and services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child under 18, please contact us immediately.",
          },
        ],
      },
      {
        title: "Changes to This Privacy Policy",
        blocks: [
          {
            p: 'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy on our website and updating the "Last updated" date.',
          },
        ],
      },
      {
        title: "Contact Us",
        blocks: [
          { p: "If you have any questions about this Privacy Policy or our privacy practices, please contact us at:" },
          { p: CONTACT_EN },
        ],
      },
    ],
  },
  ar: {
    title: "سياسة الخصوصية",
    sections: [
      {
        title: "مقدمة",
        blocks: [
          {
            p: "تلتزم شركة نقش القابضة («نحن» أو «لنا») بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمعنا لمعلوماتك واستخدامها والإفصاح عنها وحمايتها عند زيارتك لموقعنا الإلكتروني أو تعاملك مع شركاتنا التابعة أو استفادتك من خدماتنا الاستثمارية والتجارية.",
          },
          {
            p: "يرجى قراءة سياسة الخصوصية هذه بعناية. إذا كنت لا توافق على شروطها، فيرجى عدم استخدام موقعنا أو خدماتنا.",
          },
        ],
      },
      {
        title: "المعلومات التي نجمعها",
        blocks: [
          { h3: "المعلومات الشخصية" },
          { p: "قد نجمع معلومات شخصية تقدمها لنا طوعًا عندما:" },
          {
            ul: [
              "تتواصل معنا عبر الموقع أو البريد الإلكتروني أو الهاتف بخصوص استفسارات استثمارية",
              "تطلب معلومات عن شركاتنا التابعة أو الفرص الاستثمارية",
              "تتقدم بطلب للانضمام إلى حاضنات الأعمال أو مساحات العمل المشتركة",
              "تستفيد من خدماتنا في التسويق أو العقارات أو الطيران",
              "تشترك في نشرتنا الإخبارية أو مراسلاتنا التجارية",
              "تشارك في الاستبيانات أو نماذج الملاحظات أو الاستشارات التجارية",
            ],
          },
          { h3: "المعلومات التي تُجمع تلقائيًا" },
          { p: "عند زيارتك لموقعنا، قد نجمع تلقائيًا بعض المعلومات عن جهازك وأنماط استخدامك، ومنها:" },
          {
            ul: [
              "عنوان IP وبيانات الموقع",
              "نوع المتصفح وإصداره",
              "نظام التشغيل",
              "الصفحات التي تزورها والوقت الذي تقضيه في موقعنا",
              "عناوين المواقع التي أحالتك إلينا",
              "معلومات الجهاز ودقة الشاشة",
              "تفاعلك مع صفحات شركاتنا التابعة",
            ],
          },
        ],
      },
      {
        title: "كيف نستخدم معلوماتك",
        blocks: [
          { p: "نستخدم المعلومات التي نجمعها لأغراض متعددة، منها:" },
          {
            ul: [
              "تقديم المعلومات الاستثمارية وتفاصيل شركاتنا التابعة",
              "الرد على الاستفسارات التجارية والفرص الاستثمارية",
              "إدارة طلبات حاضنات الأعمال ومساحات العمل المشتركة",
              "معالجة طلبات خدمات التسويق أو العقارات أو الطيران",
              "إرسال النشرات التجارية وتحديثات الاستثمار (بموافقتك)",
              "تحسين موقعنا وطريقة عرض شركاتنا التابعة",
              "تحليل استخدام الموقع لتحسين تجربة المستخدم",
              "الالتزام بالمتطلبات النظامية والتنظيمية",
              "تسهيل الشراكات والتعاون التجاري",
            ],
          },
        ],
      },
      {
        title: "مشاركة المعلومات والإفصاح عنها",
        blocks: [
          { p: "لا نبيع معلوماتك الشخصية أو نتاجر بها أو ننقلها إلى أطراف ثالثة دون موافقتك، إلا في الحالات التالية:" },
          {
            ul: [
              `مع شركاتنا التابعة (${COMPANIES_AR}) لأغراض تجارية`,
              "مع مزودي الخدمات الذين يساعدوننا في تشغيل موقعنا وممارسة أنشطتنا الاستثمارية",
              "عندما يقتضي النظام ذلك أو لحماية حقوقنا وسلامتنا",
              "فيما يتعلق بالأنشطة الاستثمارية أو عمليات الاندماج أو الاستحواذ أو بيع الأصول",
              "بموافقتك الصريحة",
              "مع شركاء الأعمال أو المستثمرين المحتملين (بموافقتك)",
            ],
          },
        ],
      },
      {
        title: "أمن البيانات",
        blocks: [
          {
            p: "نطبق تدابير أمنية تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. ومع ذلك، لا توجد وسيلة نقل عبر الإنترنت أو تخزين إلكتروني آمنة بنسبة 100%، ولا يمكننا ضمان الأمان المطلق.",
          },
        ],
      },
      {
        title: "حقوقك وخياراتك",
        blocks: [
          { p: "لديك حقوق معينة فيما يتعلق بمعلوماتك الشخصية، منها:" },
          {
            ul: [
              "الحق في الوصول إلى معلوماتك الشخصية والحصول على نسخة منها",
              "الحق في تصحيح معلوماتك الشخصية أو تحديثها",
              "الحق في حذف معلوماتك الشخصية",
              "الحق في تقييد معالجة معلوماتك الشخصية أو الاعتراض عليها",
              "الحق في سحب موافقتك على المراسلات التسويقية",
              "الحق في تقديم شكوى إلى الجهات المختصة بحماية البيانات",
            ],
          },
        ],
      },
      {
        title: "ملفات تعريف الارتباط وتقنيات التتبع",
        blocks: [
          {
            p: "نستخدم ملفات تعريف الارتباط (الكوكيز) وتقنيات تتبع مشابهة لتحسين تجربتك في موقعنا وتحليل أنماط الاستخدام وتقديم محتوى مخصص. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال إعدادات متصفحك.",
          },
        ],
      },
      {
        title: "روابط الأطراف الثالثة",
        blocks: [
          {
            p: "قد يحتوي موقعنا على روابط لمواقع أطراف ثالثة، بما فيها مواقع شركاتنا التابعة. لسنا مسؤولين عن ممارسات الخصوصية أو محتوى هذه المواقع الخارجية، وننصحك بمراجعة سياسات الخصوصية الخاصة بها قبل تقديم أي معلومات شخصية.",
          },
        ],
      },
      {
        title: "خصوصية الأطفال",
        blocks: [
          {
            p: "موقعنا وخدماتنا غير موجهة لمن هم دون 18 عامًا، ولا نجمع عن علم معلومات شخصية منهم. إذا كنت تعتقد أننا جمعنا معلومات من شخص دون 18 عامًا، فيرجى التواصل معنا فورًا.",
          },
        ],
      },
      {
        title: "التغييرات على سياسة الخصوصية",
        blocks: [
          {
            p: "قد نحدّث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو لأسباب تشغيلية أو نظامية أو تنظيمية أخرى. وسنُعلمك بأي تغييرات جوهرية بنشر السياسة المحدّثة على موقعنا وتحديث تاريخ «آخر تحديث».",
          },
        ],
      },
      {
        title: "تواصل معنا",
        blocks: [
          { p: "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارساتنا المتعلقة بالخصوصية، يرجى التواصل معنا عبر:" },
          { p: CONTACT_AR },
        ],
      },
    ],
  },
}

export const termsOfService: Record<Locale, LegalDoc> = {
  en: {
    title: "Terms of Service",
    sections: [
      {
        title: "Agreement to Terms",
        blocks: [
          {
            p: 'These Terms of Service ("Terms") govern your use of Naqsh Holding Company\'s website and services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these Terms, then you may not access our website or use our services.',
          },
        ],
      },
      {
        title: "Description of Services",
        blocks: [
          {
            p: "Naqsh Holding Company is an investment leader that owns and operates five diverse companies across multiple sectors: 6 Degrees Technologies (Technology & Smart Solutions), Efficiency Center Business Inc. (Business Incubation & Co-working), Promotion Efficiency for Advertising (Marketing & Creative Production), Burooj (Real Estate Development & Construction), and Burooj Air (Aviation Services & Solutions). We provide information about our portfolio companies, investment opportunities, and business services through our website and direct communications.",
          },
        ],
      },
      {
        title: "Acceptable Use",
        blocks: [
          {
            p: "You agree to use our website and services only for lawful purposes and in accordance with these Terms. You agree not to:",
          },
          {
            ul: [
              "Use our services for any unlawful purpose or to solicit others to perform unlawful acts",
              "Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances",
              "Infringe upon or violate our intellectual property rights or the intellectual property rights of others",
              "Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate",
              "Submit false or misleading information",
              "Upload or transmit viruses or any other type of malicious code",
              "Spam, phish, pharm, pretext, spider, crawl, or scrape",
            ],
          },
        ],
      },
      {
        title: "Intellectual Property Rights",
        blocks: [
          {
            p: "The content on our website, including but not limited to text, graphics, logos, images, and software, is the property of Naqsh or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of our content without our express written permission.",
          },
        ],
      },
      {
        title: "Investment Disclaimers",
        blocks: [
          {
            p: "Any information provided on our website regarding investments, portfolio companies, or financial matters is for informational purposes only and should not be construed as investment advice. Past performance of our portfolio companies does not guarantee future results. All investments carry risk, and you should consult with qualified financial advisors before making investment decisions. Information about our subsidiaries and their services is provided for general business purposes only.",
          },
        ],
      },
      {
        title: "Limitation of Liability",
        blocks: [
          {
            p: "To the fullest extent permitted by applicable law, Naqsh shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.",
          },
        ],
      },
      {
        title: "Indemnification",
        blocks: [
          {
            p: "You agree to defend, indemnify, and hold harmless Naqsh and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of our website or services.",
          },
        ],
      },
      {
        title: "Governing Law",
        blocks: [
          {
            p: "These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in Saudi Arabia.",
          },
        ],
      },
      {
        title: "Changes to Terms",
        blocks: [
          {
            p: "We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
          },
        ],
      },
      {
        title: "Contact Information",
        blocks: [{ p: "If you have any questions about these Terms of Service, please contact us:" }, { p: CONTACT_EN }],
      },
    ],
  },
  ar: {
    title: "شروط الخدمة",
    sections: [
      {
        title: "الموافقة على الشروط",
        blocks: [
          {
            p: "تحكم شروط الخدمة هذه («الشروط») استخدامك لموقع شركة نقش القابضة الإلكتروني وخدماتها. باستخدامك لموقعنا أو الدخول إليه، فإنك توافق على الالتزام بهذه الشروط. وإذا كنت لا توافق على أي جزء منها، فلا يحق لك استخدام موقعنا أو خدماتنا.",
          },
        ],
      },
      {
        title: "وصف الخدمات",
        blocks: [
          {
            p: "شركة نقش القابضة شركة استثمار رائدة تمتلك وتدير خمس شركات متنوعة في عدة قطاعات: 6 Degrees Technologies (التقنية والحلول الذكية)، ومركز الكفاءة للأعمال (حاضنات الأعمال ومساحات العمل المشتركة)، وترويج الكفاءة للدعاية والإعلان (التسويق والإنتاج الإبداعي)، وبروج (التطوير العقاري والمقاولات)، وبروج للطيران (خدمات وحلول الطيران). ونقدم معلومات عن شركاتنا التابعة والفرص الاستثمارية والخدمات التجارية عبر موقعنا ومراسلاتنا المباشرة.",
          },
        ],
      },
      {
        title: "الاستخدام المقبول",
        blocks: [
          { p: "توافق على استخدام موقعنا وخدماتنا للأغراض المشروعة فقط ووفقًا لهذه الشروط، وتوافق على عدم:" },
          {
            ul: [
              "استخدام خدماتنا لأي غرض غير مشروع أو لحث الآخرين على القيام بأعمال غير مشروعة",
              "مخالفة أي أنظمة أو لوائح أو قوانين محلية أو دولية",
              "التعدي على حقوق الملكية الفكرية الخاصة بنا أو بالآخرين",
              "المضايقة أو الإساءة أو الإهانة أو الإضرار أو التشهير أو التخويف أو التمييز",
              "تقديم معلومات كاذبة أو مضللة",
              "رفع أو نقل الفيروسات أو أي نوع من البرمجيات الضارة",
              "إرسال الرسائل المزعجة أو التصيد الاحتيالي أو الزحف الآلي أو استخراج البيانات من الموقع",
            ],
          },
        ],
      },
      {
        title: "حقوق الملكية الفكرية",
        blocks: [
          {
            p: "جميع محتويات موقعنا، بما في ذلك على سبيل المثال لا الحصر النصوص والرسومات والشعارات والصور والبرمجيات، مملوكة لنقش أو لمزودي المحتوى لديها ومحمية بموجب أنظمة حقوق المؤلف والملكية الفكرية. ولا يجوز لك نسخ محتوانا أو توزيعه أو تعديله أو إنشاء أعمال مشتقة منه دون إذن كتابي صريح منا.",
          },
        ],
      },
      {
        title: "إخلاء المسؤولية الاستثمارية",
        blocks: [
          {
            p: "أي معلومات يقدمها موقعنا بشأن الاستثمارات أو الشركات التابعة أو المسائل المالية هي لأغراض إعلامية فقط ولا تُعد نصيحة استثمارية. ولا يضمن الأداء السابق لشركاتنا التابعة النتائج المستقبلية. جميع الاستثمارات تنطوي على مخاطر، وينبغي لك استشارة مستشارين ماليين مؤهلين قبل اتخاذ أي قرار استثماري. والمعلومات المتعلقة بشركاتنا التابعة وخدماتها مقدمة لأغراض تجارية عامة فقط.",
          },
        ],
      },
      {
        title: "حدود المسؤولية",
        blocks: [
          {
            p: "إلى أقصى حد يسمح به النظام المعمول به، لا تتحمل نقش أي مسؤولية عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، أو أي خسارة في الأرباح أو الإيرادات، سواء كانت مباشرة أو غير مباشرة، أو أي خسارة في البيانات أو الاستخدام أو السمعة أو غيرها من الخسائر غير الملموسة.",
          },
        ],
      },
      {
        title: "التعويض",
        blocks: [
          {
            p: "توافق على الدفاع عن نقش ومسؤوليها ومديريها وموظفيها ووكلائها وتعويضهم وإبراء ذمتهم من أي مطالبات أو أضرار أو التزامات أو خسائر أو تكاليف أو ديون تنشأ عن استخدامك لموقعنا أو خدماتنا.",
          },
        ],
      },
      {
        title: "النظام الحاكم",
        blocks: [
          {
            p: "تخضع هذه الشروط وتُفسَّر وفقًا لأنظمة المملكة العربية السعودية، دون اعتبار لقواعد تنازع القوانين. وتختص محاكم المملكة العربية السعودية حصريًا بالنظر في أي نزاع ينشأ عن هذه الشروط أو عن استخدامك لخدماتنا.",
          },
        ],
      },
      {
        title: "التغييرات على الشروط",
        blocks: [
          {
            p: "نحتفظ بالحق في تعديل هذه الشروط أو استبدالها في أي وقت. وإذا كان التعديل جوهريًا، فسنقدم إشعارًا قبل 30 يومًا على الأقل من سريان الشروط الجديدة. ويعود لنا وحدنا تحديد ما يُعد تعديلًا جوهريًا.",
          },
        ],
      },
      {
        title: "معلومات التواصل",
        blocks: [{ p: "إذا كانت لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:" }, { p: CONTACT_AR }],
      },
    ],
  },
}
