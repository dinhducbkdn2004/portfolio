const ME = {
    name: 'Định Đức',
    avatar: '/image/me.jpg',
    avatar2: '/image/me-2.jpg',
    role: 'Frontend Developer',
    address: 'Đà Nẵng, Việt Nam',
    socials: [
        {
            icon: '/external/facebook.svg',
            name: 'Facebook',
            link: 'https://www.facebook.com/dinhduc2k4',
        },
        {
            icon: '/external/instagram.svg',
            name: 'Instagram',
            link: 'https://www.instagram.com/chocon2k4',
        },
        {
            icon: '/tech-stack/github-light.svg',
            iconDark: '/tech-stack/github-dark.svg',
            name: 'Github',
            link: 'https://github.com/dinhducbkdn2004',
        },
    ],
    addressEn: 'Da Nang, Vietnam',
    phoneNumber: '+84 779 488 960',
    email: 'dinhducbkdn2004@gmail.com',
    about: 'Tôi là một sinh viên chuyên ngành Công nghệ thông tin tại Đại học Bách Khoa Đà Nẵng. Tôi có đam mê với lập trình và thiết kế giao diện người dùng. Tôi đã tham gia vào nhiều dự án cá nhân và nhóm, nơi tôi đã phát triển kỹ năng lập trình và làm việc nhóm của mình.',
    aboutEn:
        'I am an Information Technology student at Da Nang University of Science and Technology. I have a passion for programming and user interface design. I have participated in many personal and group projects, where I have developed my programming skills and teamwork.',
    education: [
        {
            school: 'Đại học Bách Khoa Đà Nẵng',
            schoolEn: 'Da Nang University of Science and Technology',
            major: 'Công nghệ thông tin',
            majorEn: 'Information Technology',
            period: '2022 - 2024',
            description:
                'Chuyên ngành Công nghệ thông tin, tập trung vào phát triển phần mềm và thiết kế giao diện người dùng.',
            descriptionEn:
                'Majoring in Information Technology, focusing on software development and user interface design.',
        },
    ],
    skills: [
        { name: 'HTML', icon: '/tech-stack/html.svg' },
        { name: 'CSS', icon: '/tech-stack/css.svg' },
        { name: 'JavaScript', icon: '/tech-stack/javascript.svg' },
        { name: 'Java', icon: '/tech-stack/java.svg' },
        { name: 'Python', icon: '/tech-stack/python.svg' },
    ],
    libraries: [
        { name: 'React', icon: '/tech-stack/react.svg' },
        { name: 'Redux', icon: '/tech-stack/redux.svg' },
        { name: 'Tailwind CSS', icon: '/tech-stack/tailwindcss.svg' },
        { name: 'Ant Design', icon: '/tech-stack/ant-design.svg' },
        { name: 'Socket.io', icon: '/tech-stack/socket-io.svg' },
        { name: 'Node.js', icon: '/tech-stack/nodejs.svg' },
    ],
    tools: [
        { name: 'Git', icon: '/tech-stack/git.svg' },
        {
            name: 'GitHub',
            icon: '/tech-stack/github-light.svg',
            iconDark: '/tech-stack/github-dark.svg',
        },
        { name: 'Visual Studio Code', icon: '/tech-stack/vs-code.svg' },
        { name: 'Postman', icon: '/tech-stack/postman.svg' },
        { name: 'Figma', icon: '/tech-stack/figma.svg' },
        { name: 'Firebase', icon: '/tech-stack/firebase.svg' },
        { name: 'Vite', icon: '/vite.svg' },
    ],
    databases: [
        { name: 'MongoDB', icon: '/tech-stack/mongodb.svg' },
        { name: 'MySQL', icon: '/tech-stack/mysql.svg' },
    ],

    languages: [
        {
            name: 'Tiếng Anh',
            nameEn: 'English',
            description:
                'Trình độ trung cấp, có khả năng đọc hiểu tài liệu và giao tiếp cơ bản.',
            descriptionEn:
                'Intermediate level, able to read documents and communicate at a basic level.',
        },
    ],

    // experiences: [
    //     {
    //         company: 'XYZ Company',
    //         position: 'Frontend Developer',
    //         period: '2022 - Hiện tại',
    //         periodEn: '2022 - Present',
    //         description:
    //             'Phát triển và duy trì các ứng dụng web sử dụng React, TypeScript và Tailwind CSS.',
    //         descriptionEn:
    //             'Develop and maintain web applications using React, TypeScript and Tailwind CSS.',
    //     },
    //     {
    //         company: 'ABC Company',
    //         position: 'Junior Developer',
    //         period: '2020 - 2022',
    //         description:
    //             'Phát triển giao diện người dùng cho các ứng dụng web và mobile.',
    //         descriptionEn:
    //             'Develop user interfaces for web and mobile applications.',
    //     },
    // ],

    projects: [
        {
            name: 'Web chat & video call realtime - Connectica',
            type: 'Team project',
            typeEn: 'Team project',
            teamSize: 3,
            description:
                'Ứng dụng chat và video call thời gian thực sử dụng WebRTC và Socket.io với nhiều tính năng như chat nhóm, gửi file, tạo phòng chat riêng tư và công khai. Ứng dụng này cho phép người dùng tạo tài khoản và kết nối với bạn bè của họ.',
            descriptionEn:
                'Real-time chat and video call application using WebRTC and Socket.io with many features such as group chat, file sending, creating private and public chat rooms. This application allows users to create accounts and connect with their friends.',
            role: 'Frontend Developer',
            technologies: [
                'React',
                'Tailwind CSS',
                'Socket.io',
                'WebRTC',
                'Ant Design',
                'Axios',
            ],
            link: 'https://connectica.vercel.app/',
        },
        {
            name: 'Face Emotion Detection Website',
            type: 'Team project',
            typeEn: 'Team project',
            teamSize: 2,
            description:
                'Website nhận diện cảm xúc khuôn mặt sử dụng React và TensorFlow.js. Ứng dụng này cho phép người dùng tải lên ảnh hoặc nhận diện cảm xúc từ webcam của họ. Ứng dụng này sử dụng TensorFlow.js để nhận diện cảm xúc khuôn mặt và hiển thị kết quả cho người dùng.',
            descriptionEn:
                'Face emotion recognition website using React and TensorFlow.js. This application allows users to upload images or recognize emotions from their webcam. This application uses TensorFlow.js to recognize facial emotions and display results to users.',
            role: 'Frontend Developer',
            technologies: ['React', 'Tailwind CSS', 'Axios'],
            link: 'https://emotion-detection-website.vercel.app/',
        },
    ],

    // Các chuỗi đã dịch cho giao diện
    ui: {
        vi: {
            overview: 'Tổng quan',
            about: 'Về tôi',
            skills: 'Kỹ năng',
            experience: 'Kinh nghiệm',
            projects: 'Dự án',
            programmingSkills: 'Kỹ năng lập trình',
            libraries: 'Thư viện và Framework',
            tools: 'Công cụ',
            databases: 'Cơ sở dữ liệu',
            noExperience: 'Chưa có kinh nghiệm làm việc.',
            copyright: 'Tất cả các quyền được bảo lưu.',
            builtWith: 'Được xây dựng với React và Tailwind CSS',
        },
        en: {
            overview: 'Overview',
            about: 'About me',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            programmingSkills: 'Programming Skills',
            libraries: 'Libraries & Frameworks',
            tools: 'Tools',
            databases: 'Databases',
            noExperience: 'No work experience yet.',
            copyright: 'All rights reserved.',
            builtWith: 'Built with React and Tailwind CSS',
        },
    },
};

export default ME;
