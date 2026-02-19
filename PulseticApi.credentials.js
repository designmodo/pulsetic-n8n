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
    }
}

module.exports = {
    PulseticApi,
};
