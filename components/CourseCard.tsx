import React from 'react';
import Link from 'next/link';
import { RiFileCopy2Line } from 'react-icons/ri';
import { Card } from '~/components/Card';
import { Course } from '~/types/api';

interface CourseCardProps {
    course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => (
    <Link href={`/courses/${course.id}`} passHref>
        <a className="no-underline">
            <Card className="!p-0 duration-500 hover:-translate-y-2">
                <img
                    src={course.banner}
                    alt={course.name}
                    className="h-60 w-full object-cover rounded-t-2xl"
                />
                <div className="p-4">
                    <h4>{course.name}</h4>
                    <p className="inline-flex items-center text-slate-400">
                        <RiFileCopy2Line size={22} className="mr-2" />
                        {course.num_lessons} Lesson{course.num_lessons === 1 ? '' : 's'}
                    </p>
                </div>
            </Card>
        </a>
    </Link>
);
