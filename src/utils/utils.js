/**
 * Trims "https://" or "http://" from a URL.
 * @param {string} url - URL to trim.
 * @returns {string} - trimmed URL.
 */
export const trimUrl = (url) => {
    return url.replace(/^https?:\/\//, '');
};
