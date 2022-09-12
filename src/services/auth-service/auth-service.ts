import { UserManager, UserManagerSettings } from 'oidc-client-ts';
import { Authorities, ClientIds, ClientConstants, Scope, Providers, Callbacks } from './constants';

class AuthService {
    public userManager: UserManager;

    constructor(
        provider: keyof typeof Providers = 'IS',
    ) {
        const {clientRoot} = ClientConstants;
        const authority = Authorities[provider];
        const client_id = ClientIds[provider];
        const scope = Scope[provider] !== '' ? Scope[provider] : undefined;
        const callback = Callbacks[provider];
        const settings: UserManagerSettings = {
            authority,
            client_id,
            redirect_uri: `${clientRoot}/${callback}`,
            silent_redirect_uri: `${clientRoot}/signin-${callback}`,
            post_logout_redirect_uri: clientRoot,
            response_type: 'code',
            scope
        };

        this.userManager = new UserManager(settings);
    }

    public get user() {
        return this.userManager.getUser();
    }

    public login() {
        this.stopRenew();
        this.clearState();
        return this.userManager.signinRedirect();
    }

    public get loginCallback() {
        return this.userManager.signinRedirectCallback();
    }

    public get token() {
        return this.userManager.signinSilent();
    }

    public logout() {
        return this.userManager.signoutRedirect();
    }

    public get logoutCallback() {
        return this.userManager.signoutRedirectCallback();
    }

    public stopRenew() {
        this.userManager.stopSilentRenew();
    }

    public clearState() {
        this.userManager.clearStaleState();
    }
}

export default AuthService;
