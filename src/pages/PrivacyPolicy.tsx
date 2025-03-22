
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/shared/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <SEO 
        title="Privacy Policy | Fidcent Tech" 
        description="Read about Fidcent Tech's privacy policy, how we collect, use, and protect your personal information."
        keywords="Fidcent Tech privacy policy, data protection, personal information, GDPR, privacy rights, information security"
      />
      <Navbar />
      <main className="container mx-auto px-4 py-16 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-fidcent-navy dark:text-white">Privacy Policy</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h2>1. Introduction</h2>
            <p>
              Fidcent Tech ("we", "our", or "us"), a division of Fidcent Group (RC 7718433), is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways, including:</p>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information when you contact us through our website, sign up for our newsletter, or request our services.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and other diagnostic data.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve your experience.</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>We may use the information we collect from you for the following purposes:</p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our website and services</li>
              <li>To monitor the usage of our website</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To communicate with you about products, services, and events</li>
            </ul>
            
            <h2>4. Disclosure of Your Information</h2>
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Third-party companies and individuals that provide services on our behalf</li>
              <li><strong>Business Partners:</strong> Trusted partners who help us provide or improve our services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
            
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2>6. Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your data:</p>
            <ul>
              <li>The right to access your personal data</li>
              <li>The right to rectify inaccurate personal data</li>
              <li>The right to erasure of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal data</li>
            </ul>
            
            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.
            </p>
            
            <h2>8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li>Email: <a href="mailto:info@tech.fidcent.com" className="text-fidcent-green hover:underline">info@tech.fidcent.com</a></li>
              <li>Phone: <a href="tel:+2348165131008" className="text-fidcent-green hover:underline">+234 816 513 1008</a></li>
              <li>Address: 16, Feenas Street, Adj mast, Ibafo, Ogun State, Nigeria</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
