import { format, parse, parseISO } from 'date-fns';

// 네이버 날짜 변환
export function formatDateNaver(dateString: string) {
    const parsedDate = parse(dateString, 'EEE, dd MMM yyyy HH:mm:ss xx', new Date());
    return format(parsedDate, 'yy.MM.dd HH:mm');
}
export function formatDateKakao(dateString: string) {
    const parsedDate = parseISO(dateString);
    return format(parsedDate, 'yy.MM.dd HH:mm');
}
