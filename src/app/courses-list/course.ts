import { ICourse } from './i-course';

export class Course implements ICourse {
    public id: number;
    public title: string;
    public date: string;
    public duration: string;
    public description: string;
    constructor() {}
}
