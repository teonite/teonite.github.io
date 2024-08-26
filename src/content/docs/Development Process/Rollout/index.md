---
title : "Production Rollout Guidelines"
---


# 

**Author:** Robert Olejnik  
**Email:** [robert@teonite.com](mailto:robert@teonite.com)  
**Mobile:** +48 791 91 91 11  
**Copyright © TEONITE**


## Executive Summary

The purpose of this document is to showcase various ways of deploying a product to the market at different stages. 
Each stage requires specific resources, both human and technical. Thus, it’s crucial to be conscious while planning the rollout.

## Rollout Modes

- **Development Environment:**  
  Used and owned by the development team to showcase the results of ongoing development. It cannot be considered as an environment for anything else.
  
- **Staging:**  
  A system that works similarly to the development environment but is controlled by the partner/client. Staging is meant for internal testing and not for customer use.
  
- **Soft Launch:**  
  At this stage, most of the technology and processes are in place but targeted at a smaller audience (e.g., beta/alpha testers). Not all recommended technologies, processes, and staff may be in place.
  
- **Production Launch:**  
  At this stage, all technology, processes, and staff should be prepared to monitor and operate the system. The production launch can vary in scale, affecting the number of system instances running and the required staff to operate and monitor the environment.

## Technological Components

- **Production Environment:**  
  Can consist of one or more servers, depending on the system's architecture and requirements for speed and reliability. Larger systems might have clusters of servers on each continent for enhanced speed and reliability.
  
- **Backup System:**  
  A dedicated solution or server located in a different physical location than the production environment for safety concerns. It takes snapshots of system data for backup purposes. Note that backup systems do not provide 100% data coverage as backups are processed and transferred in intervals.
  
- **Monitoring System:**  
  A solution that monitors various components of the production environment (e.g., database server, core system, backup system) and notifies relevant parties about issues.
  
- **Observability Platform:**  
  A system that assists both the creative engineering team and operations/support team in observing, measuring, and fine-tuning the code, architecture, and infrastructure of the entire system.
  
- **Cluster:**  
  A set of servers and technological components forming a fault-tolerant and reliable system. A minimum of three physical servers is required to create a quorum for system decisions and monitoring.

## Requirements for a Rollout

### Staging

Minimal requirements for a staging server are:
- One instance of servers (depending on system architecture)
- No backup
- No monitoring
- Observatory (nice to have but not required)
- Cluster solutions (not required)

### Soft Launch

Minimal requirements for a soft launch server are:
- One instance of servers (depending on system architecture)
- Backup (if user data should be retained for production launch)
- Monitoring (depending on system availability requirements)
- Observatory (nice to have but not required)
- Cluster solutions (not required)

### Production Launch

Minimal requirements for a production launch are:
- Infrastructure (depends on business requirements for availability, continuity, and reliability; may include various server configurations or clusters in multiple locations)
- Backup (required)
- Monitoring (required)
- Observatory (nice to have but not required)

## Processes and Staff

Depending on the desired rollout, various processes and staff members are needed to operate the environment. Even if the system is fully operational and automated, there must be procedures and agreements between the supporting party and business owners on how to react in various scenarios. Considerations include:

- **Day-to-Day Operations:**  
  - Log monitoring  
  - Backup monitoring  
  - Server and system security updates

- **Possible Problems:**  
  - System unavailability  
  - System failure/error  
  - Infrastructure failure (backup restore procedures, hardware swap procedures)  
  - Data corruption  
  - Mitigation of system attacks (e.g., unauthorized access attempts, system slowdowns, or malicious use)

- **Security Breach:**
  Addressing security breaches is crucial to maintain system integrity.

## Security

Security must be addressed at various project stages. Before production launch (both soft and full launch), ensure:

- **Secure Infrastructure:**  
  The production rollout architecture must meet security requirements. Implement security measures like firewalls, VPNs for operations/business teams, site-to-site VPNs for backups and monitoring, and backup encryption.
  
- **System Pentesting:**  
  Hire an external company to perform penetration testing on the production environment to identify vulnerabilities. This step is critical as modern systems often incorporate third-party components that may contain security flaws.

## Formal Requirements

Some systems need to comply with specific formal and legal requirements, which must be considered when designing the production environment.

Specific examples of formal and legal requirements that might impact production environment design include:

- Industry-specific standards: For example, healthcare systems might need to comply with HIPAA, financial institutions with PCI DSS, and government agencies with FISMA.
- Data privacy regulations: GDPR, CCPA, and HIPAA are examples of regulations that govern the collection, storage, and use of personal data.
- Accessibility standards: WCAG (Web Content Accessibility Guidelines) and Section 508 of the Rehabilitation Act are examples of accessibility standards that require websites and applications to be usable by people with disabilities.
- Security regulations: Regulations like NIST 800-171 and ISO 27001 provide frameworks for implementing security measures to protect sensitive data.
