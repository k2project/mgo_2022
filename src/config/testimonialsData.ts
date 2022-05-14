export enum Country {
    USA,
    UK,
    Croatia,
    Spain,
    SA,
    Cyprus,
    Scotland,
}
export interface ITestimonial {
    quote: string;
    featured?: boolean;
    author: string;
    role: string;
    country: Country;
    link?: string;
}

const t1: ITestimonial = {
    quote: 'During our time together, Murray always displayed two must - have attributes in the judging world : patience and flexibility. As an open minded person he is always able to approach a performance on its own terms. We appreciate him as a dancer, choreographer, director, artist and also highly appreciate him spreading the word and DanceStar spirit among fellow UK dancers and choreographers. With his ability to analyze, compare and rank he manages to effectively express the dancer’s success or shortcomings in an encouraging and effective manner and maintain a level of professionalism and respect at all times.',
    author: 'Tajana Pagitz',
    role: 'CEO DanceStar, Worldwide Dance Competition',
    country: Country.Croatia,
    link: 'http://www.dancestar.org',
    featured: true,
};
const t2: ITestimonial = {
    quote: 'We work closely with Murray in a number of ways, as a leading industry creative, his skills, imagination and personality help us bring our theatrical projects to life through stunning direction and choreography. He also works as an ambassador for ted, delivering interactive workshops at the foremost performing arts colleges around the world. As an artistic expert he helps build relationships for us, with the highest calibre of performers and creatives from the US and UK theatre and entertainment scene. Finally, he is a joy to have as part of the wider creative team.',
    author: 'Steve Leatham, FEAA',
    role: 'Creative Director, ted',
    country: Country.UK,
    link: 'https://www.tedgroup.com',
    featured: true,
};
const t3: ITestimonial = {
    quote: 'The most striking thing for me about Murray isn’t just his incredible ability as a professional dancer, or the respect I have for his extensive capability as a choreographer, but as a teacher, he has the ability to see your potential, beyond even your own ideas of what that potential might be. He has the facility and the unwavering passion to get you there - and he won’t rest until you do. Trust me.',
    author: 'Thomas Doherty',
    role: 'TV & Movie Actor',
    country: Country.UK,
    link: 'https://www.imdb.com/name/nm6015235/',
};
const t4: ITestimonial = {
    quote: 'Murray has been associated with the IAB from its launch and was instrumental in its original recruitment campaigns. Over the years Murray has represented the IAB with a series of successful international masterclass tours. Murray´s classes and audition masterclasses are always very popular with students. He has been a loyal supporter of the IAB from the outset and has helped us with his talent and advice.',
    author: 'Mark Lethem',
    role: 'Managing Director at IAB',
    country: Country.Spain,
    link: 'https://www.iabarcelona.com',
    featured: true,
};
const t5: ITestimonial = {
    quote: 'SA Dance Talent hosts various qualifiers for international dance competitions in South Africa every year, and over the past 8 years we have invited various international choreographers and judges from all over the world to be on our judging panels. Murray Grant joined us in 2018 on the DanceStar South Africa qualifiers judging panel and has truly been one of our favourite judges over the past years. Judging two qualifiers with over 1800 routines for 11 days, Murray was professional all the time scoring each routine fairly and writing valuable feedback for each dance. Murray was the entire time courteous, warm and friendly and freely sharing his valuable knowledge of dance with all the South African dancers, teachers and staff. After the two week event I realised that Murray does all of this because he has an immense passion for dance and loves sharing this passion with dancers from all over the world. We would be honoured to have Murray anytime back in South Africa.',
    author: 'Chris Stapelberg',
    role: 'Director of SA Dance Talent',
    country: Country.SA,
    link: 'http://www.dancestar.co.za',
    featured: true,
};
const t6: ITestimonial = {
    quote: 'Murray produced my entire European tour. He is extremely efficient and detail-oriented during the booking process. His budgeting and negotiating skills are unparalleled and you can always rely on him to respond in a timely manner.',
    author: 'Natalie Weiss',
    role: 'YouTube & Broadway Singer',
    country: Country.USA,
    link: 'https://natalieweissofficial.com',
};
const t7: ITestimonial = {
    quote: 'I love working with Murray for the passion, drive and energy he brings to every job. Over the past 10 years I have worked with Murray, he has always understood my vision and exceeded my expectations. He strives for perfection with the utmost professionalism, he is highly creative and LOTS of fun to work with.',
    author: 'Valerie Fairnie',
    role: 'Events Manager, Bailie Gifford & Co',
    country: Country.UK,
    link: 'https://www.bailliegifford.com/en/uk/about-us/',
};
const t8: ITestimonial = {
    quote: 'Murray is a human Swiss Army knife for the performing arts! His ability to navigate the international arts scene, in all it’s facets, is unmatched.',
    author: 'Christina Bianco',
    role: 'Singer',
    country: Country.USA,
    link: 'https://www.christinabianco.com',
};
const t9: ITestimonial = {
    quote: "Murray has visited my Performing Arts school, Cyprus Performing Arts, in Nicosia on two occasions. Murray is a true professional with valuable industry knowledge. His choreography is amazing. He has a great rapport with the students, he inspires and challenges everyone when he enters the building. I have already booked him to visit again next year and we all can't wait for his visit.",
    author: 'Sarah Milne',
    role: 'Principal of Cyprus Performing Arts',
    country: Country.Cyprus,
};

const t10: ITestimonial = {
    quote: 'Murray and I go back a very long way. He and his team provide the talented dancers who add so much to the visual spectacle of The Bag Rockers. Over the years he has ensured the choreography meets the needs of our continually evolving show with refreshingly exciting, on the ball suggestions and solutions. An excellent problem solver, totally dependable, level-headed and trustworthy, a great guy to work with!',
    author: 'Gregor McPhie',
    role: 'Musician & Director, The Bag Rockers',
    country: Country.Scotland,
};
const t11: ITestimonial = {
    quote: 'I had a wonderful time collaborating with Murray Grant as both a producer and fellow educator of the arts. I was thrilled to get the opportunity to work with his students in Edinburgh - and he and his team at MGA are doing incredible work with the students as they venture into the professional world of show business. I also appreciate his passion for bringing Broadway artists to the UK as part of a mutually-fulfilling cultural exchange of ideas. His passion for bringing the arts to his hometown of Edinburgh is contagious and inspiring. I hope to have many more collaborations with Murray in the future.',
    author: 'Telly Leung',
    role: 'Performer &Producer',
    country: Country.USA,
    link: 'https://www.tellyleung.com',
};

const testimonialsDesktop = [
    [t4, t3],
    [t1],
    [t6, t7, t8],
    [t2, t10],
    [t11, t9],
    [t5],
];
const testimonialsLaptop = [
    [t4],
    [t3],
    [t1],
    [t6, t8],
    [t2],
    [t7, t10],
    [t11],
    [t9],
    [t5],
];
const testimonialsTablet = [
    [t1],
    [t2],
    [t3],
    [t4],
    [t5],
    [t6],
    [t7],
    [t8],
    [t9],
    [t10],
    [t11],
];

export { testimonialsDesktop, testimonialsTablet, testimonialsLaptop };
