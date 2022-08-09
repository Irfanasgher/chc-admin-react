import {base} from './env';

export default {
//Authentication
    LOGIN_USER: base + '/api/admin/login',
    UPDATE_ADMIN_PROFILE: base + '/api/admin/profile/update',
    //Users
    USER_STORE: base + '/api/admin/users/store',
    USER_UPDATE: base + '/api/admin/users/update',
    USER_EDIT: base + '/api/admin/users/edit',
    ALL_USERS: base + '/api/admin/users',
    //Notification
    ALL_NOTIFICATIONS: base + '/api/admin/notifications',
    NOTIFICATIONS_READ: base + '/api/admin/notifications-read',
    //Chat
    GET_PRIVATE_CHAT: base + '/api/admin/chats/private',
    GET_PUBLIC_CHAT: base + '/api/admin/chats/public',
    STORE_CHAT: base + '/api/admin/chats/store',
    //Signals
    VIP_SIGNAL_STORE: base + '/api/admin/vip-signals/store',
    VIP_SIGNAL_UPDATE: base + '/api/admin/vip-signals/update',
    VIP_SIGNAL_DELETE: base + '/api/admin/vip-signals/delete',
    VIP_SIGNAL_EDIT: base + '/api/admin/vip-signals/edit',
    VIP_SIGNALS: base + '/api/admin/vip-signals',
    //VIP REGISTRATION
    VIP_REGISTRATIONS: base + '/api/admin/vip-registration',
    VIP_REGISTRATIONS_UPDATE: base + '/api/admin/vip-registration/update',
    //Result
    RESULT_STORE: base + '/api/admin/results/store',
    RESULT_UPDATE: base + '/api/admin/results/update',
    RESULT_DELETE: base + '/api/admin/results/delete',
    RESULT_EDIT: base + '/api/admin/results/edit',
    RESULTS: base + '/api/admin/results',
    //Categories
    STORE_CATEGORY: base + '/api/admin/categories/store',
    EDIT_CATEGORY: base + '/api/admin/categories/edit',
    UPDATE_CATEGORY: base + '/api/admin/categories/update',
    DELETE_CATEGORY: base + '/api/admin/categories/delete',
    ALL_CATEGORIES: base + '/api/admin/categories',
    //Guides
    STORE_GUIDES: base + '/api/admin/guides/store',
    EDIT_GUIDES: base + '/api/admin/guides/edit',
    UPDATE_GUIDES: base + '/api/admin/guides/update',
    DELETE_GUIDES: base + '/api/admin/guides/delete',
    ALL_GUIDES: base + '/api/admin/guides',
    //Privacy Policy
    GET_PRIVACY_POLICY: base + '/api/admin/privacy-policy',
    UPDATE_PRIVACY_POLICY: base + '/api/admin/privacy-policy/update',
    //Terms & Conditions
    GET_TERMS_AND_CONDITIONS: base + '/api/admin/terms-conditions',
    UPDATE_TERMS_AND_CONDITIONS: base + '/api/admin/security/update',
    //Security
    GET_SECURITY: base + '/api/admin/security',
    UPDATE_SECURITY: base + '/api/admin/terms-conditions/update',
    //Contact Us
    CONTACT_US_ALL: base + '/api/admin/contact-us',
    CONTACT_US_SINGLE_VIEW: base + '/api/admin/contact-us/view',
    CONTACT_US_DELETE: base + '/api/admin/contact-us/delete',
    //FAQS
    STORE_FAQ: base + '/api/admin/faqs/store',
    EDIT_FAQ: base + '/api/admin/faqs/edit',
    UPDATE_FAQ: base + '/api/admin/faqs/update',
    DELETE_FAQ: base + '/api/admin/faqs/delete',
    ALL_FAQS: base + '/api/admin/faqs',
    //Partners
    STORE_PARTNERS: base + '/api/admin/partners/store',
    EDIT_PARTNERS: base + '/api/admin/partners/edit',
    UPDATE_PARTNERS: base + '/api/admin/partners/update',
    DELETE_PARTNERS: base + '/api/admin/partners/delete',
    ALL_PARTNERS: base + '/api/admin/partners',
}