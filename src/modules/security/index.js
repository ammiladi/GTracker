import { Security } from './Security';
import { TokenStorage } from './TokenStorage';

const security = new Security();
security.setTokenStorage(new TokenStorage('react-native-keycloak-token1'));

export default security;
