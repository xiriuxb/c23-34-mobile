import { usePathname } from "expo-router";
import { useMemo } from "react";

export function useLastRouteSegment() {
    const pathname = usePathname();
    return useMemo(() => pathname.split("/").filter(Boolean).pop() || "", [pathname]);
}