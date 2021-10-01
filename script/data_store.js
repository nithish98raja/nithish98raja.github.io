/****
  * File containing content to be displayed on site
  *
  */

// Store data for home tab as JSON object
const home_content = {
  "name": "Nithish Raja",
  "description": "Hello, I am Nithish Raja. A masters student at IIIT Hyderabad. I hate talking about myself, but I have to make this paragraph as long as possible to prevent a bunch of CSS from breaking. I am passionate about building complex systems. Untill a while ago, I was doing a lot of work in the application layer (see project tab and github). However, I am now trying to move closer to the kernel level. This shift began after I started learning about Andrew Tannenbaum, Linus Torvalds, Leslie Lamport and Richard Stallman. The common factor among the four is that they all solved whatever problem they were facing by building a system of their own. I too strive to reach such a stage where not only me, but everyone can benefit from my work.",
  "image": "images/NithishRaja.jpg"
};

// Store data for education tab as JSON object
const education_content = [
  {
    "institute": {
      "name": "IIIT H",
      "logo": "https://images.shiksha.com/mediadata/images/1571920801phpDEQFI7.jpeg",
      "website": "https://iiit.ac.in/",
      "location": "Hyderabad"
    },
    "degree": "CSE M.Tech",
    "duration": {
      "start": "August 2021",
    }
  },
  {
    "institute": {
      "name": "BITS Pilani",
      "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/185px-BITS_Pilani-Logo.svg.png",
      "website": "https://bits-pilani.ac.in/hyderabad/",
      "location": "Hyderabad"
    },
    "degree": "Mechanical B.E.",
    "duration": {
      "start": "August 2016",
      "end": "May 2020"
    }
  },
  {
    "institute": {
      "name": "K.P.C.V.S.S",
      "logo": "https://pl.respaper.com/160/s.3edc9a3222.jpg",
      "website": "http://kpcvs.co.in/",
      "location": "Chennai"
    },
    "degree": "11th and 12th",
    "duration": {
      "start": "June 2014",
      "end": "April 2016"
    }
  },
  {
    "institute": {
      "name": "K.P.C.V.S.S",
      "logo": "https://pl.respaper.com/160/s.3edc9a3222.jpg",
      "website": "http://kpcvs.co.in/",
      "location": "Chennai"
    },
    "degree": "up till 10th",
    "duration": {
      "end": "March 2014"
    }
  }
];

// Store data for experience tab as JSON object
const experience_content = [
  {
    "organisation": {
      "name": "Couture.ai",
      "website": "https://couture.ai/",
      "location": "Bangalore"
    },
    "duration": {
      "start": "May 2020",
      "end": "August 2020"
    },
    "accomplishments": [
      "Set up a 5 node kubernetes cluster and NFS server on production servers",
      "Prepared kubernetes manifests for dropwizard APIs and deployed them on kubernetes",
      "Setup a 12 node Ambari cluster and multi node ignite cluster on production servers"
    ]
  },
  {
    "organisation": {
      "name": "Couture.ai",
      "website": "https://couture.ai/",
      "location": "Bangalore"
    },
    "duration": {
      "start": "July 2019",
      "end": "December 2019"
    },
    "accomplishments": [
      "Deployed minIO object store on kubernetes and tested read/write operations in minIO using python",
      "Set up a development grade kubernetes cluster (single master, three workers) with docker-registry, dynamic volume provisioning and prometheus for consuming logs",
      "Deployed Ignite on kubernetes and tested read/write operations using spark and dropwizard",
      "Configured Rsyslog to monitor logs from different services and forward them to a log server"
    ]
  },
  {
    "organisation": {
      "name": "CLRI",
      "website": "https://www.clri.org/",
      "location": "Chennai"
    },
    "duration": {
      "start": "June 2018",
      "end": "July 2018"
    },
    "accomplishments": [
      "Developed a task management system using JSP"
    ]
  }
];

// Store data for projects tab as JSON object
const project_content = [
  {
    "title": "NaturalSelectionSimulator",
    "tags": ["Python", "Multi-threading"],
    "description": [
      "Simulates game where each player has to find food and return home before end of day",
      "Attributes of players have a chance to mutate at end of each day"
    ],
    "references": [
      {
        "name": "github",
        "link": "https://github.com/NithishRaja/natural-selection-simulator"
      },
      {
        "name": "docker hub",
        "link": "https://hub.docker.com/r/nithishraja/natural_selection_simulator"
      }
    ]
  },
  {
    "title": "Daily Task Automation",
    "tags": ["Python", "Web scraping", "Twitter API", "Youtube Data API", "VueJS"],
    "description": [
      "Presents data from multiple sources in a single screen",
      "Some of the sources include Twitter, Youtube, multiple webpages and JSON files released by the NBA"
    ],
    "references": [
      {
        "name": "github",
        "link": "https://github.com/NithishRaja/daily_tasks"
      },
      {
        "name": "docker hub",
        "link": "https://hub.docker.com/repository/docker/nithishraja/start-day"
      }
    ]
  },
  {
    "title": "Tree Visualiser",
    "tags": ["UI", "Javascript", "VueJS"],
    "description": [
      "Simple UI to display a tree where each node can have any number of children"
    ],
    "references": [
      {
        "name": "github",
        "link": "https://github.com/NithishRaja/tree_visualiser"
      },
      {
        "name": "docker hub",
        "link": "https://hub.docker.com/repository/docker/nithishraja/tree-visualiser"
      }
    ]
  },
  {
    "title": "Sliding Puzzle",
    "tags": ["Python", "Graphs", "UI"],
    "description": [
      "UI for nxn sliding puzzle",
      "Calculates solution by performing BFS"
    ],
    "references": [
      {
        "name": "github",
        "link": "https://github.com/NithishRaja/sliding_puzzle"
      }
    ]
  },
  {
    "title": "Manga Downloader",
    "tags": ["Python", "Web scraping", "Multi threading"],
    "description": [
      "Downloads manga pages by scraping websites",
      "Leverages multi threading to complete downloads quickly"
    ],
    "references": [
      {
        "name": "github",
        "link": "https://github.com/NithishRaja/manga-downloader"
      },
      {
        "name": "docker hub",
        "link": "https://hub.docker.com/r/nithishraja/natural_selection_simulator"
      }
    ]
  }
];

// Array containing list of tabs
const content_list = ["home", "education", "experience", "project"];

// Store contact information in JSON format
const footer_content = {
  "email": {
    "text": "nithish.raja@students.iiit.ac.in",
    "link": "mailto:nithish.raja@students.iiit.ac.in",
    "icon": "envelope"
  },
  "mobile": {
    "text": "9876543210",
    "link": "9876543210",
    "icon": "phone"
  },
  "website": {
    "text": "visit my website",
    "link": "https://nithishraja.github.io",
    "icon": "internet-explorer"
  },
  "linkedin": {
    "text": "connect with me on linkedin",
    "link": "https://linkedin.com/in/nithish-raja-1a81ba140/",
    "icon": "linkedin"
  },
  "github": {
    "text": "Explore my projects",
    "link": "https://github.com/NithishRaja/",
    "icon": "github"
  },
  "resume": {
    "text": "View my resume",
    "link": "./Nithish_Raja.pdf",
    "icon": "file"
  }
};
