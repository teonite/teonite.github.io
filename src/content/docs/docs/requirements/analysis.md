---
    title: 'Requirements Analysis'
    subtitle: 'Define project objectives, stakeholders expectations and identify risks. After 2-3 daily workshops you will receive Project Brief documenting your solution in a professional way.'
    cover: '/images/services/dd.jpg'
   
---
TL;DR


## User Story Mapping

This aspect of the design process typically starts with a requirements list, project brief, Product Owner review, or workshops. We use an analysis method based on actors, processes, views, and business entities, which produces a list of requirements in the form of User Stories. One technique we use to define user-facing aspects of the system is User Story Mapping.

### Example User Story
“As an operator (actor) I can conclude an auction (process) in the auction administration panel (view) so that all bids (entity) are closed with either won or lost status.”

### Results
Artifacts created at this stage include:

- Description of actors and responsibilities
- Documentation of all identified User Stories (US) in the form of an initial Product Backlog
- Documentation of mapped processes
- Data flows (sequence diagrams)
- Algorithms (block diagrams)
- APIs Specification (optional)
- Business entities list (optional)

### Duration
This stage may involve multiple sprints (weeks) and online or stationary workshops, mixed with documentation and synthesis of collected information.

---


## Use Case #1: Authorized App Access

**Purpose:**  
To allow authorized users to access the web application's features.

**Actors:**  
User

**Precondition:**  
User has a valid account with the application.

**Postcondition:**  
User is successfully logged in and can access authorized features.

## Normal Flow:

1. User opens the application's login page.
2. User enters their valid username and password into the provided fields.
3. User clicks the "Login" button.
4. The application verifies the credentials against the authentication database.
5. If credentials are valid, the application redirects the user to the homepage or dashboard.

## Alternative Flows:

### Invalid Credentials:

- If the entered username or password is incorrect, the application displays an error message indicating invalid credentials.
- The user is prompted to try again.

### Account Locked:

- If the user's account is locked due to multiple failed login attempts, the application displays a message informing the user that their account is locked.
- The user is provided with instructions on how to unlock their account.

## Special Requirements:

- Login credentials should be stored securely using encryption.
- The application should implement measures to prevent brute force attacks.
- The login page should be accessible from all supported devices and browsers.

## Non-Functional Requirements:

- Login process should be fast and responsive.
- The login page should be visually appealing and user-friendly.
- The application should provide clear error messages and guidance.

## Additional Considerations:

- **Remember Me:** The application may provide an option for users to remember their login credentials for future visits.
- **Forgot Password:** The application should provide a mechanism for users to reset their password if they have forgotten it.
- **Two-Factor Authentication:** For enhanced security, the application may implement two-factor authentication, requiring users to provide a second form of verification (e.g., SMS code, authentication app) in addition to their password.

> **Note:** This is a basic example of a use case. Real-world use cases may be more complex and involve multiple actors, scenarios, and conditions. It's important to tailor the use case documentation to the specific requirements of your web application.

---

## Use Case #2: User-Initiated Data Import in Web Application

**Title:**  
Import Data via User Interaction

**Primary Actor:**  
Registered User

**Goal:**  
Allow a user to import data from a CSV file into the web application, ensuring that the data is correctly processed and integrated into the system.

### Stakeholders & Interests:

- **Registered User:** Wants to upload and import data quickly and without errors.
- **Data Administrator:** Monitors data quality and ensures the integrity of imported data.
- **End Users:** Depend on the accurate and timely availability of the imported data for their tasks.

### Preconditions:

- The user is logged into the web application.
- The user has the necessary permissions to import data (e.g., access to specific modules).
- The web application is configured to accept data imports in the required format (e.g., CSV).

### Postconditions:

- **Success Postcondition:** The data is successfully imported, validated, and integrated into the application, and the user receives a confirmation message.
- **Failure Postcondition:** The system rejects invalid data, and the user is notified of the specific errors, with no partial or corrupt data being imported.

### Main Success Scenario:

1. The user navigates to the "Import Data" section of the web application.
2. The user clicks on the "Upload File" button to initiate the import process.
3. The system displays a file upload dialog.
4. The user selects the CSV file from their local machine and clicks "Open."
5. The system uploads the file and displays a preview of the data, including a mapping of CSV columns to application fields.
6. The user reviews the data preview and mapping:
   - If the mappings are incorrect, the user can manually adjust them.
7. The user clicks the "Import" button to proceed.
8. The system validates the data:
   - Checks for correct formatting, required fields, and data consistency.
   - Identifies any errors or anomalies (e.g., missing values, duplicate entries).
9. If validation is successful, the system imports the data into the appropriate database tables.
10. The system displays a success message, confirming the import and providing a summary (e.g., number of records imported, any skipped records).
11. The imported data is immediately available for the user to view, search, or analyze within the application.

### Extensions:

- **5a. Data Preview Errors:**
  - The system identifies issues with the CSV file (e.g., missing columns, incorrect data types).
  - The system highlights the errors and provides suggestions for correction.
  - The user corrects the issues in the CSV file and re-uploads it.

- **8a. Data Validation Errors:**
  - The system detects errors during validation (e.g., format inconsistencies, required fields missing).
  - The system displays an error report to the user, detailing the issues.
  - The user can download the error report, correct the CSV file, and retry the import.

- **9a. Import Process Interrupted:**
  - If the import process is interrupted (e.g., network issues, system crash), the system rolls back any changes and notifies the user.
  - The user can retry the import once the issue is resolved.

### Alternative Flows:

- **6a. Automatic Mapping:**
  - The system automatically maps CSV columns to application fields based on predefined templates or previous imports.
  - The user only needs to review and confirm the mappings before proceeding with the import.

- **8b. Partial Import:**
  - If only a portion of the data is valid, the system asks the user if they want to proceed with importing only the valid records or cancel the operation.
  - If the user chooses to proceed, the system imports the valid records and provides a report on the skipped entries.

### Non-Functional Requirements:

- **Performance:** The system should process and validate imports within a reasonable time frame, even for large datasets.
- **Usability:** The import process should be straightforward, with clear instructions and feedback at each step.
- **Security:** The system should ensure that only authorized users can perform data imports, and data should be handled securely during the process.

> This use case describes the steps a user would take to import data into a web application, addressing the potential issues that could arise and the system's responses to those issues.
```