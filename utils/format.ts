/** 22236 -> "22K", 1234567 -> "1.2M". Locale-aware. */
export const formatCompact = (value: number, locale: string): string =>
    new Intl.NumberFormat(locale, { notation: 'compact', maximumFractionDigits: 1 }).format(value);
