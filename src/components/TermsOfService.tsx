import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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
          🇺🇸 Calioo Terms of Service (English Version)
        </h1>
        <p className="text-slate-500 mb-8 font-medium">Last Updated: 2025-12-07</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <div>
            <p className="mb-4">
              Welcome to Calioo! Please read these Terms of Service carefully before using the app.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Service Description</h2>
            <p className="mb-2">Calioo provides:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 mb-4">
              <li>Minimal, fast note-taking and management</li>
              <li>Local-first data storage</li>
              <li>Optional cloud syncing (if you enable it)</li>
            </ul>
            <p>We may update or modify features to improve the product.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. User Responsibilities</h2>
            <p className="mb-2">By using Calioo, you agree that you will not:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Use the app to store or distribute illegal content</li>
              <li>Reverse-engineer, hack, or attack the app</li>
              <li>Hold us liable for your own backup or sync choices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Data & Privacy</h2>
            <p>Your data is protected under our Privacy Policy.</p>
            <p>By continuing to use Calioo, you agree to that Policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Software Updates</h2>
            <p>We may provide updates to improve security and performance.</p>
            <p>Certain features may not function on older versions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Disclaimer</h2>
            <p className="mb-2">You understand and agree that:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Calioo is provided “as is,” without warranties</li>
              <li>We are not responsible for issues caused by third-party cloud services</li>
              <li>We will do our best to ensure stability but cannot guarantee 100% reliability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Termination</h2>
            <p>You may stop using the app at any time.</p>
            <p>We may suspend service if you violate the Terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p>These Terms are governed by the laws of the People’s Republic of China.</p>
          </section>

          <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-2">8. Contact Us</h2>
            <p className="mb-1">If you have questions, please contact:</p>
            <a href="mailto:xxtonglei@gmail.com" className="font-semibold text-brand-600 hover:text-brand-700 transition-colors">
              xxtonglei@gmail.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;