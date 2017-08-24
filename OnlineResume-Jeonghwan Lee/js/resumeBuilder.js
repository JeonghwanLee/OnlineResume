var bio = {
	name: 'Jeonghwan Lee',
	role: 'Software Engineer',
	contacts: {
		mobile: '82-10-7492-2234',
		email: 'starmarin123@gmail.com',
		github: 'www.github.com/starmarin123',
		location: 'Seoul, South Korea'
	},
	welcomeMessage: 'Easy Choice, Hard Life. Hard Choice, Easy Life!',
	skills: ['HTML', 'CSS', 'JavaScript', 'C', 'jQuery', 'Assembly Language'],
	biopic: 'images/biopic.png'
};

var work = {
	jobs: [
		{
			employer: 'Texas Instruments Korea',
			title: 'Technical Sales Engineer',
			location: 'Seoul, KR',
			dates: 'Jan 2013 - Feb 2017',
			description: 'Field sales engineer in charge of creation a business with manufacturing customers such as Samsung and LG for making a revenue'
		},
		{
			employer: 'AVC Technolgy',
			title: 'Inventory Management & LCD Monitor Test Engineering Intern',
			location: 'Woodale, IL, US',
			dates: 'Aug 2011 - Jul 2012',
			description: 'Internship at customer repair-service company for LCD monitors and TV'
		}
	]
};

var projects = {
	projects: [
		{
			title: 'Build a Portfolio Site: Udacity Front-End Nanodegree Program',
			dates: 'May 2017',
			description: 'Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.<br>Language: HTML, CSS, JavaScript',
			images: ['images/proj31.png']
		},
		{
			title: 'Kitchen Timer in Microprocessors Design Lab Course',
			dates: 'Apr 2010 - Jun 2010',
			description: 'Implemented a kitchen timer function by programming PIC16F84 MCU<br>Hardware: Kitchen Timer Board, organized and soldered as the circuit diagram of the kitchen timer<br>Language: PIC16F84 Assembly Language',
			images: [
				'images/proj21.png',
				'images/proj22.png'
			]
		} 
	]
};

var education = {
	schools: [
		{
			name: 'Kyungpook National University',
			location: 'Daegu, Korea',
			degree: 'Bachelor\'s Degree',
			majors: ['Electronic Engineering'],
			dates: 'Mar 2005 - Feb 2012',
			url: 'http://en.knu.ac.kr/'
		},
	],
	onlineCourses: [
		{
			title: 'Linux Command Line Basics',
			school: 'Udacity',
			dates: 'Jul 2017',
			url: 'https://www.udacity.com/course/linux-command-line-basics--ud595'
		},
		{
			title: 'Front-End Web Developer Nanodegree',
			school: 'Udacity',
			dates: 'Mar 2017 - Sep 2017(plan)',
			url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		}
	]		
};

bio.display = function() {
	var myHTMLheaderName = HTMLheaderName.replace('%data%', bio.name);
	var myHTMLheaderRole = HTMLheaderRole.replace('%data%', bio.role);
	var newHTMLmobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var newHTMLemail = HTMLemail.replace('%data%', bio.contacts.email);
	var newHTMLgithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var newHTMLlocation = HTMLlocation.replace('%data%', bio.contacts.location);
	var newHTMLwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	var newHTMLbioPic = HTMLbioPic.replace('%data%', bio.biopic);
	$('#header').prepend(myHTMLheaderRole);
	$('#header').prepend(myHTMLheaderName);
	$('#header').append(newHTMLbioPic);
	$('#header').append(HTMLskillsStart);
	$('#header').append(newHTMLwelcomeMsg);
	for (var i = 0; i < bio.skills.length; i++) {
		var myHTMLskills = HTMLskills.replace('%data%', bio.skills[i]);
		$('#skills').append(myHTMLskills);
	}
	$('#topContacts').append(newHTMLmobile);
	$('#topContacts').append(newHTMLemail);
	$('#topContacts').append(newHTMLgithub);
	$('#topContacts').append(newHTMLlocation);
	$('#footerContacts').append(newHTMLmobile);
	$('#footerContacts').append(newHTMLemail);
	$('#footerContacts').append(newHTMLgithub);
	$('#footerContacts').append(newHTMLlocation);
};

work.display = function() {
	for (var j = 0; j < work.jobs.length; j++) {
		$('#workExperience').append(HTMLworkStart);
		var newHTMLworkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[j].employer);
		var newHTMLworkTitle = HTMLworkTitle.replace('%data%', work.jobs[j].title);
		var newHTMLworkEmployerTitle = newHTMLworkEmployer.concat(newHTMLworkTitle);
		var newHTMLworkDates = HTMLworkDates.replace('%data%', work.jobs[j].dates);
		var newHTMLworkLocation = HTMLworkLocation.replace('%data%', work.jobs[j].location);
		var newHTMLworkDescription = HTMLworkDescription.replace('%data%', work.jobs[j].description);
		$('.work-entry:last').append(newHTMLworkEmployerTitle);
		$('.work-entry:last').append(newHTMLworkDates);
		$('.work-entry:last').append(newHTMLworkLocation);
		$('.work-entry:last').append(newHTMLworkDescription);
	}
};

education.display = function() {
	for (var j = 0; j < education.schools.length; j++) {
		$('#education').append(HTMLschoolStart);
		var newHTMLschoolName = HTMLschoolName.replace('%data%', education.schools[j].name);
		var newHTMLschoolDegree = HTMLschoolDegree.replace('%data%', education.schools[j].degree);
		var newHTMLschoolDates = HTMLschoolDates.replace('%data%', education.schools[j].dates);
		var newHTMLschoolLocation = HTMLschoolLocation.replace('%data%', education.schools[j].location);
		var newHTMLschoolURL = HTMLschoolURL.replace('%data%', education.schools[j].url);
		$('.education-entry:last').append(newHTMLschoolName + newHTMLschoolDegree);
		$('.education-entry:last').append(newHTMLschoolDates);
		$('.education-entry:last').append(newHTMLschoolLocation);
		for (var i = 0; i < education.schools[j].majors.length; i++) {
			var newHTMLschoolMajor = HTMLschoolMajor.replace('%data%', education.schools[j].majors[i]);
			$('.education-entry:last').append(newHTMLschoolMajor);
		}
		$('.education-entry:last').append(newHTMLschoolURL);
		$('.schoolURL:last').attr('href', education.schools[j].url);
	}
	$('#education').append(HTMLonlineClasses);
	for (var k = 0; k < education.onlineCourses.length; k++) {
	 	$('#education').append(HTMLonlineStart);
		var newHTMLonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[k].title);
		var newHTMLonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[k].school);
		var newHTMLonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[k].dates);
		var newHTMLonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[k].url);		
		$('.online-class:last').append(newHTMLonlineTitle + newHTMLonlineSchool);
		$('.online-class:last').append(newHTMLonlineDates);
		$('.online-class:last').append(newHTMLonlineURL);
		$('.onlineURL:last').attr('href', education.onlineCourses[k].url);		
	}
};

projects.display = function() {
	for (var i = 0; i < projects.projects.length; i++) {
		var newHTMLprojectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
		var newHTMLprojectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
		var newHTMLprojectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(newHTMLprojectTitle);
		$('.project-entry:last').append(newHTMLprojectDates);
		$('.project-entry:last').append(newHTMLprojectDescription);
		for (var j = 0; j < projects.projects[i].images.length; j++)
		{
			var newHTMLprojectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
			$('.project-entry:last').append(newHTMLprojectImage);
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
$('#mapDiv').addClass('gray');
