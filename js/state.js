'use strict';

let state = {
    page: {
        type: 'collection',
        name: 'Hot'
    },
    cvLink: 'files/franky_lau_cv.pdf',
    abouts: {
        name: 'Franky Lau',
        address: 'Tai Po, Hong Kong',
        email: 'killalau1988@hotmail.com',
        links: [
            { type: 'Facebook' },
            { type: 'Twitter' }
        ],
        skills: {
            'Frontend Development': [
                'JavaScript', 'TypeScript', 'jQuery', 'Backbone', 'ExtJs',
                'ReactJs', 'Bootstrap', 'HTML5', 'CSS3', 'LESS', 'WebSocket'
            ],
            'Web Development': [
                'Java', 'J2EE', 'Spring', 'SOPA', 'PHP', 'CodeIgniter', 'Node.js', 'Express.js'
            ],
            'Mobile Development': ['Android', 'PhoneGap'],
            'Database': ['Oracle', 'MySQL', 'MongoDB'],
            'Others Language': ['C', 'C++', 'C#', 'Perl'],
            'Version Control': ['Git', 'SVN']
        },
        profilePic: 'me.jpg'
    },
    cards: [
        {
            type: 'Work Experience',
            title: 'Orient Overseas Container Line (OOCL)',
            image: 'oocl.jpg',
            time: { from: '8/2014', to: null },
            links: [
                {
                    type: 'Website',
                    url: 'http://www.oocl.com'
                },
                {
                    type: 'LinkedIn',
                    url: 'https://www.linkedin.com/company/oocl'
                }
            ],
            details: [
                '<div><b>Orient Overseas Container Line (OOCL)</b></div>' +
                '<div><b>Assistant Technical Analyst</b></div>' +
                '<div><i>8/2014 - Present (1 year 9 months)</i></div>',

                '<ul>' +
                '<li>Information Service Department (Liner Project, Sales Management Module)</li>' +
                '<li><div>Job Nature: Product development, maintenance and release support </div>' +
                '<div>(Web-based Shipment Management System)</div></li>' +
                '<li>' +
                'My Job Duties / Tasks Done Before:' +
                '<ul>' +
                '<li>Feature enhance and bug fix for the Sales Management Module</li>' +
                '<li>Take over the UI development from Zhu Hai team</li>' +
                '<li>Establish UI development standard and procedure for the team</li>' +
                '<li>Support product release cutover</li>' +
                '<li>Lead fresh-grad trainee and summer intern</li>' +
                '</ul>' +
                '</li>' +
                '<li>Key Tech Involve: JavaScript, ExtJs, Java, Spring, SOAP, Web Logic, PLSQL, Oracle DB, Tibco BW, Maven, Git</li>' +
                '</ul>'
            ]
        },
        {
            type: 'Work Experience',
            title: 'ecVision Ltd',
            image: 'ecvision.jpg',
            time: { from: '7/2013', to: '8/2014' },
            links: [
                {
                    type: 'Website',
                    url: 'http://www.ecvision.com'
                },
                {
                    type: 'LinkedIn',
                    url: 'https://www.linkedin.com/company/amber-road'
                }
            ],
            details: [
                '<div><b>ecVision Ltd</b></div>' +
                '<div><b>Software Engineering</b></div>' +
                '<div><i>7/2013 - 8/2014 (1 year 2 months)</i></div>',

                '<ul>' +
                '<li>Product Development Team (UI Components Layer)</li>' +
                '<li><div>Job Nature: Product development, maintenance and front-end consulting </div>' +
                '<div>(Web-based Supply Chain Collaboration System)</div></li>' +
                '<li>' +
                'My Job Duties / Tasks Done Before:' +
                '<ul>' +
                '<li>Feature enhance and bug fix for UI components and rendering engine</li>' +
                '<li>Improve cross browser compatibility of the whole product</li>' +
                '<li>Improve front-end performance (web resource management, dynamic I18N caching)</li>' +
                '<li>Support other teams front-end issue (as consultant)</li>' +
                '<li>Research and prototype for high level requirements from management</li>' +
                '</ul>' +
                '</li>' +
                '<li>Key Tech Involve: JavaScript, TypeScript, jQuery, Backbone, Java, Spring, JBoss, Ant, Maven, SVN, Git</li>' +
                '</ul>'
            ]
        },
        {
            type: 'Work Experience',
            title: 'Information Technology Services Centre (ITSC), CUHK',
            image: 'itsc.jpg',
            time: { from: '5/2012', to: '3/2013' },
            links: [
                {
                    type: 'Website',
                    url: 'http://www.cuhk.edu.hk/itsc/'
                },
                {
                    type: 'Facebook',
                    url: 'https://www.facebook.com/itsc.cuhk'
                }
            ],
            details: [
                '<div><b>Information Technology Services Centre (ITSC), CUHK</b></div>' +
                '<div><b>Programmer (Part-time)</b></div>' +
                '<div><i>7/2013 - 8/2014 (11 months)</i></div>',

                '<ul>' +
                '<li>Build internal use web based system for student infringement complaint management</li>' +
                '<li>My job duties include design workflow, implement the system and testing</li>' +
                '<li>Key Tech Involve: C#, ASP.Net, SQL Server</li>' +
                '</ul>'
            ]
        },
        {
            type: 'Education',
            title: 'The Chinese University of Hong Kong (CUHK)',
            image: 'cuhk.jpg',
            time: { from: '9/2010', to: '7/2013' },
            links: [
                {
                    type: 'Website',
                    url: 'http://www.cuhk.edu.hk/'
                },
                {
                    type: 'Facebook',
                    url: 'https://www.facebook.com/pages/Chinese-University-of-Hong-Kong/109628095730081'
                }
            ],
            details: [
                '<div><b>The Chinese University of Hong Kong (CUHK)</b></div>' +
                '<div>Bachelor of Engineering in Information Engineering</div>' +
                '<div><i>9/2010 - 7/2013</i></div>'
            ]
        },
        {
            type: 'Education',
            title: 'HKU SPACE',
            image: 'hkuspace.jpg',
            time: { from: '9/2007', to: '7/2010' },
            links: [
                {
                    type: 'Website',
                    url: 'http://hkuspace.hku.hk/'
                },
                {
                    type: 'Facebook',
                    url: 'https://www.facebook.com/hkuspacecc'
                }
            ],
            details: [
                '<div><b>HKU SPACE</b></div>' +
                '<div>Higher Diploma in Information Technology</div>' +
                '<div><i>9/2007 - 7/2010</i></div>'
            ]
        },
        {
            type: 'Projects',
            title: 'Portfolio Website for a Designer',
            image: 'dalu.png',
            time: { from: '4/2015', to: '8/2015' },
            links: [
                {
                    type: 'Website',
                    url: 'http://dalu-lin.com/'
                },
                {
                    type: 'Facebook',
                    url: 'https://www.facebook.com/dalujacob'
                }
            ],
            details: [
                'Freelance Job',
                '<ul>' +
                '<li>Help a design to implement a portfolio website</li>' +
                '<li>Require a big video background and very unique interaction method</li>' +
                '<li>Key Tech Involve: jQuery, HTML5, PHP</li>' +
                '</ul>',
                '<img src="img/content/dalu_1.jpg" style="width: 50%;" />' +
                '<img src="img/content/dalu_2.jpg" style="width: 50%;" />' +
                '<img src="img/content/dalu_3.png" style="width: 50%;" />' +
                '<img src="img/content/dalu_4.png" style="width: 50%;" />'
            ]
        },
        {
            type: 'Projects',
            title: 'Website for a Production House',
            image: 'jpro.jpg',
            time: { from: '1/2014', to: '2/2014' },
            links: [
                {
                    type: 'Website',
                    url: 'http://j-pro.hk/'
                },
                {
                    type: 'Facebook',
                    url: 'https://www.facebook.com/JPro.Production'
                }
            ],
            details: [
                'Freelance Job',
                '<ul>' +
                '<li>Design and develop a website for a production house</li>' +
                '<li>Develop admin panel for album management</li>' +
                '<li>Key Tech Involve: jQuery, Bootstrap, PHP, CodeIgniter, DropzoneJS, MySQL</li>' +
                '</ul>',
                '<img src="img/content/jpro_1.jpg" style="width: 50%;" />' +
                '<img src="img/content/jpro_2.jpg" style="width: 50%;" />'
            ]
        },
        {
            type: 'Projects',
            title: 'Website for a Green Technology Startup Company',
            image: 'webdesign.jpg',
            time: { from: '1/2014', to: '3/2014' },
            details: [
                '<div>Freelance Job</div>' +
                '<div>The company is closed at mid-2014.</div>',
                '<ul>' +
                '<li>Design and develop a website for a green technology startup company</li>' +
                '<li>Support multi-language CMS</li>' +
                '<li>Key Tech Involve: jQuery, Bootstrap, PHP, CodeIgniter, TineMCE, Responsive filemanager, MySQL</li>' +
                '</ul>',
                '<img src="img/content/m1.jpg" style="width: 50%;" />' +
                '<img src="img/content/m2.jpg" style="width: 50%;" />' +
                '<img src="img/content/m3.jpg" style="width: 50%;" />' +
                '<img src="img/content/m4.jpg" style="width: 50%;" />' +
                '<img src="img/content/m5.jpg" style="width: 50%;" />' +
                '<img src="img/content/m6.jpg" style="width: 50%;" />'
            ]
        },
        {
            type: 'Projects',
            title: 'Android 3D Live Wallpaper Maker',
            image: '3d_wallpaper_apps.jpg',
            time: { from: '9/2012', to: '6/2013' },
            details: [
                'Final Year Project',
                '<ul>' +
                '<li>Application for users to build 3D scene, like playing LEGO</li>' +
                '<li>Final result can export as Live Wallpaper</li>' +
                '<li>Users can share wallpapers through Wi-Fi Direct</li>' +
                '<li>Key Tech Involve: Android, Java, OpenGL, Wi-Fi Direct, Socket programming</li>' +
                '</ul>',
                '<img src="img/content/3d_wallpaper_apps_1.jpg" style="width: 33%;" />' +
                '<img src="img/content/3d_wallpaper_apps_2.jpg" style="width: 33%;" />' +
                '<img src="img/content/3d_wallpaper_apps_3.jpg" style="width: 33%;" />'
            ]
        },
        {
            type: 'Projects',
            title: 'Bomberman Online in Browser (School Project)',
            image: 'bomberman.jpg',
            time: { from: '3/2013', to: '5/2013' },
            links: [
                {
                    type: 'Github',
                    url: 'https://github.com/killalau/BombermanOnline'
                },
                {
                    type: 'Youtube',
                    url: 'https://youtu.be/CLCH7SGPlUM?t=2m'
                },
                {
                    type: 'Youtube',
                    url: 'https://youtu.be/9HnpZkt2UQY?t=9s'
                }
            ],
            details: [
                'School Group Project',
                '<ul>' +
                '<li>Re-implement Bomberman Online</li>' +
                '<li>Game room base, multiplayer Bomberman</li>' +
                '<li>Key Tech Involve: HTML5, Javascript, WebSocket, PHP, Node.js, MySQL</li>' +
                '</ul>'
            ]
        },
        {
            type: 'Awards',
            title: 'Dean’s List, Faculty of Engineering CUHK',
            image: 'awards.jpg',
            time: { from: '9/2012', to: '7/2013' },
            details: [
                'Awards years: 2013'
            ]
        },
        {
            type: 'Awards',
            title: 'Departmental Prize, Chung Chi College CUHK',
            image: 'awards.jpg',
            time: { from: '9/2012', to: '7/2013' },
            details: [
                'Awards years: 2013'
            ]
        },
        {
            type: 'Awards',
            title: 'Chung Chi College Scholarship, Chung Chi College CUHK',
            image: 'awards.jpg',
            time: { from: '9/2011', to: '7/2013' },
            details: [
                'Awards years: 2012, 2013'
            ]
        },
        {
            type: 'Awards',
            title: 'Mok Yip Sui Hang Scholarship, HKUSPACE Community College',
            image: 'awards.jpg',
            time: { from: '9/2009', to: '7/2010' },
            details: [
                'Awards years: 2010'
            ]
        },
        {
            type: 'Awards',
            title: 'Academic Excellence, HKUSPACE Community College',
            image: 'awards.jpg',
            time: { from: '9/2007', to: '7/2010' },
            details: [
                'Awards years: 2008, 2010'
            ]
        },
        {
            type: 'Awards',
            title: 'Principal’s Honours List, HKUSPACE Community College',
            image: 'awards.jpg',
            time: { from: '9/2007', to: '7/2010' },
            details: [
                'Awards years: 2008, 2009, 2010'
            ]
        },
        {
            type: 'Others',
            title: 'Programming Skills',
            image: 'html-coding.jpg',
            time: { from: null, to: null },
            details: [
                '<table>' +
                '<tr>' +
                '<th>Frontend Development</th>' +
                '<td>JavaScript, TypeScript, jQuery, Backbone, ExtJs, ReactJs, Bootstrap, HTML5, CSS3, LESS, WebSocket</td>' +
                '</tr>' +
                '<tr>' +
                '<th>Web Development</th>' +
                '<td>Java, J2EE, Spring, SOPA, PHP, CodeIgniter, Node.js, Express.js</td>' +
                '</tr>' +
                '<tr>' +
                '<th>Mobile Development</th>' +
                '<td>Android, PhoneGap</td>' +
                '</tr>' +
                '<tr>' +
                '<th>Database</th>' +
                '<td>Oracle, MySQL, MongoDB</td>' +
                '</tr>' +
                '<tr>' +
                '<th>Others Language</th>' +
                '<td>C, C++, C#, Perl</td>' +
                '</tr>' +
                '<tr>' +
                '<th>Version Control</th>' +
                '<td>Git, SVN</td>' +
                '</tr>' +
                '</table>'
            ]
        },
        {
            type: 'Others',
            title: 'Language Skills',
            image: 'language.jpg',
            time: { from: null, to: null },
            details: [
                'Good at Cantonese, English and Mandarin.'
            ]
        }
    ]
};

export default state;
