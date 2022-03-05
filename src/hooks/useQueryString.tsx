
import { useState, useCallback } from 'react';

// This custom hook keeps a state value in sync with a query parameter in the website's URL.
// This allows the URL to be used to restore state on full-page reload or if the URL is shared/bookmarked.
export const useQueryString = (key: string) => {

    const [paramValue, setParamValue] = useState(getQueryParamValue(key));

    // The useCallback hook is only called when one of its dependencies change.
    // In this case, we only want to update the browser URL if the query string needs to change.
    const onSetValue = useCallback(
        newValue => {
            setParamValue(newValue);
            updateQueryStringWithoutReload(newValue ? `${key}=${newValue}` : '');
        },
        [key, setParamValue]
    );

    function getQueryParamValue(key: string) {
        return new URLSearchParams(window.location.search).get(key);
    }

    // update a query string  without causing a browser reload
    function updateQueryStringWithoutReload(queryString: string) {
        const { protocol, host, pathname } = window.location;
        const newUrl = `${protocol}//${host}${pathname}?${queryString}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    }

    return [paramValue, onSetValue];
};