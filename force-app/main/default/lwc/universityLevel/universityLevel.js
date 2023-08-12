import { LightningElement } from 'lwc';

export default class UniversityLevel extends LightningElement {
    ststusuniversity="status is closed by university";
    collegeInformation=[

        {
            name:"Ramdev Baba Engineering",
            fees:200000,
            seats:500           
        },
        {
            name:"YCC Engineering",
            fees:300000,
            seats:400           
        }
    ];
}