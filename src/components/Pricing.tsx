import React from 'react';
import { Check, X } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 mb-10">
            Choose the plan that's right for you. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {/* Free Plan */}
          <div className="relative p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm flex flex-col transition-colors duration-200">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Free</h3>
              <p className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                <span className="text-5xl font-extrabold tracking-tight">$0</span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 text-gray-500 dark:text-gray-300">Perfect for occasional use and basic conversions.</p>

              {/* Feature List */}
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500 dark:text-green-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">Convert up to 20 images per PDF</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500 dark:text-green-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">Basic quality settings</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500 dark:text-green-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">Standard page sizes</span>
                </li>
                <li className="flex">
                  <X className="flex-shrink-0 w-6 h-6 text-red-500 dark:text-red-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">No batch processing</span>
                </li>
                <li className="flex">
                  <X className="flex-shrink-0 w-6 h-6 text-red-500 dark:text-red-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">No advanced customization</span>
                </li>
              </ul>
            </div>

            <a
              href="#"
              className="mt-8 block w-full bg-gray-100 dark:bg-gray-700 py-3 px-6 border border-transparent rounded-md text-center font-medium text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Pro Plan */}
          <div className="relative p-8 bg-white dark:bg-gray-800 border border-blue-500 dark:border-blue-400 rounded-2xl shadow-sm flex flex-col transition-colors duration-200">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Pro</h3>
              <p className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                <span className="text-5xl font-extrabold tracking-tight">$9.99</span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 text-gray-500 dark:text-gray-300">Perfect for professionals and regular users.</p>

              {/* Feature List */}
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500 dark:text-green-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">Unlimited images per PDF</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500 dark:text-green-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">High quality settings</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500 dark:text-green-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">All page sizes and orientations</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500 dark:text-green-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">Batch processing (up to 10 PDFs)</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500 dark:text-green-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">Advanced customization options</span>
                </li>
              </ul>
            </div>

            <a
              href="#"
              className="mt-8 block w-full bg-blue-600 dark:bg-blue-500 py-3 px-6 border border-transparent rounded-md text-center font-medium text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              Start Free Trial
            </a>
          </div>

          {/* Business Plan */}
          <div className="relative p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm flex flex-col transition-colors duration-200">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Business</h3>
              <p className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                <span className="text-5xl font-extrabold tracking-tight">$24.99</span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 text-gray-500 dark:text-gray-300">For teams and businesses with advanced needs.</p>

              {/* Feature List */}
              <ul role="list" className="mt-6 space-y-6">
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500 dark:text-green-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">Everything in Pro plan</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500 dark:text-green-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">Unlimited batch processing</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500 dark:text-green-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">API access for integration</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500 dark:text-green-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">Priority support</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500 dark:text-green-400" />
                  <span className="ml-3 text-gray-500 dark:text-gray-300">Custom branding options</span>
                </li>
              </ul>
            </div>

            <a
              href="#"
              className="mt-8 block w-full bg-gray-100 dark:bg-gray-700 py-3 px-6 border border-transparent rounded-md text-center font-medium text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            All plans include secure file handling, automatic deletion after processing, and our commitment to privacy. 
            Need a custom solution? <a href="#" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Contact our sales team</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;