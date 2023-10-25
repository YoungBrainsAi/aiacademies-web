import React from 'react';
import { NextPage } from 'next';
import { PageHeader } from '~/components/PageHeader';
import Image from 'next/image';
import rayhan from '~/public/img/good_picture_rayhan.jpg';
import saketh from '~/public/img/saketh.jpg';
import nathan from '~/public/img/nathan.jpg';
import william from '~/public/img/william.jpg';

const About: NextPage = () => (
    <>
        <PageHeader title="About Us" />
        <div className="container py-10">
            <h1>Our Team</h1>
            <br/>
            <div className="lg:flex gap-10 mb-5">
                <div>
                    <br/>
                    <Image src={rayhan} alt="Rayhan Zirvi" layout="fixed" width={660 / 4} height={750 / 4} />
                </div>
                <div>
                    <h3>Rayhan Zirvi, Founder and CEO</h3>
                    <p>Rayhan Zirvi is a freshman at Caltech who is passionate about helping others learn about computer science and AI. He has qualified for the USACO Platinum division, reached Master on Codeforces, qualified for AIME twice, and placed 11th in the US at Google Kick Start. He has partnered with <a className="underline text-blue-600" href="https://theeduproject.net/" target="_blank" rel="noreferrer">The Education Project By Humanity First USA</a> and <a className="underline text-blue-600" href="https://aa.academy/" target="_blank" rel="noreferrer">Ayesha Ali Academy</a> to develop their AI curriculum and teach through instructional web seminars. He also served as a director for <a className="underline text-blue-600" href="https://hocohoc.com/" target="_blank" rel="noreferrer">Howard County Hour of Code</a>, where he raised over $20,000 in sponsorships, directed content, and outreached to schools. In his free time, he enjoys watching the NBA, playing basketball, and playing golf.</p>
                </div>
            </div>
            <div className="lg:flex gap-10 mb-5">
                <div>
                    <br/>
                    <Image src={saketh} alt="Saketh Sundar" layout="fixed" width={700 / 4} height={676 / 4} />
                </div>
                <div>
                    <h3>Saketh Sundar, Founder</h3>
                    <p>Saketh Sundar is a freshman at Harvard interested in the intersection of computational sciences with other fields within STEM. He is involved in multiple STEM extracurricular activities at school and holds leadership positions in Science Olympiad, Maryland Technology Honor Society, and AI Club. His research interests are in applying machine learning methods to environmental and medical science problems, and he has pursued these through a variety of different research internships. In his free time, Saketh enjoys watching football and movies.</p>
                </div>
            </div>
            <div className="lg:flex gap-10 mb-5">
                <div>
                    <br/>
                    <Image src={william} alt="William Zhong" layout="fixed" width={820 / 4} height={770 / 4} />
                </div>
                <div>
                    <h3>William Zhong, Chief Operating Officer</h3>
                    <p>William Zhong is a senior at River Hill High School. He is co-president of his school&apos;s AI/Machine Learning club and qualified for AIME twice. His interests involve applying machine learning to understand more about our world and improve society through health care and astronomy which he has pursued through various research internships. In his free time, William enjoys watching soccer, drawing, and expanding his LEGO Speed Champions collection.</p>
                </div>
            </div>
            <div className="lg:flex gap-10 mb-5">
                <div>
                    <br/>
                    <Image src={nathan} alt="Nathan Zhong" layout="fixed" width={800 / 4} height={676 / 4} />
                </div>
                <div>
                    <h3>Nathan Zhong, Outreach Director</h3>
                    <p>Nathan Zhong is a senior at River Hill High School. He is the Co-President of his school&apos;s programming club and co-coaches his middle school math team. Nathan has also participated in a variety of community service events and nonprofits, hoping to utilize his experiences to better promote passion for AI in the community. In his free time, Nathan loves playing basketball and exploring the intersections between AI and public health.</p>
                </div>
            </div>
        </div>
    </>
);
export default About;
