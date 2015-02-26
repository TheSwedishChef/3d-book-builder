# 3d-book-builder
An HTML, CSS &amp; JS 3D book builder. (Work in-progress)




VIDEO EXAMPLES
--------------

- Font Resizing 1		https://dl.dropboxusercontent.com/u/20265247/keep/3D-Book_builder/font-resizing.mov
- Font Resizing 2 	 	https://dl.dropboxusercontent.com/u/20265247/keep/3D-Book_builder/font-sizes-final.mov
- Font Resizing 3 		https://dl.dropboxusercontent.com/u/20265247/keep/3D-Book_builder/font-sizes.mov
- Book Resizing 		https://dl.dropboxusercontent.com/u/20265247/keep/3D-Book_builder/size-ref.mov
- Studio Logo Color 	https://dl.dropboxusercontent.com/u/20265247/keep/3D-Book_builder/studio_stamping_logo_color.mov




DEPENDENCIES
------------

- JQuery
- JQuery UI (tabs)




CONCEPT
-------

- 3D book is built & designed using CSS3 & HTML5
- CSS classes are pre-built to accommodate each book design option
- Book design options include cover color, # pages, dimensions, logo, text & gilding
- JQuery is used to watch changes to form elements and tghen apply the corresponding CSS class
- Fluid transitions are built into the CSS to facilitate smooth transitions between design changes
- JQuery is used to rotate the book 'view' from left, center, right and back



DESIGN NOTES
------------

There are lots of really interesting problems that needed solving with this project. In my case, I had a wide range of standard book sizes from 8x8" all the way up to 17x11". This presented a very real problem regarding SCALE: I couldn't scale the books proportionally because, in order to accommodate each size within my container, it meant my smallest size was too small to be usable on-screen. This meant I needed a sliding scale which would allow to scale each size attribute proportionally, but which would still show accurate relative relationships between sizes.

For example, if a user started on 8x8" then switched to a 10x10", I needed to show the book ENLARGING, but I couldn't enlarge by a full, proprtional 2"... but that doesn't matter because the user isn't measuring—they just need the basic visual indication that the book they switched to is indeed larger. So instead of scaling up by 2" in this scenario, I only scaled up by a small portion because STARTING with a large 8x8" book allowed me to take better advantage of the initial available real-estate within my container.

Problems like this persisted, and really challenged my math skills. In the end, I used SASS to define global variables for all of this scaling.
