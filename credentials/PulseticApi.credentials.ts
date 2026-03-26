import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';
export class PulseticApi implements ICredentialType {
	name = 'pulseticApi';
	displayName = 'Pulsetic API';
	icon: Icon = 'file:pulsetic.svg';
	documentationUrl = 'https://help.pulsetic.com/article/223-tokens';
	properties: INodeProperties[] = [
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
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{$credentials.apiKey}}',
			},
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.pulsetic.com',
			url: '/api/public/monitors',
			method: 'GET',
		},
	};
}
