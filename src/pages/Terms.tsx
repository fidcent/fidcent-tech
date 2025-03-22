
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/shared/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <SEO 
        title="Terms of Service | Fidcent Tech" 
        description="Read about Fidcent Tech's terms of service and conditions for using our website and services."
        keywords="Fidcent Tech terms of service, terms and conditions, legal terms, service agreement, website usage terms"
      />
      <Navbar />
      <main className="container mx-auto px-4 py-16 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-fidcent-navy dark:text-white">Terms of Service</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            
            <h2>1. Introduction</h2>
            <p>
              Welcome to Fidcent Tech, a division of Fidcent Group (RC 7718433). These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
            </p>
            
            <h2>2. Use of Our Website and Services</h2>
            <p>You agree to use our website and services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use our website or services in any way that violates any applicable law or regulation</li>
              <li>Use our website or services to transmit or upload any material that contains viruses, trojan horses, worms, or any other harmful or destructive programs</li>
              <li>Attempt to gain unauthorized access to any portion of our website or services</li>
              <li>Use our website or services in any manner that could disable, overburden, damage, or impair the site</li>
              <li>Use any robot, spider, or other automatic device to access our website or services</li>
            </ul>
            
            <h2>3. Intellectual Property Rights</h2>
            <p>
              Our website and its content, features, and functionality are owned by Fidcent Tech and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website, except as follows:
            </p>
            <ul>
              <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
              <li>You may store files that are automatically cached by your Web browser for display enhancement purposes</li>
              <li>If we provide desktop, mobile, or other applications for download, you may download a single copy to your computer or mobile device solely for your own personal, non-commercial use</li>
            </ul>
            
            <h2>4. User Contributions</h2>
            <p>
              Our website may contain message boards, chat rooms, personal profiles, forums, or other interactive features that allow users to post, submit, publish, display, or transmit content or materials. All User Contributions must comply with the Content Standards set out in these Terms.
            </p>
            
            <h2>5. Service Agreements</h2>
            <p>
              Any service agreements entered into between Fidcent Tech and clients shall be governed by separate contracts. These Terms do not constitute a service agreement.
            </p>
            
            <h2>6. Limitation of Liability</h2>
            <p>
              In no event will Fidcent Tech, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, including without limitation, direct, indirect, special, incidental, consequential, or punitive damages, arising out of or in connection with your use of our website or services.
            </p>
            
            <h2>7. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Fidcent Tech, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the website.
            </p>
            
            <h2>8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without giving effect to any principles of conflicts of law.
            </p>
            
            <h2>9. Changes to Terms</h2>
            <p>
              We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when we post them. Your continued use of the website following the posting of revised Terms means that you accept and agree to the changes.
            </p>
            
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
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

export default Terms;
