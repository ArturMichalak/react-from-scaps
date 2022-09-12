enum Providers {
    IS = '',
    MS = ''
}

enum Authorities {
    IS = 'https://demo.duendesoftware.com',
    MS = 'https://login.microsoftonline.com/79f6aaba-c325-491e-a368-b5c0c7975030/'
}

enum ClientIds {
    IS = 'interactive.public.short',
    MS = '0bb1b5ed-efd5-4c8c-a772-dfe6865e1dba'
}

enum Scope {
    IS = 'openid profile email',
    MS = 'User.Read'
}

enum Callbacks {
    IS = 'is-callback',
    MS = 'ms-callback'
}

class ClientConstants {
    public static clientRoot = process.env.CLIENT_ROOT || 'http://localhost:8000';
    public static apiRoot = process.env.API_ROOT || 'https://demo.duendesoftware.com/api';
}

export {
    Providers,
    Authorities,
    ClientIds,
    ClientConstants,
    Callbacks,
    Scope
}
