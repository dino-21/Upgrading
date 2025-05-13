import httpRequester from "@/libs/httpRequester";

// 회원가입
export const join = (args) => { // ①
    return httpRequester.post("/v1/api/account/join", args).catch(e => e.response);
};
// 로그인
export const login = (args) => { // ②
    return httpRequester.post("/v1/api/account/login", args).catch(e => e.response);
};
// 로그인 여부 확인
export const check = () => {
    return httpRequester.get("/v1/api/account/check").catch(e => e.response);
};
// 로그아웃
export const logout = () => { // ④
    return httpRequester.post("/v1/api/account/logout").catch(e => e.response);
};

