export const LoginDetailsSave = (id, MobileNumber, created_at, login_token, jwt_token) => {
    return {
        type: "LoginDetailsSave",
        payload: {
            id: id,
            MobileNumber: MobileNumber,
            created_at: created_at,
            login_token: login_token,
            jwt_token: jwt_token
        }
    }
}

export const HomepageDataSave = (dataList) => {
    return {
        type: "HomepageDataSave",
        payload: {
            dataList: dataList
        }
    }
}

export const LogoutUser = () => {
    return {
        type: "LogoutUser"
    }
}



