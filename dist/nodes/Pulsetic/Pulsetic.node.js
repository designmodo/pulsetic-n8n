"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pulsetic = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class Pulsetic {
    constructor() {
        this.description = {
            displayName: 'Pulsetic',
            name: 'pulsetic',
            group: ['transform'],
            version: 1,
            description: 'Interact with Pulsetic API',
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            defaults: {
                name: 'Pulsetic',
            },
            icon: 'file:pulsetic.svg',
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            credentials: [
                {
                    name: 'pulseticApi',
                    required: true,
                },
            ],
            properties: [
                // ─── Resource ────────────────────────────────────────────────────────────────
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        { name: 'Monitor', value: 'monitor' },
                        { name: 'Status Page', value: 'statusPage' },
                        { name: 'Status Page Incident', value: 'statusPageIncident' },
                        { name: 'Status Page Incident Update', value: 'statusPageIncidentUpdate' },
                        { name: 'Status Page Maintenance', value: 'statusPageMaintenance' },
                    ],
                    default: 'monitor',
                },
                // ─── Operations ──────────────────────────────────────────────────────────────
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['monitor'] } },
                    options: [
                        { name: 'Add Notification Channel', value: 'addNotificationChannel', action: 'Add a notification channel' },
                        { name: 'Create', value: 'create', action: 'Create a monitor' },
                        { name: 'Delete', value: 'delete', action: 'Delete a monitor' },
                        { name: 'Get', value: 'get', action: 'Get a monitor' },
                        { name: 'Get Checks', value: 'getChecks', action: 'Get checks for monitor' },
                        { name: 'Get Events', value: 'getEvents', action: 'Get events for monitor' },
                        { name: 'Get Many', value: 'getAll', action: 'Get many monitors' },
                        { name: 'Get Snapshots', value: 'getSnapshots', action: 'Get snapshots for monitor' },
                        { name: 'Get Stats', value: 'getStats', action: 'Get monitor statistics' },
                        { name: 'Update', value: 'update', action: 'Update a monitor' },
                    ],
                    default: 'get',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['statusPage'] } },
                    options: [
                        { name: 'Create', value: 'create', action: 'Create a status page' },
                        { name: 'Delete', value: 'delete', action: 'Delete a status page' },
                        { name: 'Get Many', value: 'getAll', action: 'Get many status pages' },
                        { name: 'Update', value: 'update', action: 'Update a status page' },
                    ],
                    default: 'getAll',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['statusPageMaintenance'] } },
                    options: [
                        { name: 'Create', value: 'create', action: 'Create maintenance' },
                        { name: 'Delete', value: 'delete', action: 'Delete maintenance' },
                        { name: 'Update', value: 'update', action: 'Update maintenance' },
                    ],
                    default: 'create',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['statusPageIncident'] } },
                    options: [
                        { name: 'Create', value: 'create', action: 'Create incident' },
                        { name: 'Delete', value: 'delete', action: 'Delete incident' },
                        { name: 'Get Many', value: 'getAll', action: 'Get many incidents for a status page' },
                        { name: 'Update', value: 'update', action: 'Update incident' },
                    ],
                    default: 'getAll',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: { show: { resource: ['statusPageIncidentUpdate'] } },
                    options: [
                        { name: 'Create', value: 'create', action: 'Create incident update' },
                        { name: 'Delete', value: 'delete', action: 'Delete incident update' },
                        { name: 'Update', value: 'update', action: 'Update incident update' },
                    ],
                    default: 'create',
                },
                // ─── IDs ─────────────────────────────────────────────────────────────────────
                {
                    displayName: 'Monitor ID',
                    name: 'monitorId',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['monitor'],
                            operation: ['get', 'update', 'delete', 'getStats', 'getSnapshots', 'getEvents', 'getChecks', 'addNotificationChannel'],
                        },
                    },
                },
                {
                    displayName: 'Status Page ID',
                    name: 'statusPageId',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: { show: { resource: ['statusPage'], operation: ['update', 'delete'] } },
                },
                {
                    displayName: 'Status Page ID',
                    name: 'statusPageId',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create'] } },
                },
                {
                    displayName: 'Status Page ID',
                    name: 'statusPageId',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: { show: { resource: ['statusPageIncident'], operation: ['getAll', 'create'] } },
                },
                {
                    displayName: 'Maintenance ID',
                    name: 'maintenanceId',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['update', 'delete'] } },
                },
                {
                    displayName: 'Incident ID',
                    name: 'incidentId',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: { show: { resource: ['statusPageIncident'], operation: ['update', 'delete'] } },
                },
                {
                    displayName: 'Incident ID',
                    name: 'incidentId',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: { show: { resource: ['statusPageIncidentUpdate'], operation: ['create'] } },
                },
                {
                    displayName: 'Incident Update ID',
                    name: 'incidentUpdateId',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: { show: { resource: ['statusPageIncidentUpdate'], operation: ['update', 'delete'] } },
                },
                // ─── Notification Channel ─────────────────────────────────────────────────────
                {
                    displayName: 'Channel Type',
                    name: 'channelType',
                    type: 'options',
                    options: [
                        { name: 'Email', value: 'email' },
                        { name: 'Phone Number', value: 'phone-number' },
                        { name: 'Slack Webhook', value: 'slack-webhook' },
                        { name: 'Webhook', value: 'webhook' },
                        { name: 'Signl4', value: 'signl4' },
                        { name: 'Discord Webhook', value: 'discord-webhook' },
                        { name: 'MS Teams Webhook', value: 'ms-teams-webhook' },
                    ],
                    default: 'email',
                    displayOptions: { show: { resource: ['monitor'], operation: ['addNotificationChannel'] } },
                },
                {
                    displayName: 'Value',
                    name: 'channelValue',
                    type: 'string',
                    default: '',
                    description: 'Email, Phone Number, or Webhook URL',
                    displayOptions: { show: { resource: ['monitor'], operation: ['addNotificationChannel'] } },
                },
                {
                    displayName: 'SMS',
                    name: 'smsValue',
                    type: 'boolean',
                    default: false,
                    description: 'Whether to enable SMS notifications',
                    displayOptions: {
                        show: {
                            resource: ['monitor'],
                            operation: ['addNotificationChannel'],
                            channelType: ['phone-number'],
                        },
                    },
                },
                {
                    displayName: 'Call',
                    name: 'callValue',
                    type: 'boolean',
                    default: false,
                    description: 'Whether to enable Call notifications',
                    displayOptions: {
                        show: {
                            resource: ['monitor'],
                            operation: ['addNotificationChannel'],
                            channelType: ['phone-number'],
                        },
                    },
                },
                // ─── Monitor: Create (required fields) ───────────────────────────────────────
                {
                    displayName: 'URLs',
                    name: 'monitorUrls',
                    type: 'string',
                    default: '',
                    required: true,
                    description: 'Comma-separated URLs to monitor',
                    displayOptions: { show: { resource: ['monitor'], operation: ['create'] } },
                },
                {
                    displayName: 'Uptime Check Frequency',
                    name: 'monitorUptimeCheckFrequency',
                    type: 'number',
                    default: 300,
                    required: true,
                    displayOptions: { show: { resource: ['monitor'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Request Type',
                    name: 'monitorRequestType',
                    type: 'options',
                    required: true,
                    options: [
                        { name: 'HTTP', value: 'http' },
                        { name: 'ICMP', value: 'icmp' },
                        { name: 'TCP', value: 'tcp' },
                    ],
                    default: 'http',
                    displayOptions: { show: { resource: ['monitor'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Request Method',
                    name: 'monitorRequestMethod',
                    type: 'options',
                    required: true,
                    options: [
                        { name: 'GET', value: 'get' },
                        { name: 'POST', value: 'post' },
                        { name: 'PUT', value: 'put' },
                        { name: 'DELETE', value: 'delete' },
                        { name: 'PATCH', value: 'patch' },
                        { name: 'HEAD', value: 'head' },
                        { name: 'OPTIONS', value: 'options' },
                    ],
                    default: 'get',
                    displayOptions: {
                        show: {
                            resource: ['monitor'],
                            operation: ['create', 'update'],
                            monitorRequestType: ['http'],
                        },
                    },
                },
                {
                    displayName: 'SSL Check',
                    name: 'monitorSslCheck',
                    type: 'boolean',
                    default: false,
                    displayOptions: { show: { resource: ['monitor'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'TCP Ports',
                    name: 'monitorTcpPorts',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['monitor'],
                            operation: ['create', 'update'],
                            monitorRequestType: ['tcp'],
                        },
                    },
                },
                // Monitor Create – Additional Fields
                {
                    displayName: 'Additional Fields',
                    name: 'additionalFields',
                    type: 'collection',
                    placeholder: 'Add Field',
                    default: {},
                    displayOptions: { show: { resource: ['monitor'], operation: ['create'] } },
                    options: [
                        {
                            displayName: 'Names',
                            name: 'monitorNames',
                            type: 'string',
                            default: '',
                            description: 'Comma-separated display names (one per URL)',
                        },
                    ],
                },
                // ─── Monitor: Update (required fields) ───────────────────────────────────────
                {
                    displayName: 'URL',
                    name: 'monitorUrl',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: { show: { resource: ['monitor'], operation: ['update'] } },
                },
                // Monitor Update – Additional Fields
                {
                    displayName: 'Additional Fields',
                    name: 'additionalFields',
                    type: 'collection',
                    placeholder: 'Add Field',
                    default: {},
                    displayOptions: { show: { resource: ['monitor'], operation: ['update'] } },
                    options: [
                        {
                            displayName: 'Name',
                            name: 'monitorName',
                            type: 'string',
                            default: '',
                            description: 'Display name for the monitor',
                        },
                    ],
                },
                // ─── Status Page: Create / Update ────────────────────────────────────────────
                {
                    displayName: 'Title',
                    name: 'statusPageTitle',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: { show: { resource: ['statusPage'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Monitors',
                    name: 'statusPageMonitors',
                    type: 'string',
                    default: '',
                    required: true,
                    description: 'Comma-separated Monitor IDs',
                    displayOptions: { show: { resource: ['statusPage'], operation: ['create', 'update'] } },
                },
                // Status Page – Additional Fields
                {
                    displayName: 'Additional Fields',
                    name: 'additionalFields',
                    type: 'collection',
                    placeholder: 'Add Field',
                    default: {},
                    displayOptions: { show: { resource: ['statusPage'], operation: ['create', 'update'] } },
                    options: [
                        {
                            displayName: 'Domain',
                            name: 'statusPageDomain',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'Meta Title',
                            name: 'statusPageMetaTitle',
                            type: 'string',
                            default: '',
                        },
                        {
                            displayName: 'Password',
                            name: 'statusPagePassword',
                            type: 'string',
                            typeOptions: { password: true },
                            default: '',
                            description: 'Required when Private is enabled',
                        },
                        {
                            displayName: 'Private',
                            name: 'statusPagePrivate',
                            type: 'boolean',
                            default: false,
                        },
                        {
                            displayName: 'Remove Branding',
                            name: 'statusPageRemoveBranding',
                            type: 'boolean',
                            default: false,
                        },
                        {
                            displayName: 'Show Location Tooltip',
                            name: 'statusPageShowLocationTooltip',
                            type: 'boolean',
                            default: true,
                        },
                        {
                            displayName: 'Subscribe to Updates',
                            name: 'statusPageSubscribeToUpdates',
                            type: 'boolean',
                            default: false,
                        },
                        {
                            displayName: 'Uptime Percentage Style',
                            name: 'statusPageUptimePercentageStyle',
                            type: 'boolean',
                            default: false,
                        },
                        {
                            displayName: 'Uptime Threshold',
                            name: 'statusPageUptimeThreshold',
                            type: 'number',
                            default: 0.9,
                        },
                    ],
                },
                // ─── Maintenance: Create / Update (all required) ─────────────────────────────
                {
                    displayName: 'Name',
                    name: 'maintenanceName',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Description',
                    name: 'maintenanceDescription',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Timezone (JSON)',
                    name: 'maintenanceTimezone',
                    type: 'json',
                    default: '{}',
                    required: true,
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Monitors',
                    name: 'maintenanceMonitors',
                    type: 'string',
                    default: '',
                    required: true,
                    description: 'Comma-separated Monitor IDs',
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Start Date',
                    name: 'maintenanceDateStarting',
                    type: 'string',
                    default: '',
                    required: true,
                    placeholder: 'YYYY-MM-DD',
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'End Date',
                    name: 'maintenanceDateEnding',
                    type: 'string',
                    default: '',
                    required: true,
                    placeholder: 'YYYY-MM-DD',
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Start Time',
                    name: 'maintenanceTimeStarting',
                    type: 'string',
                    default: '',
                    required: true,
                    placeholder: '12:00 PM',
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'End Time',
                    name: 'maintenanceTimeEnding',
                    type: 'string',
                    default: '',
                    required: true,
                    placeholder: '12:00 PM',
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create', 'update'] } },
                },
                // ─── Incident: Create / Update (all required) ────────────────────────────────
                {
                    displayName: 'Title',
                    name: 'incidentTitle',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: { show: { resource: ['statusPageIncident'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Status',
                    name: 'incidentInitialStatus',
                    type: 'options',
                    required: true,
                    options: [
                        { name: 'Investigating', value: 'investigating' },
                        { name: 'Identified', value: 'identified' },
                        { name: 'Monitoring', value: 'monitoring' },
                        { name: 'Resolved', value: 'resolved' },
                        { name: 'Exploring', value: 'exploring' },
                    ],
                    default: 'investigating',
                    displayOptions: { show: { resource: ['statusPageIncident'], operation: ['create'] } },
                },
                {
                    displayName: 'Message',
                    name: 'incidentInitialMessage',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: { show: { resource: ['statusPageIncident'], operation: ['create'] } },
                },
                {
                    displayName: 'Date',
                    name: 'incidentInitialDate',
                    type: 'string',
                    default: '',
                    required: true,
                    placeholder: 'YYYY-MM-DD HH:mm',
                    displayOptions: { show: { resource: ['statusPageIncident'], operation: ['create'] } },
                },
                // ─── Incident Update: Create / Update (all required) ─────────────────────────
                {
                    displayName: 'Status',
                    name: 'incidentUpdateStatus',
                    type: 'options',
                    required: true,
                    options: [
                        { name: 'Investigating', value: 'investigating' },
                        { name: 'Identified', value: 'identified' },
                        { name: 'Monitoring', value: 'monitoring' },
                        { name: 'Resolved', value: 'resolved' },
                        { name: 'Exploring', value: 'exploring' },
                    ],
                    default: 'investigating',
                    displayOptions: { show: { resource: ['statusPageIncidentUpdate'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Message',
                    name: 'incidentUpdateMessage',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: { show: { resource: ['statusPageIncidentUpdate'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Date',
                    name: 'incidentUpdateDate',
                    type: 'string',
                    default: '',
                    required: true,
                    placeholder: 'YYYY-MM-DD HH:mm:ss',
                    displayOptions: { show: { resource: ['statusPageIncidentUpdate'], operation: ['create', 'update'] } },
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const splitComma = (str) => str ? str.split(',').map((s) => s.trim()).filter(Boolean) : [];
        for (let i = 0; i < items.length; i++) {
            const resource = this.getNodeParameter('resource', i);
            const operation = this.getNodeParameter('operation', i);
            let method = 'GET';
            let url = '';
            let body = {};
            const baseUrl = 'https://api.pulsetic.com/api/public';
            try {
                if (resource === 'monitor') {
                    if (operation === 'get') {
                        const id = this.getNodeParameter('monitorId', i);
                        url = `${baseUrl}/monitors/${id}`;
                    }
                    else if (operation === 'getAll') {
                        url = `${baseUrl}/monitors`;
                    }
                    else if (operation === 'create') {
                        method = 'POST';
                        url = `${baseUrl}/monitors`;
                        const additionalFields = this.getNodeParameter('additionalFields', i, {});
                        const requestType = this.getNodeParameter('monitorRequestType', i);
                        const requestBody = {
                            urls: splitComma(this.getNodeParameter('monitorUrls', i)),
                            names: splitComma(additionalFields.monitorNames || ''),
                            uptime_check_frequency: this.getNodeParameter('monitorUptimeCheckFrequency', i),
                            ssl_check: this.getNodeParameter('monitorSslCheck', i),
                            request: { type: requestType },
                        };
                        if (requestType === 'http') {
                            requestBody.request.method = this.getNodeParameter('monitorRequestMethod', i);
                        }
                        const tcpPorts = this.getNodeParameter('monitorTcpPorts', i, '');
                        if (tcpPorts)
                            requestBody.tcp_ports = tcpPorts;
                        body = requestBody;
                    }
                    else if (operation === 'update') {
                        method = 'PUT';
                        const id = this.getNodeParameter('monitorId', i);
                        url = `${baseUrl}/monitors/${id}`;
                        const additionalFields = this.getNodeParameter('additionalFields', i, {});
                        const requestType = this.getNodeParameter('monitorRequestType', i);
                        const requestBody = {
                            name: additionalFields.monitorName || '',
                            url: this.getNodeParameter('monitorUrl', i),
                            ssl_check: this.getNodeParameter('monitorSslCheck', i),
                            uptime_check_frequency: this.getNodeParameter('monitorUptimeCheckFrequency', i),
                            request: { type: requestType },
                        };
                        if (requestType === 'http') {
                            requestBody.request.method = this.getNodeParameter('monitorRequestMethod', i);
                        }
                        const tcpPorts = this.getNodeParameter('monitorTcpPorts', i, '');
                        if (tcpPorts)
                            requestBody.tcp_ports = tcpPorts;
                        body = requestBody;
                    }
                    else if (operation === 'delete') {
                        method = 'DELETE';
                        const id = this.getNodeParameter('monitorId', i);
                        url = `${baseUrl}/monitors/${id}`;
                    }
                    else if (operation === 'getStats') {
                        const id = this.getNodeParameter('monitorId', i);
                        url = `${baseUrl}/monitors/${id}/stats`;
                    }
                    else if (operation === 'getSnapshots') {
                        const id = this.getNodeParameter('monitorId', i);
                        url = `${baseUrl}/monitors/${id}/snapshots`;
                    }
                    else if (operation === 'getEvents') {
                        const id = this.getNodeParameter('monitorId', i);
                        url = `${baseUrl}/monitors/${id}/events`;
                    }
                    else if (operation === 'getChecks') {
                        const id = this.getNodeParameter('monitorId', i);
                        url = `${baseUrl}/monitors/${id}/checks`;
                    }
                    else if (operation === 'addNotificationChannel') {
                        method = 'POST';
                        const id = this.getNodeParameter('monitorId', i);
                        const type = this.getNodeParameter('channelType', i);
                        const value = this.getNodeParameter('channelValue', i);
                        url = `${baseUrl}/monitors/${id}/notification-channels/${type}`;
                        if (type === 'email')
                            body = { email: value };
                        else if (type === 'phone-number')
                            body = {
                                phone_number: value,
                                sms: this.getNodeParameter('smsValue', i, false),
                                calls: this.getNodeParameter('callValue', i, false),
                            };
                        else if (type === 'slack-webhook')
                            body = { webhook_url: value };
                        else if (type === 'webhook' || type === 'ms-teams-webhook' || type === 'discord-webhook')
                            body = { webhook: value };
                        else if (type === 'signl4')
                            body = { signl4_webhook: value };
                        else
                            body = { url: value };
                    }
                }
                else if (resource === 'statusPage') {
                    if (operation === 'getAll') {
                        url = `${baseUrl}/status-page`;
                    }
                    else if (operation === 'create' || operation === 'update') {
                        method = operation === 'create' ? 'POST' : 'PUT';
                        url = operation === 'create'
                            ? `${baseUrl}/status-page`
                            : `${baseUrl}/status-page/${this.getNodeParameter('statusPageId', i)}`;
                        const additionalFields = this.getNodeParameter('additionalFields', i, {});
                        const isPrivate = additionalFields.statusPagePrivate || false;
                        body = {
                            title: this.getNodeParameter('statusPageTitle', i),
                            domain: additionalFields.statusPageDomain || '',
                            meta_title: additionalFields.statusPageMetaTitle || '',
                            uptime_threshold: additionalFields.statusPageUptimeThreshold !== undefined ? additionalFields.statusPageUptimeThreshold : 0.9,
                            remove_branding: additionalFields.statusPageRemoveBranding || false,
                            subscribe_to_updates: additionalFields.statusPageSubscribeToUpdates || false,
                            private: isPrivate,
                            uptime_percentage_style: additionalFields.statusPageUptimePercentageStyle || false,
                            show_location_tooltip: additionalFields.statusPageShowLocationTooltip !== undefined ? additionalFields.statusPageShowLocationTooltip : true,
                            monitors: splitComma(this.getNodeParameter('statusPageMonitors', i, '')).map(Number).filter((n) => !isNaN(n)),
                        };
                        if (isPrivate) {
                            body.password = additionalFields.statusPagePassword;
                        }
                    }
                    else if (operation === 'delete') {
                        method = 'DELETE';
                        const id = this.getNodeParameter('statusPageId', i);
                        url = `${baseUrl}/status-page/${id}`;
                    }
                }
                else if (resource === 'statusPageMaintenance') {
                    if (operation === 'create' || operation === 'update') {
                        method = operation === 'create' ? 'POST' : 'PUT';
                        url = operation === 'create'
                            ? `${baseUrl}/status-page/${this.getNodeParameter('statusPageId', i)}/maintenance`
                            : `${baseUrl}/status-page/maintenance/${this.getNodeParameter('maintenanceId', i)}`;
                        const timezoneParam = this.getNodeParameter('maintenanceTimezone', i, {});
                        const timezone = typeof timezoneParam === 'string' ? JSON.parse(timezoneParam) : timezoneParam;
                        body = {
                            name: this.getNodeParameter('maintenanceName', i),
                            description: this.getNodeParameter('maintenanceDescription', i),
                            timezone,
                            monitors: splitComma(this.getNodeParameter('maintenanceMonitors', i, '')).map(Number),
                            date: {
                                starting: this.getNodeParameter('maintenanceDateStarting', i),
                                ending: this.getNodeParameter('maintenanceDateEnding', i),
                            },
                            time: {
                                starting: this.getNodeParameter('maintenanceTimeStarting', i),
                                ending: this.getNodeParameter('maintenanceTimeEnding', i),
                            },
                        };
                    }
                    else if (operation === 'delete') {
                        method = 'DELETE';
                        const id = this.getNodeParameter('maintenanceId', i);
                        url = `${baseUrl}/status-page/maintenance/${id}`;
                    }
                }
                else if (resource === 'statusPageIncident') {
                    if (operation === 'getAll') {
                        const id = this.getNodeParameter('statusPageId', i);
                        url = `${baseUrl}/status-page/${id}/incidents`;
                    }
                    else if (operation === 'create') {
                        method = 'POST';
                        url = `${baseUrl}/status-page/${this.getNodeParameter('statusPageId', i)}/incidents`;
                        body = {
                            title: this.getNodeParameter('incidentTitle', i),
                            update: {
                                status: this.getNodeParameter('incidentInitialStatus', i),
                                message: this.getNodeParameter('incidentInitialMessage', i),
                                date: this.getNodeParameter('incidentInitialDate', i),
                            },
                        };
                    }
                    else if (operation === 'update') {
                        method = 'PUT';
                        url = `${baseUrl}/status-page/incidents/${this.getNodeParameter('incidentId', i)}`;
                        body = {
                            title: this.getNodeParameter('incidentTitle', i),
                        };
                    }
                    else if (operation === 'delete') {
                        method = 'DELETE';
                        const id = this.getNodeParameter('incidentId', i);
                        url = `${baseUrl}/status-page/incidents/${id}`;
                    }
                }
                else if (resource === 'statusPageIncidentUpdate') {
                    if (operation === 'create' || operation === 'update') {
                        method = operation === 'create' ? 'POST' : 'PUT';
                        url = operation === 'create'
                            ? `${baseUrl}/incidents/${this.getNodeParameter('incidentId', i)}/incident-update`
                            : `${baseUrl}/incidents/updates/${this.getNodeParameter('incidentUpdateId', i)}`;
                        body = {
                            status: this.getNodeParameter('incidentUpdateStatus', i),
                            message: this.getNodeParameter('incidentUpdateMessage', i),
                            date: this.getNodeParameter('incidentUpdateDate', i),
                        };
                    }
                    else if (operation === 'delete') {
                        method = 'DELETE';
                        const id = this.getNodeParameter('incidentUpdateId', i);
                        url = `${baseUrl}/incidents/updates/${id}`;
                    }
                }
                const requestOptions = {
                    method: method,
                    url,
                    json: true,
                };
                if (method !== 'GET' && method !== 'DELETE') {
                    requestOptions.body = body;
                }
                const response = await this.helpers.httpRequestWithAuthentication.call(this, 'pulseticApi', requestOptions);
                returnData.push({ json: response, pairedItem: { item: i } });
            }
            catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({ json: { error: error.message }, pairedItem: { item: i } });
                    continue;
                }
                throw new n8n_workflow_1.NodeApiError(this.getNode(), error, { itemIndex: i });
            }
        }
        return [returnData];
    }
}
exports.Pulsetic = Pulsetic;
//# sourceMappingURL=Pulsetic.node.js.map