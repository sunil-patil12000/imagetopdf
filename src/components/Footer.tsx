const errorMessage = {
  code: 'rate-limited',
  message: 'You have hit the rate limit. Please <a class="__boltUpgradePlan__">Upgrade</a> to keep chatting, or you can continue coding for free in the editor.',
  providerLimitHit: false,
  isRetryable: true
};

const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-800 p-4 mt-auto">
    <div className="max-w-7xl mx-auto text-center text-sm text-gray-600 dark:text-gray-300">
      <p dangerouslySetInnerHTML={{ __html: errorMessage.message }} />
    </div>
  </footer>
);

export default Footer;