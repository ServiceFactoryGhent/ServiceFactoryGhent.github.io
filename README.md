# ServiceFactory
Service factory site

## Instruction manual for End-users

### How to write/adjust a post?
This section will show you how to write different types of posts.

#### Challenge post
1. Navigate to https://github.com/ServiceFactoryGhent/ServiceFactoryGhent.github.io/tree/master/_posts/challenges.
2. Click on the button 'create new file'.
3. Copy-paste following code into the new file.
``` 
---
layout: post                                
title: Challenge post
image: /images/posts/cras-ultricies.jpg
date: 2017-10-10 00:00:00 -0500
category: challenge
weight: 2
---

Write your Challenge description here
``` 
4. Adjust the settings:
  *  layout DON'T CHANGE - this property sets the post layout for a challenge
  *  title CHANGE - this property sets the title of a challenge
  *  image CHANGE - this property sets the path for the image you want to use for the challenge
  *  date CHANGE - this property sets the date when the post is made
  *  category DON'T CHANGE - this property categorizes the posts as a challenge
  *  weight CHANGE - this property sets the importance of the challenge (range: 1(less important) - 10(very important)
5. Write your content where 'Write your Challenge description here' is written.
6. Click 'commit new file', if you followed the previous steps carefully the post should appear on the website.


#### Project post
1. Navigate to https://github.com/ServiceFactoryGhent/ServiceFactoryGhent.github.io/tree/master/_posts/projects.
2. Click on the button 'create new file'.
3. Copy-paste following code into the new file.
``` 
---
layout: post
title: test2 - openstaand project
image: /images/posts/cras-ultricies.jpg
date: 2017-10-10 00:00:00 -0500
category: project
tags: [openstaand]
weight: 3
---

Write your Project description here
``` 
4. Adjust the settings:
  *  layout DON'T CHANGE - this property sets the post layout for a project
  *  title CHANGE - this property sets the title of a project
  *  image CHANGE - this property sets the path for the image you want to use for the project
  *  date CHANGE - this property sets the date when the post is made
  *  category DON'T CHANGE - this property categorizes the post as a project
  *  tags CHANGE - this property sets the status of the project, only one tag at a time allowed! (openstaand,lopend,afgewerkt)
  *  weight CHANGE - this property sets the importance of the project (range: 1(less important) - 10(very important)
5. Write your content where 'Write your Project description here' is written.
6. Click 'commit new file', if you followed the previous steps carefully the post should appear on the website.


#### News post
1. Navigate to https://github.com/ServiceFactoryGhent/ServiceFactoryGhent.github.io/tree/master/_posts/news.
2. Click on the button 'create new file'.
3. Copy-paste following code into the new file.
``` 
---
layout: post
title: test4
image: /images/posts/cras-ultricies.jpg
date: 2017-10-10 00:00:00 -0500
category: news
---

Write your news post here
``` 
4. Adjust the settings:
  *  layout DON'T CHANGE - this property sets the post layout for a challenge
  *  title CHANGE - this property sets the title of a challenge
  *  image CHANGE - this property sets the path for the image you want to use for the challenge
  *  date CHANGE - this property sets the date when the post is made
  *  category DON'T CHANGE - this property categorizes the post as a news post
5. Write your content where 'Write your news post here' is written.
6. Click 'commit new file', if you followed the previous steps carefully the post should appear on the website.

## Instruction manual for Developers

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
See deployment for notes on how to deploy the project on gh-pages.

### Prerequisites

What things you need to install and how to install them
* gem
* jekyll



### Installing



```
gem install jekyll bundler
cd "ServiceFactoryGhent.github.io"
bundle exec jekyll serve
Now browse to http://localhost:4000
```



## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
