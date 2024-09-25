// types/api.d.ts

export type BaseCourse = {
    id: number;
    num_lessons: number;
    name: string;
    banner: string;
    featured: boolean;
};

export type Course = {
    id: number;
    lessons: Lesson[];
    quizzes: Quiz[];
    total_duration: number;
    name: string;
    banner: string;
    featured: boolean;
    description: string;
    difficulty: number;
    enrolled: number;
};

export type CourseUnit = {
    id: number;
    course_id: number;
    number: number;
    title: string;
};

export interface Lesson extends CourseUnit {
    duration_minutes: number;
    points: number;
    content: string;
}

export interface Quiz extends CourseUnit {
    questions: QuizQuestion[];
}

export type QuizQuestion = {
    context?: string;
    question: string;
    multiple_choice: boolean;
    choices?: string[];
};

export type QuizAttempt = {
    id: number;
    // Removed course_id as it's not provided by the API
    title: string;
    questions: {
        context?: string;
        question: string;
        correct_answer: string;
    }[];
    answers: {
        [key: string]: string;
    };
    score: number;
};

// Typed Units for Frontend Navigation
export type TypedLesson = Lesson & { type: 'lesson' };
export type TypedQuiz = Quiz & { type: 'quiz' };
export type TypedCourseUnit = TypedLesson | TypedQuiz;
