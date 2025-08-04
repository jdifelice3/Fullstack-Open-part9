export interface HeaderProps {
  courseName: string;
}

export interface ContentProps {
    courseParts: CoursePart[]
}

export interface TotalProps {
    totalExercises: number;
}

export interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

export interface CoursePartBasic extends CoursePartBase, CoursePartDescription {
  kind: "basic"
}

export interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

export interface CoursePartBackground extends CoursePartBase, CoursePartDescription {
  backgroundMaterial: string;
  kind: "background"
}

export interface CoursePartDescription extends CoursePartBase {
  description: string;
}

export interface CoursePartRequirements extends CoursePartDescription {
    requirements: string[];
    kind: "requirements";
}

export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartRequirements;
