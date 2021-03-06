import React from 'react';
import { NextPage } from 'next';
import { PageHeader } from '~/components/PageHeader';
import Image from 'next/image';
import rayhan from '~/public/img/rayhan.jpg';
import saketh from '~/public/img/saketh.jpg';

const About: NextPage = () => (
    <>
        <PageHeader title="About Us" />
        <div className="container py-10">
            <h1>Founders</h1>
            <br/>
            <div className="lg:flex gap-10 mb-5">
                <div>
                    <br/>
                    <Image src={rayhan} alt="Rayhan Zirvi" layout="fixed" width={598 / 4} height={676 / 4} />
                </div>
                <div>
                    <h3>Rayhan Zirvi</h3>
                    <p>Rayhan Zirvi is a rising senior at River Hill High School. He is passionate about helping others learn about computer science and AI. He has qualified for the USACO Gold division, qualified for AIME, reached Candidate Master on Codeforces, and placed 11th in the US at Google Kick Start. He has partnered with <a className="underline text-blue-600" href="https://theeduproject.net/" target="_blank" rel="noreferrer">The Education Project By Humanity First USA</a> and <a className="underline text-blue-600" href="https://aa.academy/" target="_blank" rel="noreferrer">Ayesha Ali Academy</a> to develop their AI curriculum and teach through instructional web seminars. He also served as a director for <a className="underline text-blue-600" href="https://hocohoc.com/" target="_blank" rel="noreferrer">Howard County Hour of Code</a>, where he raised over $20,000 in sponsorships, directed content, and outreached to schools. In his free time, he enjoys watching the NBA, playing basketball, and playing golf.</p>
                </div>
            </div>
            <div className="lg:flex gap-10 mb-5">
                <div>
                    <br/>
                    <Image src={saketh} alt="Saketh Sundar" layout="fixed" width={598 / 4} height={676 / 4} />
                </div>
                <div>
                    <h3>Saketh Sundar</h3>
                    <p>Saketh Sundar is a rising senior at River Hill High School interested in the intersection of computational sciences with other fields within STEM. He is involved in multiple STEM extracurricular activities at school and holds leadership positions in Science Olympiad, Maryland Technology Honor Society, and AI Club. His research interests are in applying machine learning methods to environmental and medical science problems, and he has pursued these through a variety of different research internships. In his free time, Saketh enjoys watching football and movies.</p>
                </div>
            </div>
        </div>
    </>
);

export default About;
