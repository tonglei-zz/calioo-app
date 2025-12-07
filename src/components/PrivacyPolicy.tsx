import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-brand-600 font-medium mb-8 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>

      <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
          🇺🇸 Calioo Privacy Policy (English Version)
        </h1>
        <p className="text-slate-500 mb-8 font-medium">Last Updated: 2025-12-07</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <div>
            <p className="mb-4">
              Calioo (“we”, “us”) values your privacy. This Privacy Policy explains how we handle your data when you use our app.
            </p>
            <p className="mb-4">
              Calioo follows a <strong>Local-First</strong> design philosophy — your data stays on your device unless you explicitly choose otherwise.
            </p>
            <p>Please read this Policy carefully before using the app.</p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Data We Collect</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">1.1 Local Data (Stored Only on Your Device)</h3>
              <p className="mb-2">Calioo stores the following information on your device:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Notes, entries, and tasks you create</li>
                <li>App settings and preferences</li>
              </ul>
              <p className="mt-2 text-sm text-slate-500 italic">No data is uploaded to any server.</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">1.2 Optional Cloud Sync (If You Enable It)</h3>
              <p className="mb-2">If you choose to enable iCloud, Google Drive, or other cloud services:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Your data is encrypted and stored by the respective cloud provider</li>
                <li>Calioo does not receive, view, or store this data</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">1.3 Basic Device Information</h3>
              <p className="mb-2">To ensure app stability, we may collect:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Anonymous crash logs</li>
                <li>App version, system version, device model</li>
              </ul>
              <p className="mt-2 text-sm text-slate-500 italic">This does not include any personally identifiable information (PII).</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. What We Do NOT Collect</h2>
            <p className="mb-2">Calioo does not collect:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Names, phone numbers, emails, or identity information</li>
              <li>Access to contacts, photos, documents, or other personal files</li>
              <li>Uploads of your notes or content</li>
              <li>Ad tracking or user profiling data</li>
              <li>Any information for sale or sharing with third parties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. How We Use Data</h2>
            <p className="mb-2">We use data only for:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 mb-4">
              <li>Providing core app features</li>
              <li>Improving performance and fixing bugs</li>
              <li>Ensuring app stability</li>
            </ul>
            <p className="font-medium text-slate-900">We never use your data for advertising, analytics, or commercial purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Data Security & Storage</h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Local data is protected by your device’s system-level encryption</li>
              <li>Cloud-synced data is encrypted and stored by your cloud provider</li>
              <li>Calioo does not store sensitive data in plaintext</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Third-Party Services</h2>
            <p className="mb-2">Calioo currently does not use:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 mb-4">
              <li>Advertising services</li>
              <li>Analytics or tracking services</li>
            </ul>
            <p className="text-sm text-slate-500">If online services are added in the future, we will update this Policy beforehand.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>View, edit, and delete your data</li>
              <li>Use Calioo entirely offline</li>
              <li>Remove all local data by uninstalling the app</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Children’s Privacy</h2>
            <p>Calioo is not intended for children under 14 years of age.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">8. Policy Updates</h2>
            <p className="mb-2">We may update this Privacy Policy as needed.</p>
            <p>Significant changes will be communicated via in-app notices.</p>
          </section>

          <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-2">9. Contact Us</h2>
            <p className="mb-1">If you have any questions, please contact:</p>
            <a href="mailto:xxtonglei@gmail.com" className="font-semibold text-brand-600 hover:text-brand-700 transition-colors">
              xxtonglei@gmail.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;