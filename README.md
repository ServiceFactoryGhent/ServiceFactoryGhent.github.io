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
title: titel van de Challenge
image: /images/posts/cras-ultricies.jpg
date: 2017-10-10 00:00:00 -0500
category: challenge
weight: 2
---

Write your Challenge description here

Add an image by using the following line:
![text_thatappears_when_image_is_not_found](https://linktoimage.com/image.jpg)

``` 
4. Adjust the settings:
  *  layout DON'T CHANGE - this property sets the post layout for a challenge
  *  title CHANGE - this property sets the title of a challenge
  *  image CHANGE - this property sets the path for the image you want to use for the challenge, if empty it will use placeholder image
  *  date CHANGE - this property sets the date when the challenge is made
  *  category DON'T CHANGE - this property categorizes the posts as a challenge
  *  weight CHANGE - this property sets the importance of the challenge (range: 1(less important) - 10(very important)
5. Write your content where 'Write your Challenge description here' is written.
6. If you want to use images inside your text copy paste this link and adjust it: 
``` 
![text_thatappears_when_image_is_not_found](https://linktoimage.com/image.jpg)
``` 
* [] = the text that will appear when the image is not found or url is wrong
* () = url to image

7. Click 'commit new file', if you followed the previous steps carefully the post should appear on the website.


#### Service post
1. Navigate to https://github.com/ServiceFactoryGhent/ServiceFactoryGhent.github.io/tree/master/_posts/services.
2. Click on the button 'create new file'.
3. Copy-paste following code into the new file.
``` 
---
layout: post
title: titel van de servivce
image: /images/posts/cras-ultricies.jpg
date: 2017-10-10 00:00:00 -0500
category: service
tags: [openstaand]
weight: 3
---

Write your Service description here

Add an image by using the following line:
![text_thatappears_when_image_is_not_found](https://linktoimage.com/image.jpg)

``` 
4. Adjust the settings:
  *  layout DON'T CHANGE - this property sets the post layout for a service
  *  title CHANGE - this property sets the title of a service
  *  image CHANGE - this property sets the path for the image you want to use for the service, if empty it will use placeholder image
  *  date CHANGE - this property sets the date when the post is made
  *  category DON'T CHANGE - this property categorizes the post as a service
  *  tags CHANGE - this property sets the status of the service, only one tag at a time allowed! (openstaand,lopend,afgewerkt)
  *  weight CHANGE - this property sets the importance of the service (range: 1(less important) - 10(very important)
5. Write your content where 'Write your Service description here' is written.
6. If you want to use images inside your text, copy paste this link and adjust it: 
``` 
![text_thatappears_when_image_is_not_found](https://linktoimage.com/image.jpg)
``` 
* [] = the text that will appear when the image is not found or url is wrong
* () = url to image

7. Click 'commit new file', if you followed the previous steps carefully the post should appear on the website.


#### News post
1. Navigate to https://github.com/ServiceFactoryGhent/ServiceFactoryGhent.github.io/tree/master/_posts/news.
2. Click on the button 'create new file'.
3. Copy-paste following code into the new file.
``` 
---
layout: post
title: title of news item
image: /images/posts/cras-ultricies.jpg
date: 2017-10-10 00:00:00 -0500
category: news
---

Write your news post here

Add an image by using the following line:
![text_thatappears_when_image_is_not_found](https://linktoimage.com/image.jpg)
``` 
4. Adjust the settings:
  *  layout DON'T CHANGE - this property sets the post layout for a challenge
  *  title CHANGE - this property sets the title of a challenge
  *  image CHANGE - this property sets the path for the image you want to use for the challenge, if empty it will use placeholder image
  *  date CHANGE - this property sets the date when the post is made
  *  category DON'T CHANGE - this property categorizes the post as a news post
5. Write your content where 'Write your news post here' is written.
6. If you want to use images inside your text, copy paste this link and adjust it:
``` 
![text_thatappears_when_image_is_not_found](https://linktoimage.com/image.jpg)
``` 
* [] = the text that will appear when the image is not found or url is wrong
* () = url to image

7. Click 'commit new file', if you followed the previous steps carefully the post should appear on the website.

## Instruction manual for Developers

### Prerequisites

In order to run the project locally you need to install the following software:
* gem
* jekyll

### Local Deployment

``` 
git clone https://github.com/ServiceFactoryGhent/ServiceFactoryGhent.github.io.git
cd ServiceFactoryGhent.github.io.git
bundle exec jekyll serve
``` 
Now go to localhost:4000, the project should appear.

### Deployment to github

``` 
git clone https://github.com/ServiceFactoryGhent/ServiceFactoryGhent.github.io.git
// make adjustments to project
git add .
git commit -m "yourcommitmessage"
git push origin master
``` 

## License

This project is licensed under the GNU License - see the [LICENSE.md](LICENSE.md) file for details
