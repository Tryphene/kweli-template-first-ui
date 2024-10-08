import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useRedirect(companySlug: string) {
    const navigate = useNavigate();
    const location = useLocation();

    const addCompanySlugParams = useCallback(() => {  
        if (!location.pathname.includes(companySlug)) {
            const newPath = location.pathname.endsWith('/')
                ? `${location.pathname}${companySlug}`
                : `${location.pathname}/${companySlug}`;

            navigate(newPath, { replace: true });
        }
    }, [companySlug, location.pathname, navigate]);

    useEffect(() => {
        addCompanySlugParams();
    }, [addCompanySlugParams]);

    return null;
}
