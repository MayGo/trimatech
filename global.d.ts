// global.d.ts

type PageMessages = typeof import('./messages/en/page.json');

// Importing other language files ..

// Create a new type by combining all message types
type Messages = PageMessages;

declare interface IntlMessages extends Messages {}
