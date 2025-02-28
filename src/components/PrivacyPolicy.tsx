import React from 'react';

export const PrivacyPolicy = () => (
  <div className="max-w-4xl mx-auto p-6 prose">
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
      <p>We only collect:</p>
      <ul className="list-disc pl-6">
        <li>Uploaded images temporarily during conversion</li>
        <li>Anonymous usage statistics (opt-out available)</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
      <p>We use cookies for:</p>
      <ul className="list-disc pl-6">
        <li>Essential site functionality</li>
        <li>Anonymous analytics (Google Analytics)</li>
      </ul>
    </section>

    {{ ... remaining sections ... }}
  </div>
);
