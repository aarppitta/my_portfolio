// TODO: replace github URLs with your real repo links
export const projects = [
  {
    name: 'L2 LineSync — WebSCADA System',
    tag: 'Production System',
    featured: true,
    description:
      'L2 industrial process-monitoring platform that acquires real-time data from the L1 server and displays live machine status, alarms and process values across production lines. Includes recipe management, multi-tier RBAC, machine configuration, database backup/restore, and 21 CFR Part 11 digital signatures with a tamper-evident audit trail. The FastAPI backend ships as a PyInstaller executable running as an NSSM Windows service.',
    stack: ['Angular', 'FastAPI', 'Python', 'MySQL', 'PyInstaller', 'NSSM', '21 CFR Part 11'],
    github: null,
    demo: null,
    accent: 'industrial',
  },
  {
    name: 'OPC Server — Custom Industrial Data Gateway',
    tag: 'Production System',
    featured: true,
    description:
      'Custom Python OPC server built from scratch as an open-source alternative to commercial servers such as Kepware, at zero licensing cost. A pluggable, protocol-agnostic driver architecture ships four production drivers (Modbus TCP/RTU, FINS Serial, FINS Ethernet, OPC-UA) and persists live PLC data into a normalised MySQL schema for historical analysis, trends and alarm logging.',
    stack: ['Python', 'Django', 'MySQL', 'OPC-UA', 'Modbus TCP/RTU', 'FINS Serial', 'FINS Ethernet'],
    github: null,
    demo: null,
    accent: 'industrial',
  },
  {
    name: 'Pulse Connect — OPC-UA Tag Browser & Config Generator',
    tag: 'Industrial Tooling',
    featured: true,
    description:
      'Full-stack tool that connects to an OPC-UA server, browses the tag namespace and lets engineers classify tags as Process or Alarm tags through a guided UI. Generates a structured config.ini consumed directly by data-logging services, cutting commissioning time for new machines.',
    stack: ['Python', 'OPC-UA (asyncua)', 'Angular', 'FastAPI', 'MySQL'],
    github: null,
    demo: null,
    accent: 'industrial',
  },
  {
    name: 'Compression Machine Interface — Angular SCADA',
    tag: 'SCADA',
    featured: true,
    description:
      'Angular SCADA application with real-time operator screens for compression machines: machine status, process values, operator controls and parameter configuration. Defined the data interface contract with the LabVIEW / Zenon backend layer, and leading junior developers on architecture, code review and delivery.',
    stack: ['Angular', 'TypeScript', 'LabVIEW', 'Zenon', 'SCADA'],
    github: null,
    demo: null,
    accent: 'industrial',
  },
  {
    name: 'Pharma Processing Machine — Configuration Tool',
    tag: 'Pharma Manufacturing',
    featured: true,
    description:
      'Python utility that generates validated config.ini files for pharma processing machines (IP addresses, database settings and trigger bits), eliminating manual INI editing errors. Deployed in a regulated pharma manufacturing environment ahead of production runs.',
    stack: ['Python', 'config.ini', 'Industrial Protocols'],
  },
];
