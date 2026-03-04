"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PulseticApi = void 0;
class PulseticApi {
    constructor() {
        this.name = 'pulseticApi';
        this.displayName = 'Pulsetic API';
        this.documentationUrl = 'https://pulsetic.com/';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                default: '',
                typeOptions: {
                    password: true,
                },
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '={{$credentials.apiKey}}',
                },
            },
        };
    }
}
exports.PulseticApi = PulseticApi;
//# sourceMappingURL=PulseticApi.credentials.js.map