# CaseTrak

A laboratory information management system that fulfills all your case file tracking needs. Advance towards a paperless system where case information and evidence tracking is performed all on one platform. CaseTrak will improve efficiency and organization within your laboratory. Rely on this centralized hub where all case-related data is securely stored and easily accessible.

## Request Methods:
| Method | URL                                         | Description                                                    |
|--------|---------------------------------------------|----------------------------------------------------------------|
| GET    | /casefiles/all                              | Retrieve all casefiles.                                        |
| GET    | /casefiles/:id                              | Retrieve casefile with specific id with evidence and investigators. |
| POST   | /casefiles                                   | Create a new casefile.                                         |
| PUT    | /casefiles/:id                               | Update the casefile with the specific id.                      |
| DELETE | /casefiles/:id                               | Delete the casefile with the specific id.                      |
| GET    | /casefiles/:id/evidence                      | Retrieve all evidence.                                         |
| GET    | /casefiles/:id/evidence/:evidenceId          | Retrieve evidence with specific evidenceId.                    |
| POST   | /casefiles/:id/evidence                      | Create a new evidence for the casefile with the specific id.   |
| GET    | /casefiles/:id/investigators                 | Retrieve all investigators.                                    |
| GET    | /casefiles/:id/investigators/:investigatorId | Retrieve investigator with specific investigatorId.            |
| POST   | /casefiles/:id/investigators                 | Create a new investigator for the casefile with the investigator id.|

<br/>

## Technologies Used:
- NESTJS <br/>
- JavaScript <br/>
- TypeScript <br/>
- MongoDB <br/>
- Mongoose <br/>
- CORS <br/>
- JWT/Bcyprt<br/>
- dotenv <br/>

## Resources:
- Lecture Notes <br/>
- Youtube Videos <br/>
- Stack Overflow <br/>
- ChatGpt <br/>

## Click to view CaseTrak:
- [Live View](https://casetrak-53d2d75f5275.herokuapp.com/ 'Live View') 
- [Frontend Repo](https://github.com/bonnil1/CaseTrak---frontend 'CaseTrak Frontend')
- [Backend Repo](https://github.com/bonnil1/CaseTrak 'CaseTrak Backend')

## Trello Board:
- [Trello Board](https://trello.com/b/psv0MMmV/capstone 'Trello')

## Next Steps: 
- Add an upload PDF function for case notes + reports.
- Add a fifth model that includes testimony information.
- Finish full CRUD for evidence + investigator routes.
- Dropdown menus for forms that have set options.