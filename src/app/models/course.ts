export class Course {
  
  constructor(
    public id: number,
    public name: string,
    public hours: number,
    public lessons: number,
    public professor: string
  ) {}
}
