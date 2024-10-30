import { jwtDecode } from 'jwt-decode';

const getNaverAndKakao = (subject: string) => {
    const position = subject.indexOf('_');
    if (position >= 0) {
        return subject.substring(0, position).toUpperCase();
    }
    return subject;
}

export const getSubject = (cookie: any) => {
    if (cookie.accessToken === undefined || cookie.accessToken === null) return '';
    try {
        const decodedToken = jwtDecode(cookie.accessToken);
        const { sub, iat, exp } = decodedToken;
        return getNaverAndKakao(String(sub));
    } catch (error) {
        return '';
    }
}
