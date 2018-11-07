import jwtDecode from 'jwt-decode';

const JWT = 'jwt';
const AUTH_TOKEN = 'authToken';
const AUTH_URL = 'https://jwt.redventures.com/login?RelayState=';

let loc;
if (typeof window !== 'undefined') {
    loc = window.location;
}

const getJwt = () => {
    return localStorage.getItem(AUTH_TOKEN);
};

const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    return getJwt();
};

const resetJwt = () => {
    logout();
    loc.href = `${AUTH_URL}${loc.href}`;
};

const decodeJwt = (jwt) => {
    return jwtDecode(jwt);
};

const login = () => {
    if (typeof window !== 'undefined') {
        const jwtParam = (loc !== undefined) ? loc.search.split('&').filter(f => f.indexOf(`${JWT}=`) > -1)[0] : false;
        let jwt = (jwtParam) ? jwtParam.split(`${JWT}=`)[1] : null;
        let result = null;

        if (jwt) {
            localStorage.setItem(AUTH_TOKEN, jwt);
            // TODO regex
            loc.href = loc.href.replace(/\?jwt=[-\.\w]+/, '');
        } else {
            jwt = getJwt();

            if (!jwt) {
                resetJwt();
            } else {
                const decoded = decodeJwt(jwt);
                const exp = decoded.exp * 1000;
                if (exp < Date.now()) {
                    logout();
                    window.location.reload();
                }
                result = {
                    decoded,
                    jwt,
                };
            }
        }
        return result;
    }
};

export default {
    decodeJwt,
    getJwt,
    login,
    logout,
    resetJwt,
};