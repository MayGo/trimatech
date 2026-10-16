import { Button } from '@/components/ui/button';
import { LocaleLink as Link } from '@/components/LocaleLink';
import type { ReactNode } from 'react';
import { LuArrowUpRight } from 'react-icons/lu';

type Target =
    | { readonly kind: 'external'; readonly href: string }
    | { readonly kind: 'internal'; readonly href: string };

type Props = {
    target: Target;
    icon: ReactNode;
    children: ReactNode;
    primary?: boolean;
};

/** Call-to-action used on detail pages. External targets open in a new tab and show the arrow. */
export const ActionButton = ({ target, icon, children, primary = false }: Props) => {
    const styling = primary
        ? { colorPalette: 'blue' as const }
        : { variant: 'outline' as const, borderColor: 'lineStrong', _hover: { bg: 'surfaceRaised' } };

    if (target.kind === 'external') {
        return (
            <Button asChild {...styling}>
                <a href={target.href} target="_blank" rel="noreferrer">
                    {icon}
                    {children}
                    <LuArrowUpRight />
                </a>
            </Button>
        );
    }

    return (
        <Button asChild {...styling}>
            <Link href={target.href}>
                {icon}
                {children}
            </Link>
        </Button>
    );
};
