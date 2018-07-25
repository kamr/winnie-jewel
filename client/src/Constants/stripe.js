const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_zgUxPsuel1lgED4695WkRu7q';

export default STRIPE_PUBLISHABLE;
