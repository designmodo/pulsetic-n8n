class Pulsetic {
    constructor() {
        this.description = {
            displayName: 'Pulsetic',
            name: 'pulsetic',
            group: ['transform'],
            version: 1,
            description: 'Interact with Pulsetic API',
            defaults: {
                name: 'Pulsetic',
            },
	    icon: 'file:pulsetic.svg',
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'pulseticApi',
                    required: true,
                },
            ],
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    options: [
                        { name: 'Monitor', value: 'monitor' },
                        { name: 'Status Page', value: 'statusPage' },
                        { name: 'Status Page Maintenance', value: 'statusPageMaintenance' },
                        { name: 'Status Page Incident', value: 'statusPageIncident' },
                        { name: 'Status Page Incident Update', value: 'statusPageIncidentUpdate' },
                    ],
                    default: 'monitor',
                },
                // Monitor Operations
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: { show: { resource: ['monitor'] } },
                    options: [
                        { name: 'Get', value: 'get', action: 'Get a monitor' },
                        { name: 'Get Many', value: 'getAll', action: 'Get many monitors' },
                        { name: 'Create', value: 'create', action: 'Create a monitor' },
                        { name: 'Update', value: 'update', action: 'Update a monitor' },
                        { name: 'Delete', value: 'delete', action: 'Delete a monitor' },
                        { name: 'Get Stats', value: 'getStats', action: 'Get monitor statistics' },
                        { name: 'Get Snapshots', value: 'getSnapshots', action: 'Get snapshots for monitor' },
                        { name: 'Get Events', value: 'getEvents', action: 'Get events for monitor' },
                        { name: 'Get Checks', value: 'getChecks', action: 'Get checks for monitor' },
                        { name: 'Add Notification Channel', value: 'addNotificationChannel', action: 'Add a notification channel' },
                    ],
                    default: 'get',
                },
                // Status Page Operations
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: { show: { resource: ['statusPage'] } },
                    options: [
                        { name: 'Get Many', value: 'getAll', action: 'Get many status pages' },
                        { name: 'Create', value: 'create', action: 'Create a status page' },
                        { name: 'Update', value: 'update', action: 'Update a status page' },
                        { name: 'Delete', value: 'delete', action: 'Delete a status page' },
                    ],
                    default: 'getAll',
                },
                // Maintenance Operations
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: { show: { resource: ['statusPageMaintenance'] } },
                    options: [
                        { name: 'Create', value: 'create', action: 'Create maintenance' },
                        { name: 'Update', value: 'update', action: 'Update maintenance' },
                        { name: 'Delete', value: 'delete', action: 'Delete maintenance' },
                    ],
                    default: 'create',
                },
                // Incident Operations
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: { show: { resource: ['statusPageIncident'] } },
                    options: [
                        { name: 'Get All', value: 'getAll', action: 'Get all incidents for a status page' },
                        { name: 'Create', value: 'create', action: 'Create incident' },
                        { name: 'Update', value: 'update', action: 'Update incident' },
                        { name: 'Delete', value: 'delete', action: 'Delete incident' },
                    ],
                    default: 'getAll',
                },
                // Incident Update Operations
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    displayOptions: { show: { resource: ['statusPageIncidentUpdate'] } },
                    options: [
                        { name: 'Create', value: 'create', action: 'Create incident update' },
                        { name: 'Update', value: 'update', action: 'Update incident update' },
                        { name: 'Delete', value: 'delete', action: 'Delete incident update' },
                    ],
                    default: 'create',
                },

                // --- IDs ---
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
                    displayOptions: {
                        show: {
                            resource: ['statusPage'],
                            operation: ['update', 'delete'],
                        },
                    },
                },
                {
                    displayName: 'Status Page ID',
                    name: 'statusPageId',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['statusPageMaintenance'],
                            operation: ['create'],
                        },
                    },
                },
                {
                    displayName: 'Status Page ID',
                    name: 'statusPageId',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['statusPageIncident'],
                            operation: ['getAll', 'create'],
                        },
                    },
                },
                {
                    displayName: 'Maintenance ID',
                    name: 'maintenanceId',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['statusPageMaintenance'],
                            operation: ['update', 'delete'],
                        },
                    },
                },
                {
                    displayName: 'Incident ID',
                    name: 'incidentId',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['statusPageIncident'],
                            operation: ['update', 'delete'],
                        },
                    },
                },
                {
                    displayName: 'Incident ID',
                    name: 'incidentId',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['statusPageIncidentUpdate'],
                            operation: ['create'],
                        },
                    },
                },
                {
                    displayName: 'Incident Update ID',
                    name: 'incidentUpdateId',
                    type: 'string',
                    default: '',
                    required: true,
                    displayOptions: {
                        show: {
                            resource: ['statusPageIncidentUpdate'],
                            operation: ['update', 'delete'],
                        },
                    },
                },

                // --- Notification Channel ---
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
                    displayOptions: {
                        show: {
                            resource: ['monitor'],
                            operation: ['addNotificationChannel'],
                        },
                    },
                },
                {
                    displayName: 'Value',
                    name: 'channelValue',
                    type: 'string',
                    default: '',
                    description: 'Email, Phone Number, or Webhook URL',
                    displayOptions: {
                        show: {
                            resource: ['monitor'],
                            operation: ['addNotificationChannel'],
                        },
                    },
                },
                {
                    displayName: 'SMS',
                    name: 'smsValue',
                    type: 'boolean',
                    default: false,
                    description: 'Enable SMS notifications',
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
                    description: 'Enable Call notifications',
                    displayOptions: {
                        show: {
                            resource: ['monitor'],
                            operation: ['addNotificationChannel'],
                            channelType: ['phone-number'],
                        },
                    },
                },


                // --- Monitor Fields ---
                {
                    displayName: 'URLs',
                    name: 'monitorUrls',
                    type: 'string',
                    default: '',
                    required: true,
                    description: 'Comma-separated URLs',
                    displayOptions: { show: { resource: ['monitor'], operation: ['create'] } },
                },
                {
                    displayName: 'Names',
                    name: 'monitorNames',
                    type: 'string',
                    default: '',
                    description: 'Comma-separated Names',
                    displayOptions: { show: { resource: ['monitor'], operation: ['create'] } },
                },
                {
                    displayName: 'Name',
                    name: 'monitorName',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { resource: ['monitor'], operation: ['update'] } },
                },
                {
                    displayName: 'URL',
                    name: 'monitorUrl',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { resource: ['monitor'], operation: ['update'] } },
                },
                {
                    displayName: 'Uptime Check Frequency',
                    name: 'monitorUptimeCheckFrequency',
                    type: 'number',
                    default: 1,
                    displayOptions: { show: { resource: ['monitor'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Request Type',
                    name: 'monitorRequestType',
                    type: 'options',
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
                    displayOptions: { show: { resource: ['monitor'], operation: ['update', 'create'] } },
                },
                {
                    displayName: 'TCP Ports',
                    name: 'monitorTcpPorts',
                    type: 'string',
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['monitor'],
                            operation: ['create', 'update'],
                            monitorRequestType: ['tcp'],
                        },
                    },
                },

                // --- Status Page Fields ---
                {
                    displayName: 'Title',
                    name: 'statusPageTitle',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { resource: ['statusPage'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Domain',
                    name: 'statusPageDomain',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { resource: ['statusPage'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Meta Title',
                    name: 'statusPageMetaTitle',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { resource: ['statusPage'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Uptime Threshold',
                    name: 'statusPageUptimeThreshold',
                    type: 'number',
                    default: 0.9,
                    displayOptions: { show: { resource: ['statusPage'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Remove Branding',
                    name: 'statusPageRemoveBranding',
                    type: 'boolean',
                    default: false,
                    displayOptions: { show: { resource: ['statusPage'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Subscribe to Updates',
                    name: 'statusPageSubscribeToUpdates',
                    type: 'boolean',
                    default: false,
                    displayOptions: { show: { resource: ['statusPage'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Private',
                    name: 'statusPagePrivate',
                    type: 'boolean',
                    default: false,
                    displayOptions: { show: { resource: ['statusPage'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Password',
                    name: 'statusPagePassword',
                    type: 'string',
                    typeOptions: { password: true },
                    default: '',
                    displayOptions: {
                        show: {
                            resource: ['statusPage'],
                            operation: ['create', 'update'],
                            statusPagePrivate: [true],
                        },
                    },
                },
                {
                    displayName: 'Uptime Percentage Style',
                    name: 'statusPageUptimePercentageStyle',
                    type: 'boolean',
                    default: false,
                    displayOptions: { show: { resource: ['statusPage'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Show Location Tooltip',
                    name: 'statusPageShowLocationTooltip',
                    type: 'boolean',
                    default: true,
                    displayOptions: { show: { resource: ['statusPage'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Monitors',
                    name: 'statusPageMonitors',
                    type: 'string',
                    default: '',
                    description: 'Comma-separated Monitor IDs',
                    displayOptions: { show: { resource: ['statusPage'], operation: ['create', 'update'] } },
                },

                // --- Maintenance Fields ---
                {
                    displayName: 'Name',
                    name: 'maintenanceName',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Description',
                    name: 'maintenanceDescription',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Timezone (JSON)',
                    name: 'maintenanceTimezone',
                    type: 'json',
                    default: '{}',
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Monitors',
                    name: 'maintenanceMonitors',
                    type: 'string',
                    default: '',
                    description: 'Comma-separated Monitor IDs',
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Start Date',
                    name: 'maintenanceDateStarting',
                    type: 'string',
                    default: '',
                    placeholder: 'YYYY-MM-DD',
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'End Date',
                    name: 'maintenanceDateEnding',
                    type: 'string',
                    default: '',
                    placeholder: 'YYYY-MM-DD',
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Start Time',
                    name: 'maintenanceTimeStarting',
                    type: 'string',
                    default: '',
                    placeholder: '12:00 PM',
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'End Time',
                    name: 'maintenanceTimeEnding',
                    type: 'string',
                    default: '',
                    placeholder: '12:00 PM',
                    displayOptions: { show: { resource: ['statusPageMaintenance'], operation: ['create', 'update'] } },
                },

                // --- Incident Fields ---
                {
                    displayName: 'Title',
                    name: 'incidentTitle',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { resource: ['statusPageIncident'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Status',
                    name: 'incidentInitialStatus',
                    type: 'options',
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
                    displayOptions: { show: { resource: ['statusPageIncident'], operation: ['create'] } },
                },
                {
                    displayName: 'Date',
                    name: 'incidentInitialDate',
                    type: 'string',
                    default: '',
                    placeholder: 'YYYY-MM-DD HH:mm',
                    displayOptions: { show: { resource: ['statusPageIncident'], operation: ['create'] } },
                },

                // --- Incident Update Fields ---
                {
                    displayName: 'Status',
                    name: 'incidentUpdateStatus',
                    type: 'options',
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
                    displayOptions: { show: { resource: ['statusPageIncidentUpdate'], operation: ['create', 'update'] } },
                },
                {
                    displayName: 'Date',
                    name: 'incidentUpdateDate',
                    type: 'string',
                    default: '',
                    placeholder: 'YYYY-MM-DD HH:mm:ss',
                    displayOptions: { show: { resource: ['statusPageIncidentUpdate'], operation: ['create', 'update'] } },
                },
            ],
        };
    }

    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const credentials = await this.getCredentials('pulseticApi');
        const apiKey = credentials.apiKey;

        const splitComma = (str) => str ? str.split(',').map(s => s.trim()) : [];

        for (let i = 0; i < items.length; i++) {
            const resource = this.getNodeParameter('resource', i);
            const operation = this.getNodeParameter('operation', i);

            let method = 'GET';
            let url = '';
            let body = {};

            const baseUrl = 'https://api.pulsetic.com/api/public';

            if (resource === 'monitor') {
                if (operation === 'get') {
                    const id = this.getNodeParameter('monitorId', i);
                    url = `${baseUrl}/monitors/${id}`;
                } else if (operation === 'getAll') {
                    url = `${baseUrl}/monitors`;
                } else if (operation === 'create') {
                    method = 'POST';
                    url = `${baseUrl}/monitors`;
                    const requestType = this.getNodeParameter('monitorRequestType', i);
                    body = {
                        urls: splitComma(this.getNodeParameter('monitorUrls', i, '')),
                        names: splitComma(this.getNodeParameter('monitorNames', i, '')),
                        uptime_check_frequency: this.getNodeParameter('monitorUptimeCheckFrequency', i),
                        ssl_check: this.getNodeParameter('monitorSslCheck', i),
                        request: {
                            type: requestType,
                        },
                    };
                    if (requestType === 'http') {
                        body.request.method = this.getNodeParameter('monitorRequestMethod', i);
                    }
                    const tcpPorts = this.getNodeParameter('monitorTcpPorts', i, '');
                    if (tcpPorts) body.tcp_ports = tcpPorts;
                } else if (operation === 'update') {
                    method = 'PUT';
                    const id = this.getNodeParameter('monitorId', i);
                    url = `${baseUrl}/monitors/${id}`;
                    const requestType = this.getNodeParameter('monitorRequestType', i);
                    body = {
                        name: this.getNodeParameter('monitorName', i, ''),
                        url: this.getNodeParameter('monitorUrl', i, ''),
                        ssl_check: this.getNodeParameter('monitorSslCheck', i),
                        uptime_check_frequency: this.getNodeParameter('monitorUptimeCheckFrequency', i),
                        request: {
                            type: requestType,
                        },
                    };
                    if (requestType === 'http') {
                        body.request.method = this.getNodeParameter('monitorRequestMethod', i);
                    }
                    const tcpPorts = this.getNodeParameter('monitorTcpPorts', i, '');
                    if (tcpPorts) body.tcp_ports = tcpPorts;
                } else if (operation === 'delete') {
                    method = 'DELETE';
                    const id = this.getNodeParameter('monitorId', i);
                    url = `${baseUrl}/monitors/${id}`;
                } else if (operation === 'getStats') {
                    const id = this.getNodeParameter('monitorId', i);
                    url = `${baseUrl}/monitors/${id}/stats`;
                } else if (operation === 'getSnapshots') {
                    const id = this.getNodeParameter('monitorId', i);
                    url = `${baseUrl}/monitors/${id}/snapshots`;
                } else if (operation === 'getEvents') {
                    const id = this.getNodeParameter('monitorId', i);
                    url = `${baseUrl}/monitors/${id}/events`;
                } else if (operation === 'getChecks') {
                    const id = this.getNodeParameter('monitorId', i);
                    url = `${baseUrl}/monitors/${id}/checks`;
                } else if (operation === 'addNotificationChannel') {
                    method = 'POST';
                    const id = this.getNodeParameter('monitorId', i);
                    const type = this.getNodeParameter('channelType', i);
                    const value = this.getNodeParameter('channelValue', i);
                    url = `${baseUrl}/monitors/${id}/notification-channels/${type}`;

                    if (type === 'email') body = { email: value };
                    else if (type === 'phone-number') body = {
                        phone_number: value,
                        sms: this.getNodeParameter('smsValue', i, false),
                        calls: this.getNodeParameter('callValue', i, false),
                    };
                    else if (type === 'slack-webhook') body = { webhook_url: value };
                    else if (type === 'webhook' || type === 'ms-teams-webhook' || type === 'discord-webhook') body = { webhook: value };
                    else if (type === 'signl4') body = { signl4_webhook: value };
                    else body = { url: value };
                }
            } else if (resource === 'statusPage') {
                if (operation === 'getAll') {
                    url = `${baseUrl}/status-page`;
                } else if (operation === 'create' || operation === 'update') {
                    method = operation === 'create' ? 'POST' : 'PUT';
                    url = operation === 'create' ? `${baseUrl}/status-page` : `${baseUrl}/status-page/${this.getNodeParameter('statusPageId', i)}`;
                    body = {
                        title: this.getNodeParameter('statusPageTitle', i),
                        domain: this.getNodeParameter('statusPageDomain', i),
                        meta_title: this.getNodeParameter('statusPageMetaTitle', i),
                        uptime_threshold: this.getNodeParameter('statusPageUptimeThreshold', i),
                        remove_branding: this.getNodeParameter('statusPageRemoveBranding', i),
                        subscribe_to_updates: this.getNodeParameter('statusPageSubscribeToUpdates', i),
                        private: this.getNodeParameter('statusPagePrivate', i),
                        uptime_percentage_style: this.getNodeParameter('statusPageUptimePercentageStyle', i),
                        show_location_tooltip: this.getNodeParameter('statusPageShowLocationTooltip', i),
                        monitors: splitComma(this.getNodeParameter('statusPageMonitors', i, '')).map(Number),
                    };
                    if (body.private) {
                        body.password = this.getNodeParameter('statusPagePassword', i);
                    }
                } else if (operation === 'delete') {
                    method = 'DELETE';
                    const id = this.getNodeParameter('statusPageId', i);
                    url = `${baseUrl}/status-page/${id}`;
                }
            } else if (resource === 'statusPageMaintenance') {
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
                        timezone: timezone,
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
                } else if (operation === 'delete') {
                    method = 'DELETE';
                    const id = this.getNodeParameter('maintenanceId', i);
                    url = `${baseUrl}/status-page/maintenance/${id}`;
                }
            } else if (resource === 'statusPageIncident') {
                if (operation === 'getAll') {
                    const id = this.getNodeParameter('statusPageId', i);
                    url = `${baseUrl}/status-page/${id}/incidents`;
                } else if (operation === 'create') {
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
                } else if (operation === 'update') {
                    method = 'PUT';
                    url = `${baseUrl}/status-page/incidents/${this.getNodeParameter('incidentId', i)}`;
                    body = {
                        title: this.getNodeParameter('incidentTitle', i),
                    };
                } else if (operation === 'delete') {
                    method = 'DELETE';
                    const id = this.getNodeParameter('incidentId', i);
                    url = `${baseUrl}/status-page/incidents/${id}`;
                }
            } else if (resource === 'statusPageIncidentUpdate') {
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
                } else if (operation === 'delete') {
                    method = 'DELETE';
                    const id = this.getNodeParameter('incidentUpdateId', i);
                    url = `${baseUrl}/incidents/updates/${id}`;
                }
            }

            const requestOptions = {
                method,
                url,
                headers: {
                    Authorization: `${apiKey}`,
                },
                json: true,
            };

            if (method !== 'GET' && method !== 'DELETE') {
                requestOptions.body = body;
            }

            try {
                const response = await this.helpers.request(requestOptions);
                returnData.push({ json: response });
            } catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({ json: { error: error.message } });
                } else {
                    throw error;
                }
            }
        }

        return [returnData];
    }
}

module.exports = {
    Pulsetic,
};
