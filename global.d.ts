// global.d.ts

type PageMessages = typeof import('./messages/en/page.json');
type ComponentMessages = typeof import('./messages/en/components.json');

// Importing other language files ..

// Create a new type by combining all message types
type Messages = PageMessages & ComponentMessages;

declare interface IntlMessages extends Messages {}
