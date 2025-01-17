'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toaster } from '@/components/ui/Toaster';

export function ParamsToaster() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const status = searchParams.get('status');
        const status_description = searchParams.get('status_description');
        const error = searchParams.get('error');
        const error_description = searchParams.get('error_description');
        if (error || status) {
            toaster.create({
                title: error ? error ?? 'Hmm... Something went wrong.' : status ?? 'Alright!',
                description: error ? error_description : status_description
            });
            // Clear params
            const newSearchParams = new URLSearchParams(searchParams.toString());
            const paramsToRemove = ['error', 'status', 'status_description', 'error_description'];
            paramsToRemove.forEach((param) => newSearchParams.delete(param));
            const redirectPath = `${pathname}?${newSearchParams.toString()}`;
            router.replace(redirectPath, { scroll: false });
        }
    }, [searchParams, pathname, router]);

    return null;
}
