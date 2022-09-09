export enum Role {
    ADMIN = 'admin',
    COSTUMER = 'customer'
}

export enum LoginStatus {
    USER_NOT_FOUND = 'USER_NOT_FOUND',
    USER_NOT_ADMIN = 'USER_NOT_ADMIN',
    MISSING_FIELDS = 'MISSING_FIELDS',
    INVALID_PASSWORD = 'INVALID_PASSWORD'
}