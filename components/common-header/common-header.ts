import * as avalon from 'avalon2';
import beyond from '../../vendor/beyond';
import ajax from '../../services/ajaxService';

export const name = 'common-header';

avalon.component(name, {
    template: __inline('./common-header.html'),
    defaults: {
        currentUserName: '',
        logout() {
            global.sessionStorage.removeItem('adminSession');
            global.location.href = '/login.html';
        }
    }
});