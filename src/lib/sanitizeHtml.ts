import DOMPurify from 'dompurify';

export function sanitizeHtml(html: string) {
    return { __html: DOMPurify.sanitize(html) };
}
