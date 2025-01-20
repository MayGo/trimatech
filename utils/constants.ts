// const PRODUCT_LINK_LIVE = 'https://buy.stripe.com/9AQ3ct0qHbUmb0Q9AA';
// const PRODUCT_LINK_DEV = 'https://buy.stripe.com/test_9AQ8zd9MhbIy4Zq4gg';

// const LOGIN_LINK_LIVE = 'https://billing.stripe.com/p/login/14k3f45bb5mCdUc5kk';
// const LOGIN_LINK_TEST = 'https://billing.stripe.com/p/login/test_6oEeX05b3clJac07ss';

export const PRODUCT_LINK = process?.env?.NEXT_PUBLIC_PRODUCT_LINK || '';
export const LOGIN_LINK = process?.env?.NEXT_PUBLIC_LOGIN_LINK || '';
